export interface IPreSpeakerAttributeDto {
  name: string;
  surname: string;
  company: string;
  position: string;
  topic: string;
  shortDesc: string;
  phone: string;
  email: string;
}

export interface IPostPreSpeaker extends IPreSpeakerAttributeDto {
  conferenceId: number;
}
