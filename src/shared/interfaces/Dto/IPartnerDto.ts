import { ICommonObjectDto, IImageDto } from '..';
export interface IPartnerAttributeDto {
  order: number;
  iconPath?: ICommonObjectDto<IImageDto>;
  link?: string;
  isVisible: boolean;

  createdAt: string;
  updatedAt: string;

  locale: string;
}
