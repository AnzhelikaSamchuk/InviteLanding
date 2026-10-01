import { action, computed, makeObservable, observable, runInAction } from 'mobx';
import { ParticipantFormService } from 'services';
import { conferenceStore, tariffStore, toastStore } from 'stores';
import { TARIFF_KEYS } from 'shared/constants';
import { ParticipantsFormModes, PaymentStatuses } from 'shared/enums';
import { ICommonStrapiDto, ITariffTypesDto } from 'shared/interfaces';
import { ParticipantModel, TariffModel } from 'shared/models';

class ParticipantsStore {
  public isWaiting = false;

  public personal: ParticipantModel = new ParticipantModel();
  public isDialogOpen = false;
  public isRubiusSuccess = false;

  public dialogTariffs?: TariffModel[] = undefined;
  public isBaseTariff = false;

  public dialogMode = ParticipantsFormModes.Registration;

  constructor() {
    makeObservable(this, {
      isWaiting: observable,
      personal: observable,
      isDialogOpen: observable,
      isRubiusSuccess: observable,
      dialogTariffs: observable,
      isBaseTariff: observable,
      dialogMode: observable,

      tariffType: computed,

      openDialog: action,
      closeDialog: action,
      setDialogMode: action,
      successAction: action,
      submitParticipant: action,
    });
  }

  public get tariffType() {
    let tariffType: ICommonStrapiDto<ITariffTypesDto> | undefined = undefined;

    if (!this.dialogTariffs || this.dialogTariffs.length === 0) return undefined;

    for (const t of this.dialogTariffs) {
      for (const type of t.types) {
        if (type.id === this.personal.tariffTypeId) {
          tariffType = type;
          break;
        }
      }

      if (!!tariffType) break;
    }

    return tariffType;
  }

  public openDialog(dialogTariffs?: TariffModel[], selectedTariffType?: ICommonStrapiDto<ITariffTypesDto> | undefined) {
    this.setDialogMode(ParticipantsFormModes.Registration);
    this.isRubiusSuccess = false;
    this.isDialogOpen = true;

    if (!!dialogTariffs) this.dialogTariffs = dialogTariffs;
    else {
      // выбираем базовый тариф
      this.isBaseTariff = true;
      this.dialogTariffs = tariffStore.tariffs.filter((t) => t.key === TARIFF_KEYS.BASE);
    }

    let selectedTariffTypeId = 0;
    if (this.dialogTariffs.length > 0) selectedTariffTypeId = selectedTariffType?.id ?? this.dialogTariffs[0].types[0]?.id;

    if (!!selectedTariffTypeId) {
      this.personal.setTariffTypeId(selectedTariffTypeId, selectedTariffType?.attributes.title ?? '');
    }
  }

  public closeDialog() {
    if (this.isWaiting) return;

    this.isDialogOpen = false;
    this.isBaseTariff = false;
    this.dialogTariffs = undefined;
    this.personal.clearTariff();
  }

  public setDialogMode(value: ParticipantsFormModes) {
    this.dialogMode = value;
  }

  public async submitParticipant() {
    if (this.isWaiting) return;

    this.isWaiting = true;

    try {
      const isValid = await this.isParticipantValid();
      if (!isValid) return;

      if (this.personal.isRubiusEmpolyee) await this.postParticipant(PaymentStatuses.Rubius);
      else if (this.tariffType?.attributes.price === 0) await this.postParticipant(PaymentStatuses.Free);
      else await this.pay();
    } catch {
    } finally {
      this.isWaiting = false;
    }
  }

  public successAction() {
    this.setDialogMode(ParticipantsFormModes.Success);
    this.isRubiusSuccess = this.personal.isRubiusEmpolyee;
    this.personal.clearModel();
    this.personal.clearTariff();
  }

  private async postParticipant(paymentStatus?: PaymentStatuses, withoutSuccessAction?: boolean): Promise<void> {
    if (paymentStatus === PaymentStatuses.Failed) {
      toastStore.showError('Произошла ошибка оплаты, попробуйте снова');
    }

    try {
      const dto = this.personal.postDto;
      dto.data.paymentStatus = paymentStatus ?? PaymentStatuses.Pending;

      const addedParticipant = await ParticipantFormService.addParticipant(dto);

      if (!addedParticipant) throw 'Ошибка';

      if (!withoutSuccessAction) this.successAction();

      return;
    } catch (e) {
      toastStore.showError('Произошла ошибка, попробуйте зарегистрироваться еще раз');
    }
  }

  private async isParticipantValid() {
    try {
      const repeatedParticipants = await ParticipantFormService.getParticipantsByEmail(this.personal.email, conferenceStore.currentConferenceId);

      if (repeatedParticipants?.data?.length !== 0) {
        toastStore.showError('Пользователь с данным email уже зарегистрирован');
        return false;
      }

      return true;
    } catch {
      return false;
    }
  }

  private pay = async () => {
    await this.postParticipant(PaymentStatuses.Success);
  };
}

export default new ParticipantsStore();
