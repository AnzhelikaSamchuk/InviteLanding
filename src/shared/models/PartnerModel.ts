import { makeAutoObservable } from 'mobx';
import { ICommonStrapiDto, IPartnerAttributeDto } from 'shared/interfaces';

/** Партнеры */
export class PartnerModel {
  public id = 0;
  public order = 0;
  public iconPath = '';
  public link = '';
  public isVisible = false;

  constructor(dto?: ICommonStrapiDto<IPartnerAttributeDto>) {
    makeAutoObservable(this, undefined, { autoBind: true });
    if (!dto) return;

    this.id = dto.id;
    const attr = dto.attributes;

    this.order = attr.order;
    this.iconPath = attr.iconPath?.data.attributes.url ?? '';
    this.link = attr.link ?? '';
    this.isVisible = attr.isVisible;
  }
}
