import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import localeData from 'dayjs/plugin/localeData';
import { makeAutoObservable, observable } from 'mobx';
import { ICommonStrapiDto, IConferenceAttributeDto, IConferenceTypeDto } from 'shared/interfaces';
dayjs.extend(localeData);
dayjs.locale('ru');

export class ConferenceModel {
  public title = '';
  public subTitle = '';

  public titleColor = '#ffffff';
  public subTitleColor = '#ffffff';

  public paymentDescription = '';

  public imagePath = '';
  public types: IConferenceTypeDto[] = [];
  public isRegistration = false;

  constructor(dto?: ICommonStrapiDto<IConferenceAttributeDto>) {
    makeAutoObservable(this, { title: observable }, { autoBind: true });
    if (!dto) return;
    const attr = dto.attributes.conferenceId.data.attributes;
    this.title = attr.title;
    this.subTitle = attr.subTitle;

    this.titleColor = attr.titleColor;
    this.subTitleColor = attr.subTitleColor;

    this.imagePath = attr.imagePath.data.attributes.url;
    this.isRegistration = attr.isRegistration;
    this.paymentDescription = attr.paymentDescription;

    this.types = attr.ConferenceTypes.data.map((item) => {
      const type = item.attributes;
      const date = dayjs(type.date).format('D MMMM HH:mm');
      return { id: item.id, name: type.name, date, location: type.location, price: type.price };
    });
  }
}
