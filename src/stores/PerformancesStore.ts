import { action, makeObservable, observable, runInAction } from 'mobx';
import { PerformancesService } from 'services';
import { PerfomanceModel } from 'shared/models';
import { Utils } from 'shared/utils';

class PerformancesStore {
  public waiting = false;

  public performance: PerfomanceModel[] = [];

  constructor() {
    makeObservable(this, {
      performance: observable,
      getPerformances: action,
    });
  }

  public async getPerformances() {
    try {
      this.waiting = true;
      const dtos = await PerformancesService.getAllPerformances();
      if (!dtos) return;

      const attr = dtos.data.map((perfomance) => new PerfomanceModel(perfomance));

      runInAction(() => {
        this.performance = Utils.sortByField(attr, 'order');
      });
    } catch (e) {
      console.error(e);
    } finally {
      this.waiting = false;
    }
  }
}

export default new PerformancesStore();
