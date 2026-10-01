import { makeAutoObservable } from 'mobx';
import { ICommonStrapiDto, INavigationAttributeDto } from 'shared/interfaces';

/** Нафигация в меню */
export class NavigationModel {
  public id = 0;
  public isVisible = false;
  public order = 0;
  public title = '';
  public key = '';

  constructor(dto?: ICommonStrapiDto<INavigationAttributeDto>) {
    makeAutoObservable(this, undefined, { autoBind: true });
    if (!dto) return;

    this.id = dto.id;
    const attr = dto.attributes;

    this.order = attr.order;
    this.isVisible = attr.isVisible;
    this.title = attr.title;
    this.key = attr.key;
  }
}
