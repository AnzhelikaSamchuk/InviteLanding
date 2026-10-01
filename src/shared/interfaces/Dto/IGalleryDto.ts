import { ICommonObjectDto, IImageDto } from '..';
export interface IGalleryAttributeDto {
  iconPath?: ICommonObjectDto<IImageDto>;
  order: number;
  isVisible: boolean;

  createdAt: string;
  updatedAt: string;

  locale: string;
}
