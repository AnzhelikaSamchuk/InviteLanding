import { makeAutoObservable } from 'mobx';
import { conferenceStore } from 'stores';
import { ICommonPostDto, ICommonStrapiDto, IPreSpeakerAttributeDto, IPostPreSpeaker } from 'shared/interfaces';

export class PreSpeakerModel {
  public name = '';
  public surname = '';
  public company = '';
  public position = '';
  public topic = '';
  public shortDesc = '';
  public phone = '';
  public email = '';

  constructor(dto?: ICommonStrapiDto<IPreSpeakerAttributeDto>) {
    makeAutoObservable(this, undefined, { autoBind: true });
    if (!dto) return;
    const attr = dto.attributes;
    this.name = attr.name;
    this.surname = attr.surname;
    this.company = attr.company;
    this.position = attr.position;
    this.topic = attr.topic;
    this.shortDesc = attr.shortDesc;
    this.phone = attr.phone;
    this.email = attr.email;
  }

  public clearModel() {
    this.name = '';
    this.surname = '';
    this.company = '';
    this.position = '';
    this.topic = '';
    this.shortDesc = '';
    this.phone = '';
    this.email = '';
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

  public setTopic(topic: string) {
    this.topic = this.trim(topic);
  }

  public setShortDesc(shortDesc: string) {
    this.shortDesc = this.trim(shortDesc);
  }

  public setPhone(phone: string) {
    this.phone = this.trim(phone);
  }

  public setEmail(email: string) {
    this.email = email;
  }

  public getDto(): ICommonPostDto<IPostPreSpeaker> {
    return {
      data: {
        name: this.name,
        surname: this.surname,
        company: this.company,
        position: this.position,
        topic: this.topic,
        shortDesc: this.shortDesc,
        phone: this.phone,
        email: this.email,
        conferenceId: conferenceStore.currentConferenceId,
      },
    };
  }
}
