import { IAboutConferenceAttributeDto, ICommonArrayDto, ICommonObjectDto, IImageDto, IParticipantTypeDto } from '.';

export interface IConferenceAttributeDto {
  createdAt: string;
  updatedAt: string;
  locale: string;
  conferenceId: ICommonObjectDto<IConferenceDto>;
}

export interface IConferenceDto {
  title: string;
  subTitle: string;
  titleColor: string;
  subTitleColor: string;
  paymentDescription: string;
  createdAt: string;
  updatedAt: string;
  locale: string;
  isRegistration: boolean;
  imagePath: ICommonObjectDto<IImageDto>;
  about_conference: ICommonObjectDto<IAboutConferenceAttributeDto>;
  ConferenceTypes: ICommonArrayDto<IParticipantTypeDto>;
}
