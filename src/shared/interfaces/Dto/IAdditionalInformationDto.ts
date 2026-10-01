export interface IAdditionalInformationAttributeDto {
  photoTitle?: string;
  photoLink?: string;

  videoTitle?: string;
  videoLink?: string;

  createdAt: string;
  updatedAt: string;

  locale: string;
}

export interface IPhotoInformationDto {
  photoTitle?: string;
  photoLink?: string;
}

export interface IVideoInformationDto {
  videoTitle?: string;
  videoLink?: string;
}
