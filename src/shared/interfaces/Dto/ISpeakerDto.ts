import { ICommonObjectDto, IImageDto, ICommonStrapiDto, ICommonArrayRelationDto, ILectureDataDto } from '..';
import { SpeakerTypes } from '../../enums/SpeakerTypes';
import { IConferenceDto } from './IConferenceDto';

export interface ISpeakerAttributeDto {
  order: number;
  title?: string;
  description?: string;

  createdAt: string;
  updatedAt: string;
  locale: string;

  Day: IDayDto;
  LectureSection: ILectureSectionDto;
  Speakers: ICommonArrayRelationDto<ISpeakersAttributeDto>;
}

export interface IDayDto {
  data: ICommonStrapiDto<IDayAttributeDto>;
}

export interface ILectureSectionDto {
  data: ICommonStrapiDto<ILectureSectionAttributeDto>;
}

export interface IDayAttributeDto {
  order: number;
  title?: string;
  isVisible: boolean;

  createdAt: string;
  updatedAt: string;
  locale: string;
}

export interface ILectureSectionAttributeDto {
  order: number;
  title?: string;
  isVisible: boolean;

  createdAt: string;
  updatedAt: string;
  locale: string;
}

export interface IKeySpeakersAttributeDto {
  order: number;
  conferenceId: ICommonObjectDto<IConferenceDto>;
  speaker: ICommonObjectDto<ISpeakersRelationKeySpeakers>;
}

export interface ISpeakersAttributeDto {
  position?: string;
  company?: string;
  photo?: ICommonObjectDto<IImageDto>;

  createdAt: string;
  updatedAt: string;
  locale: string;

  speakerType: SpeakerTypes;
  fullName: string;
  vkUrl: string;
  facebookUrl: string;
  instagramUrl: string;
}

export interface ISpeakersRelationKeySpeakers extends ISpeakersAttributeDto {
  Lectures: ICommonArrayRelationDto<ILectureDataDto>;
}
