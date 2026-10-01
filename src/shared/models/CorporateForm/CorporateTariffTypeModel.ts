import { action, makeObservable, observable } from 'mobx';
import { ICorporateFormTariffType } from 'shared/interfaces';

export class CorporateTariffTypeModel {
  public tariffTypeId = 0;
  public count = 0;
  public cost = 0;
  public name = '';

  constructor(dto?: ICorporateFormTariffType) {
    makeObservable(this, {
      tariffTypeId: observable,
      count: observable,
      cost: observable,
      name: observable,

      increaseCount: action,
      decreaseCount: action,
      setCount: action,
    });
    if (!dto) return;

    this.tariffTypeId = dto.tariffType;
    this.count = dto.count;
    this.cost = dto.cost;
    this.name = dto.name;
  }

  public increaseCount() {
    this.count++;
  }

  public decreaseCount() {
    this.count--;
    if (this.count < 0) this.count = 0;
  }

  public setCount(count: number) {
    this.count = count;
    if (this.count < 0) this.count = 0;
  }

  public getDto(): ICorporateFormTariffType {
    return {
      tariffType: this.tariffTypeId,
      count: this.count,
      cost: this.cost,
      name: this.name,
    };
  }
}
