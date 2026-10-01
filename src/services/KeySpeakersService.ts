import { BASE_PATH } from 'shared/constants/common';
import { ICommonArrayDto } from 'shared/interfaces';
import { IKeySpeakersAttributeDto } from 'shared/interfaces/Dto/ISpeakerDto';
import HTTPService from './HttpService';

/* Сервис для получения данных ключевых спикеров*/
class KeySpeakersService extends HTTPService {
  constructor() {
    super(BASE_PATH.KEY_SPEAKERS);
  }

  public getKeySpeakersByConferenceId(conferenceId: number): Promise<ICommonArrayDto<IKeySpeakersAttributeDto>> {
    return this.GET<ICommonArrayDto<IKeySpeakersAttributeDto>>(
      `?populate[0]=conferenceId&populate[1]=speaker.photo&populate[2]=speaker.Lectures&filters[conferenceId][id][$eq]=${conferenceId}`
    );
  }
}

export default new KeySpeakersService();
