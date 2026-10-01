import { action, makeObservable, observable, runInAction } from 'mobx';
import { PartnersService } from 'services';
import { PartnerModel } from 'shared/models';
import { Utils } from 'shared/utils';

class PartnersStore {
  public waiting = false;

  public partners: PartnerModel[] = [];

  constructor() {
    makeObservable(this, {
      partners: observable,
      getPartners: action,
    });
  }

  public async getPartners() {
    try {
      this.waiting = true;

      const dtos = await PartnersService.getAllPartners();
      if (!dtos) return;

      const attr = dtos.data.map((partner) => new PartnerModel(partner));
      const isVisibleAttr = attr.filter((partner) => {
        if (partner.isVisible) {
          return partner;
        }
      });

      runInAction(() => {
        this.partners = Utils.sortByField(isVisibleAttr, 'order');
      });
    } catch (e) {
    } finally {
      this.waiting = false;
    }
  }
}

export default new PartnersStore();
