import { BASE_PATH } from 'shared/constants/common';
import { ICommonArrayDto, IPartnerAttributeDto } from 'shared/interfaces';
import HTTPService from './HttpService';

/* Сервис для получения данных секции Партнёры*/
class PartnersService extends HTTPService {
  constructor() {
    super(BASE_PATH.PARTNER);
  }

  public getAllPartners(): Promise<ICommonArrayDto<IPartnerAttributeDto>> {
    return this.GET<ICommonArrayDto<IPartnerAttributeDto>>('?populate=*');
  }
}

export default new PartnersService();
