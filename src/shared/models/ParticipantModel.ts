import { makeAutoObservable } from 'mobx';
import { conferenceStore } from 'stores';
import { ICommonPostDto, IParticipantDto, IPostParticipant } from 'shared/interfaces';

const EMPLOYEE_EMAIL_DOMAIN = '@example.com';

export class ParticipantModel {
  public name = '';
  public surname = '';
  public company = '';
  public position = '';
  public email = '';
  public phone = '';
  public formParticipation = '';
  public help = false;
  public tariffTypeId = 0;

  constructor(dto?: IParticipantDto) {
    makeAutoObservable(this, {}, { autoBind: true });
    if (!dto) return;

    this.name = dto.name;
    this.surname = dto.surname;
    this.company = dto.company;
    this.position = dto.position;
    this.email = dto.email;
    this.phone = dto.phone;
    this.formParticipation = dto.formParticipation;
    this.help = dto.help;
  }

  public get isRubiusEmpolyee(): boolean {
    return this.email.toLowerCase().includes(EMPLOYEE_EMAIL_DOMAIN);
  }

  public get withHelpCheckbox(): boolean {
    const formParticipation = this.formParticipation.toLowerCase();
    return formParticipation.includes('offline') || formParticipation.includes('офлайн');
  }

  public clearModel() {
    this.name = '';
    this.surname = '';
    this.company = '';
    this.position = '';
    this.email = '';
    this.phone = '';
    this.help = false;
    this.tariffTypeId = 0;
    this.formParticipation = '';
  }

  public clearTariff() {
    this.formParticipation = '';
  }

  private trim(name: string) {
    return name.trim();
  }

  public setName(name: string) {
    this.name = this.trim(name);
  }

  public setSurname(surname: string) {
    this.surname = this.trim(surname);
  }

  public setCompany(company: string) {
    this.company = this.trim(company);
  }

  public setPosition(position: string) {
    this.position = this.trim(position);
  }

  public setHelp(help: boolean) {
    this.help = help;
  }

  public setPhone(phone: string) {
    this.phone = this.trim(phone);
  }

  public setEmail(email: string) {
    this.email = email;
  }

  public setTariffTypeId(value: number, name: string) {
    this.tariffTypeId = value;
    this.formParticipation = name;
  }

  public get postDto(): ICommonPostDto<IPostParticipant> {
    return {
      data: {
        name: this.name,
        surname: this.surname,
        company: this.company,
        position: this.position,
        email: this.email,
        phone: this.phone,
        formParticipation: this.formParticipation,
        help: this.help,
        conferenceId: conferenceStore.currentConferenceId,
        tariffTypeId: this.tariffTypeId,
      },
    };
  }
}
