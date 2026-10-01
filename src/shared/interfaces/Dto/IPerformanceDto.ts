import { ICommonObjectDto, IImageDto } from '..';

export interface IPerformanceAttributeDto {
  title: string;
  order: number;
  iconPath?: ICommonObjectDto<IImageDto>;
  videoLink: string;
  videoTime?: string;
  date: string;

  createdAt: string;
  updatedAt: string;

  locale: string;
}
