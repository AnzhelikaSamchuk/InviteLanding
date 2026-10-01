export interface ICommonObjectDto<T> {
  data: ICommonStrapiDto<T>;
  meta: IMetaDto;
}
export interface ICommonArrayDto<T> {
  data: ICommonStrapiDto<T>[];
  meta: IMetaDto;
}

export interface ICommonArrayRelationDto<T> {
  data: ICommonStrapiDto<T>[];
}

export interface ICommonPostDto<T> {
  data: T;
}

export interface IMetaDto {
  pagination: IPaginationDto;
}

export interface IPaginationDto {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface ICommonStrapiDto<T> {
  attributes: T;
  id: number;
}

export interface IImageDto {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  url: string;
}
