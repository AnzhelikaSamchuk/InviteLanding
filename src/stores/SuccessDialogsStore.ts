import { action, makeObservable, observable, runInAction } from 'mobx';
import { SuccessDialogService } from 'services';
import { ISuccessAttributeDto } from 'shared/interfaces';

class SuccessDialogsStore {
  public waiting = false;

  public successAttributes: ISuccessAttributeDto[] = [];

  constructor() {
    makeObservable(this, {
      successAttributes: observable,
      getAllSuccess: action,
    });
  }

  public async getAllSuccess() {
    try {
      this.waiting = true;

      const dtos = await SuccessDialogService.getAllSuccess();
      if (!dtos) return;

      const result: ISuccessAttributeDto[] = [];
      dtos.data.forEach((group) => {
        result.push(group.attributes);
      });

      runInAction(() => {
        this.successAttributes = result;
      });
    } catch (e) {
    } finally {
      this.waiting = false;
    }
  }
}

export default new SuccessDialogsStore();
