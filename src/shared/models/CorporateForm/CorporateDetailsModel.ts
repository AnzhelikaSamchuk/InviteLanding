import { makeAutoObservable } from 'mobx';
import { conferenceStore } from 'stores';
import { ICommonPostDto, ICommonStrapiDto, ICorporateDetailsAttributeDto, IPostCorporateDetails } from 'shared/interfaces';

export class CorporateDetailsModel {
  public entityCompany = '';
  public innCompany = '';
  public kppCompany = '';
  public actualAddressCompany = '';
  public legalAddressCompany = '';
  public bik = '';
  public corporateAccount = '';
  public innBank = '';
  public kppBank = '';
  public bankName = '';

  constructor(dto?: ICommonStrapiDto<ICorporateDetailsAttributeDto>) {
    makeAutoObservable(this, undefined, { autoBind: true });
    if (!dto) return;
    const attr = dto.attributes;
    this.entityCompany = attr.entityCompany;
    this.innCompany = attr.innCompany;
    this.kppCompany = attr.kppCompany;
    this.actualAddressCompany = attr.actualAddressCompany;
    this.legalAddressCompany = attr.legalAddressCompany;
    this.bik = attr.bik;
    this.corporateAccount = attr.corporateAccount;
    this.innBank = attr.innBank;
    this.kppBank = attr.kppBank;
    this.bankName = attr.bankName;
  }

  public clearModel() {
    this.entityCompany = '';
    this.innCompany = '';
    this.kppCompany = '';
    this.actualAddressCompany = '';
    this.legalAddressCompany = '';
    this.bik = '';
    this.corporateAccount = '';
    this.innBank = '';
    this.kppBank = '';
    this.bankName = '';
  }

  private trim(name: string) {
    return name.trim();
  }

  public setEntityCompany(entityCompany: string) {
    this.entityCompany = this.trim(entityCompany);
  }

  public setInnCompany(innCompany: string) {
    this.innCompany = this.trim(innCompany);
  }

  public setKppCompany(kppCompany: string) {
    this.kppCompany = kppCompany;
  }

  public setActualAddressCompany(actualAddressCompany: string) {
    this.actualAddressCompany = actualAddressCompany;
  }

  public setLegalAddressCompany(legalAddressCompany: string) {
    this.legalAddressCompany = legalAddressCompany;
  }

  public setBik(bik: string) {
    this.bik = bik;
  }

  public setCorporateAccount(corporateAccount: string) {
    this.corporateAccount = corporateAccount;
  }

  public setInnBank(innBank: string) {
    this.innBank = innBank;
  }

  public setKppBank(kppBank: string) {
    this.kppBank = kppBank;
  }

  public setBankName(bankName: string) {
    this.bankName = bankName;
  }

  public getDto(): ICommonPostDto<IPostCorporateDetails> {
    return {
      data: {
        entityCompany: this.entityCompany,
        innCompany: this.innCompany,
        kppCompany: this.kppCompany,
        actualAddressCompany: this.actualAddressCompany,
        legalAddressCompany: this.legalAddressCompany,
        bik: this.bik,
        corporateAccount: this.corporateAccount,
        innBank: this.innBank,
        kppBank: this.kppBank,
        bankName: this.bankName,
        conferenceId: conferenceStore.currentConferenceId,
      },
    };
  }
}
