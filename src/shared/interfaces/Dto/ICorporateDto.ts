export interface ICorporateRegistrationAttributeDto {
  fullName: string;
  company: string;
  phone: string;
  email: string;
}

export interface ICorporateFormTariffType {
  name: string;
  count: number;
  cost: number;
  tariffType: number;
}

export interface IPostCorporateRegistration extends ICorporateRegistrationAttributeDto {
  conferenceId: number;
  corporateSelectedTariffs: ICorporateFormTariffType[];
}

export interface ICorporateDetailsAttributeDto {
  entityCompany: string;
  innCompany: string;
  kppCompany: string;
  actualAddressCompany: string;
  legalAddressCompany: string;
  bik: string;
  corporateAccount: string;
  innBank: string;
  kppBank: string;
  bankName: string;
}

export interface IPostCorporateDetails extends ICorporateDetailsAttributeDto {
  conferenceId: number;
}
