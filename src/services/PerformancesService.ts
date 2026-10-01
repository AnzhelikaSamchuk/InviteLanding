import { BASE_PATH } from 'shared/constants/common';
import { IPerformanceAttributeDto, ICommonArrayDto } from 'shared/interfaces';
import HTTPService from './HttpService';

/* Сервис для получения данных секции Прошедшие мероприятия*/
class PerformancesService extends HTTPService {
  constructor() {
    super(BASE_PATH.PERFORMANCE);
  }

  public getAllPerformances(): Promise<ICommonArrayDto<IPerformanceAttributeDto>> {
    return this.GET<ICommonArrayDto<IPerformanceAttributeDto>>('?populate=*');
  }
}

export default new PerformancesService();
