export interface IAboutUsAttributeDto {
  description: string;
  forSpeakersTitle?: string;
  forSpeakersLink?: string;

  createdAt: string;
  updatedAt: string;

  locale: string;
}

export interface IAboutUsDto {
  description: string;
  forSpeakersTitle?: string;
  forSpeakersLink?: string;
}
