export interface IParticipantTypeDto {
  name: string;
  date: string;
  location: string;
  price: string;
}

export interface IConferenceTypeDto extends IParticipantTypeDto {
  id: number;
}
