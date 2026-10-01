import dayjs from 'dayjs';
import 'dayjs/locale/ru';

import localeData from 'dayjs/plugin/localeData';
import { makeAutoObservable } from 'mobx';
import { ICommonStrapiDto, IPerformanceAttributeDto } from 'shared/interfaces';

dayjs.extend(localeData);
dayjs.locale('ru');

/** Выступление */
export class PerfomanceModel {
  public id = 0;
  public title = '';
  public order = 0;
  public iconPath = '';
  public videoLink = '';
  public videoTime = '';
  public diffDate = 0;

  constructor(dto?: ICommonStrapiDto<IPerformanceAttributeDto>) {
    makeAutoObservable(this, undefined, { autoBind: true });
    if (!dto) return;

    this.id = dto.id;
    const attr = dto.attributes;

    this.title = attr.title;
    this.order = attr.order;
    this.videoLink = attr.videoLink;
    this.iconPath = attr.iconPath?.data?.attributes?.url ?? '';
    this.videoTime = attr.videoTime ?? '';

    const date = dayjs(attr.date);
    const currentDay = dayjs(new Date());
    this.diffDate = currentDay.diff(date, 'month');
  }
}
