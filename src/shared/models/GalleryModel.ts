import { makeAutoObservable } from 'mobx';
import { ICommonStrapiDto, IGalleryAttributeDto } from 'shared/interfaces';

/** Партнеры */
export class GalleryModel {
  public id = 0;
  public iconPath = '';
  public order = 0;
  public isVisible = false;

  constructor(dto?: ICommonStrapiDto<IGalleryAttributeDto>) {
    makeAutoObservable(this, undefined, { autoBind: true });
    if (!dto) return;

    this.id = dto.id;
    const attr = dto.attributes;

    this.iconPath = attr.iconPath?.data.attributes.url ?? '';
    this.order = attr.order;
    this.isVisible = attr.isVisible;
  }
}
