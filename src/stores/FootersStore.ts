import { action, makeObservable, observable, runInAction } from 'mobx';
import { FootersService } from 'services';
import { FooterModel } from 'shared/models';
import { Utils } from 'shared/utils';

class FootersStore {
  public waiting = false;

  public footers: FooterModel[] = [];

  constructor() {
    makeObservable(this, {
      waiting: observable,
      footers: observable,
      getFooters: action,
    });
  }

  public async getFooters() {
    try {
      this.waiting = true;

      const dtos = await FootersService.getAllFooters();
      if (!dtos) return;

      const attr = dtos.data.map((footer) => new FooterModel(footer));

      runInAction(() => {
        this.footers = Utils.sortByField(attr, 'order');
      });
    } catch (e) {
    } finally {
      this.waiting = false;
    }
  }
}

export default new FootersStore();
