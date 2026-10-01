import { action, makeObservable, observable } from 'mobx';
import { conferenceStore, toastStore } from 'stores';
import { CorporateFormModes } from 'shared/enums/formModeEnums';
import { CorporateDetailsModel, CorporateRegistrationModel } from 'shared/models';
import { CorporateParticipantService } from 'services';

class CorporateStore {
  public isWaiting = false;

  public corporateRegistration: CorporateRegistrationModel = new CorporateRegistrationModel();
  public corporateDetails: CorporateDetailsModel = new CorporateDetailsModel();
  public isDialogOpen = false;
  public corporateMode: CorporateFormModes = CorporateFormModes.Registration;

  constructor() {
    makeObservable(this, {
      isWaiting: observable,
      corporateRegistration: observable,
      corporateDetails: observable,
      isDialogOpen: observable,
      corporateMode: observable,

      postCorporate: action,
      openDialog: action,
      closeDialog: action,
      setCorporateMode: action,
    });
  }

  public openDialog() {
    this.setCorporateMode(CorporateFormModes.Registration);
    this.isDialogOpen = true;
  }

  public closeDialog() {
    this.isDialogOpen = false;
  }

  public setCorporateMode(value: CorporateFormModes) {
    this.corporateMode = value;
  }

  public async postCorporate(): Promise<void> {
    if (this.isWaiting) return;

    console.log(this.corporateRegistration);

    this.isWaiting = true;

    try {
      const repeatedParticipant = await CorporateParticipantService.getByEmailAndConference(
        this.corporateRegistration.email,
        conferenceStore.currentConferenceId
      );

      if (repeatedParticipant.data.length !== 0) {
        toastStore.showError('Корпоративный участник с данным email уже зарегистрирован');
        return;
      }

      await CorporateParticipantService.addParticipant(this.corporateRegistration.getDto());
      this.setCorporateMode(CorporateFormModes.Success);
      this.corporateRegistration.clearModel();
      return;
    } catch (e) {
      toastStore.showError('Произошла ошибка, попробуйте зарегистрироваться еще раз');
    } finally {
      this.isWaiting = false;
    }
  }
}

export default new CorporateStore();
