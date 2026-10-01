import { ICommonObjectDto, IImageDto } from '..';

export interface IFooterAttributeDto {
  order: number;
  iconPath?: ICommonObjectDto<IImageDto>;
  link?: string;
  isVisible: boolean;

  createdAt: string;
  updatedAt: string;

  locale: string;
}
