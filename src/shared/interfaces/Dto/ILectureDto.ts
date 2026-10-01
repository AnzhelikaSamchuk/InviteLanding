import { ICommonObjectDto, IImageDto, ICommonStrapiDto, IConferenceDto, ICommonArrayRelationDto } from '..';
import { SpeakerTypes } from 'shared/enums/SpeakerTypes';

export interface ISpeakerDto {
  id: number;
  name: string;
  photo: string;
  position: string;
  company: string;
  speakerType: SpeakerTypes;
}

export interface ILectureAttributeDto extends ILectureDataDto {
  LectureSection: ILectureSectionDto;
  Speakers: ICommonArrayRelationDto<ISpeakersAttributeDto>;
  conferenceId: ICommonObjectDto<IConferenceDto>;
}

export interface ILectureDataDto {
  order: number;
  title?: string;
  subTitle?: string;
  description?: string;
  startTime: string;
  endTime: string;
  isVisible: boolean;
  isKeyLecture: boolean;

  createdAt: string;
  updatedAt: string;
  locale: string;
}

export interface ILectureSectionDto {
  data: ICommonStrapiDto<ILectureSectionAttributeDto>;
}

export interface ILectureSectionAttributeDto {
  order: number;
  title: string;
  isVisible: boolean;
  place?: string;
  sectionColor?: string;
  shortTitle: string;

  createdAt: string;
  updatedAt: string;
  locale: string;
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
