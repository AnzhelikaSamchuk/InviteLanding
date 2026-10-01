import { BASE_PATH } from 'shared/constants/common';
import { IFooterAttributeDto, ICommonArrayDto } from 'shared/interfaces';
import HTTPService from './HttpService';

/* Сервис для получения данных секции Футера*/
class FootersService extends HTTPService {
  constructor() {
    super(BASE_PATH.FOOTER);
  }

  public getAllFooters(): Promise<ICommonArrayDto<IFooterAttributeDto>> {
    return this.GET<ICommonArrayDto<IFooterAttributeDto>>('?populate=*');
  }
}

export default new FootersService();
