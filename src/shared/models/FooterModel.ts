import { makeAutoObservable } from 'mobx';
import { ICommonStrapiDto, IFooterAttributeDto } from 'shared/interfaces';

/** Футер */
export class FooterModel {
  public id = 0;
  public order = 0;
  public iconPath = '';
  public link = '';
  public isVisible = false;

  constructor(dto?: ICommonStrapiDto<IFooterAttributeDto>) {
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
