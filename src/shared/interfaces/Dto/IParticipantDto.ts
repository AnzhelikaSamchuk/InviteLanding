import { PaymentStatuses } from 'shared/enums';

export interface IParticipantDto {
  name: string;
  surname: string;
  company: string;
  position: string;
  email: string;
  phone: string;
  formParticipation: string;
  help: boolean;
}

export interface IPostParticipant extends IParticipantDto {
  conferenceId: number;
  tariffTypeId: number;
  paymentStatus?: PaymentStatuses;
}
