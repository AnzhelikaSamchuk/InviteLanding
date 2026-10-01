import { BASE_PATH } from 'shared/constants/common';
import { ICommonArrayDto, ILectureAttributeDto } from 'shared/interfaces';
import HTTPService from './HttpService';

/* Сервис для получения данных Лекций*/
class LecturesService extends HTTPService {
  constructor() {
    super(BASE_PATH.LECTURES);
  }

  public getLecturesByConferenceId(conferenceId: number): Promise<ICommonArrayDto<ILectureAttributeDto>> {
    return this.GET<ICommonArrayDto<ILectureAttributeDto>>(
      `?populate[0]=Speakers.photo&populate[1]=LectureSection&filters[conferenceId][id][$eq]=${conferenceId}&filters[isVisible][$eq]=true&filters[LectureSection][isVisible][$eq]=true`
    );
  }
}

export default new LecturesService();
