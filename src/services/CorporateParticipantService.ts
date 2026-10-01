import { BASE_PATH } from 'shared/constants/common';
import { ICommonArrayDto, ICommonPostDto, ICorporateRegistrationAttributeDto, IPostCorporateRegistration } from 'shared/interfaces';
import HTTPService from './HttpService';

/* Сервис для получения данных для формы PreSpeaker*/
class CorporateParticipantService extends HTTPService {
  constructor() {
    super(BASE_PATH.CORPORATE_PARTICIPANTS);
  }

  public getByEmailAndConference(email: string, currentConference: number): Promise<ICommonArrayDto<ICorporateRegistrationAttributeDto>> {
    return this.GET<ICommonArrayDto<ICorporateRegistrationAttributeDto>>(
      `?populate=*&filters[email][$eq]=${email}&filters[conferenceId][id][$eq]=${currentConference}`
    );
  }

  public addParticipant(body: ICommonPostDto<IPostCorporateRegistration>): Promise<void> {
    return this.POST('/addWithTariff', body);
  }
}

export default new CorporateParticipantService();
