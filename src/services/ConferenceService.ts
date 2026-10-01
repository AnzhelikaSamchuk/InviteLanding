import { BASE_PATH } from 'shared/constants/common';
import { IConferenceAttributeDto, ICommonArrayDto } from 'shared/interfaces';
import HTTPService from './HttpService';

/* Сервис для получения данных конференций*/
class ConferenceService extends HTTPService {
  constructor() {
    super(BASE_PATH.CURRENT_CONFERENCE);
  }

  public getConference(): Promise<ICommonArrayDto<IConferenceAttributeDto>> {
    return this.GET<ICommonArrayDto<IConferenceAttributeDto>>(
      '?populate[0]=conferenceId.imagePath&populate[1]=conferenceId.ConferenceTypes&populate[2]=conferenceId.about_conference'
    );
  }
}

export default new ConferenceService();
