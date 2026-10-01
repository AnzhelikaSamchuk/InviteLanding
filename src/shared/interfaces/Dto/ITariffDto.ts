import { ICommonObjectDto, IImageDto, ICommonArrayRelationDto } from '..';

export interface ITariffAttributeDto {
  title: string;
  subTitle: string;
  features?: string;
  docs?: string;
  order: number;
  iconPath: ICommonObjectDto<IImageDto>;
  key?: string;
  TariffTypes: ICommonArrayRelationDto<ITariffTypesDto>;
  isVisible?: boolean;

  createdAt: string;
  updatedAt: string;

  locale: string;
}

export interface ITariffTypesDto {
  title: string;
  price: number;

  createdAt: string;
  updatedAt: string;
  locale: string;
}
