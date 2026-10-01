import { action, makeObservable, observable, runInAction } from 'mobx';
import { TariffService } from 'services';
import { corporateStore } from 'stores';
import { TARIFF_KEYS } from 'shared/constants/common';
import { TariffModel } from 'shared/models';
import { Utils } from 'shared/utils';

class TariffStore {
  public waiting = false;

  public tariffs: TariffModel[] = [];
  public freeConferenceModel: TariffModel | null = null;

  constructor() {
    makeObservable(this, {
      tariffs: observable,
      freeConferenceModel: observable,

      getTariffs: action,
    });
  }

  public async getTariffs() {
    try {
      this.waiting = true;

      const dtos = await TariffService.get();
      if (!dtos) return;

      let freeConferenceModel: TariffModel | null = null;
      let corporateTariff: TariffModel | null = null;

      let isFree = true;
      // Если конференция не бесплатная - выводим список тарифов, иначе тариф из БД с ключом бесплатной конференции
      const tariffs: TariffModel[] = [];
      dtos.data.forEach((tariff) => {
        if (tariff.attributes.key === TARIFF_KEYS.KEY_FREE_CONFERENCES) {
          freeConferenceModel = new TariffModel(tariff);
          return;
        }

        if (tariff.attributes.key === TARIFF_KEYS.CORPORATE) {
          corporateTariff = new TariffModel(tariff);
          return;
        }

        if (!tariff.attributes.isVisible) return;

        if (isFree && tariff.attributes.TariffTypes.data.some((type) => type.attributes.price !== 0)) {
          isFree = false;
        }

        tariffs.push(new TariffModel(tariff));
      });

      if (!isFree) {
        freeConferenceModel = null;
        // установим данные по типам тарифа для корпоративной формы
        if (!!corporateTariff) {
          tariffs.push(corporateTariff);
          corporateStore.corporateRegistration.setTariffTypes(corporateTariff);
        }
      }

      runInAction(() => {
        this.tariffs = Utils.sortByField(tariffs, 'order');
        this.freeConferenceModel = freeConferenceModel;
      });
    } catch (e) {
    } finally {
      this.waiting = false;
    }
  }
}

export default new TariffStore();
