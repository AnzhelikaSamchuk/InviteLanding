import { action, computed, makeObservable, observable } from 'mobx';
import { conferenceStore } from 'stores';
import { TariffModel } from '../PriceModel';
import { ICommonPostDto, ICommonStrapiDto, ICorporateRegistrationAttributeDto, IPostCorporateRegistration } from 'shared/interfaces';
import { CorporateTariffTypeModel } from './CorporateTariffTypeModel';

export class CorporateRegistrationModel {
  public fullName = '';
  public company = '';
  public phone = '';
  public email = '';
  public tariffTypes: CorporateTariffTypeModel[] = [];

  constructor(dto?: ICommonStrapiDto<ICorporateRegistrationAttributeDto>) {
    makeObservable(this, {
      fullName: observable,
      phone: observable,
      email: observable,
      tariffTypes: observable,

      resultCost: computed,
      clearModel: action,
      setFullName: action,
      setPhone: action,
      setEmail: action,
      setTariffTypes: action,
    });
    if (!dto) return;
    const attr = dto.attributes;
    this.fullName = attr.fullName;
    this.company = attr.company;
    this.phone = attr.phone;
    this.email = attr.email;
  }

  public get resultCost() {
    let sum = 0;
    this.tariffTypes.forEach((type) => {
      sum += type.count * type.cost;
    });

    return sum;
  }

  public clearModel() {
    this.fullName = '';
    this.company = '';
    this.phone = '';
    this.email = '';

    this.tariffTypes.forEach((tt) => {
      tt.count = 0;
    });
  }

  public setFullName(fullName: string) {
    this.fullName = fullName.trim();
  }

  public setCompany(company: string) {
    this.company = company.trim();
  }

  public setPhone(phone: string) {
    this.phone = phone.trim();
  }

  public setEmail(email: string) {
    this.email = email.trim();
  }

  public setTariffTypes(corporateTariffModel: TariffModel) {
    this.tariffTypes = [];
    corporateTariffModel.types.forEach((type) => {
      this.tariffTypes.push(
        new CorporateTariffTypeModel({
          tariffType: type.id,
          cost: type.attributes.price,
          count: 0,
          name: type.attributes.title,
        })
      );
    });
  }

  public getDto(): ICommonPostDto<IPostCorporateRegistration> {
    return {
      data: {
        fullName: this.fullName,
        company: this.company,
        phone: this.phone,
        email: this.email,
        corporateSelectedTariffs: this.tariffTypes.map((t) => t.getDto()),
        conferenceId: conferenceStore.currentConferenceId,
      },
    };
  }
}
