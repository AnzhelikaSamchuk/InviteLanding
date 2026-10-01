import { BASE_PATH } from 'shared/constants/common';
import { IParticipantDto, ICommonPostDto, ICommonArrayDto, ICommonObjectDto, IPostParticipant } from 'shared/interfaces';
import HTTPService from './HttpService';

/* Сервис для получения данных для формы Participant*/
class ParticipantFormService extends HTTPService {
  constructor() {
    super(BASE_PATH.PARTICIPANTS);
  }

  public getParticipantsByEmail(email: string, conferenceId: number): Promise<ICommonArrayDto<IParticipantDto>> {
    return this.GET<ICommonArrayDto<IParticipantDto>>(`?populate=*&filters[email][$eq]=${email}&filters[conferenceId][id][$eq]=${conferenceId}`);
  }

  public addParticipant(body: ICommonPostDto<IPostParticipant>): Promise<ICommonObjectDto<IParticipantDto>> {
    return this.POST<ICommonObjectDto<IParticipantDto>>('', body);
  }

  public updateParticipantPayment(id: number, body: ICommonPostDto<IParticipantDto>): Promise<void> {
    return this.PUT(id.toString(), body);
  }
}

export default new ParticipantFormService();
