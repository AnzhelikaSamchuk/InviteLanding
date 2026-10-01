import { action, makeObservable, observable, runInAction } from 'mobx';
import { NavigationsService } from 'services';
import { NavigationModel } from 'shared/models';
import { Utils } from 'shared/utils';

class NavigationsStore {
  public waiting = false;

  public navigations: NavigationModel[] = [];
  public isDrawerOpen = false;

  constructor() {
    makeObservable(this, {
      navigations: observable,
      isDrawerOpen: observable,
      getNavigations: action,
      setIsDrawerOpen: action,
    });
  }

  public setIsDrawerOpen(value: boolean) {
    this.isDrawerOpen = value;
  }

  public async getNavigations() {
    try {
      this.waiting = true;

      const dtos = await NavigationsService.getAllNavigations();
      if (!dtos) return;

      const attr = dtos.data.map((navigation) => new NavigationModel(navigation));
      const isVisibleAttr = attr.filter((navigation) => {
        if (navigation.isVisible) {
          return navigation;
        }
      });

      runInAction(() => {
        this.navigations = Utils.sortByField(isVisibleAttr, 'order');
      });
    } catch (e) {
    } finally {
      this.waiting = false;
    }
  }
}

export default new NavigationsStore();
