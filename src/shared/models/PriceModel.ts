import { makeAutoObservable } from 'mobx';
import { ICommonStrapiDto, ITariffAttributeDto, ITariffTypesDto } from 'shared/interfaces';

/*Стоимость, если есть платные конференции*/
export class TariffModel {
  public id = 0;
  public title = '';
  public subTitle = '';
  public features = '';
  public types: ICommonStrapiDto<ITariffTypesDto>[] = [];
  public docs = '';
  public order = 0;
  public iconPath = '';
  public key? = '';

  constructor(dto?: ICommonStrapiDto<ITariffAttributeDto>) {
    makeAutoObservable(this, undefined, { autoBind: true });
    if (!dto) return;

    this.id = dto.id;
    const attr = dto.attributes;
    const type = dto.attributes.TariffTypes;

    this.types = type.data;
    this.title = attr.title;
    this.subTitle = attr.subTitle;
    this.features = attr.features ?? '';
    this.docs = attr.docs ?? '';
    this.order = attr.order;
    this.iconPath = attr.iconPath?.data?.attributes?.url ?? '';
    this.key = attr.key;
  }
}
