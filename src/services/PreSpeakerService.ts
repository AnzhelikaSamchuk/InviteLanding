import { BASE_PATH } from 'shared/constants/common';
import { ICommonArrayDto, ICommonPostDto, IPreSpeakerAttributeDto } from 'shared/interfaces';
import HTTPService from './HttpService';

/* Сервис для получения данных для формы PreSpeaker*/
class PreSpeakerService extends HTTPService {
  constructor() {
    super(BASE_PATH.PRESPEAKERS);
  }

  public getRepeatEmailFromSpeaker(email: string, currentConference: number): Promise<ICommonArrayDto<IPreSpeakerAttributeDto>> {
    return this.GET<ICommonArrayDto<IPreSpeakerAttributeDto>>(
      `?populate=*&filters[email][$eq]=${email}&filters[conferenceId][id][$eq]=${currentConference}`
    );
  }

  public addPreSpeaker(body: ICommonPostDto<IPreSpeakerAttributeDto>): Promise<void> {
    return this.POST('', body);
  }
}

export default new PreSpeakerService();
