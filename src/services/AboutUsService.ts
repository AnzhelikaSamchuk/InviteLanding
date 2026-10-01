import { BASE_PATH } from 'shared/constants/common';
import { IAboutUsAttributeDto, ICommonArrayDto } from 'shared/interfaces';
import HTTPService from './HttpService';

/* Сервис для получения данных О нас*/
class AboutUsService extends HTTPService {
  constructor() {
    super(BASE_PATH.ABOUTUS);
  }

  public getAllAboutUs(): Promise<ICommonArrayDto<IAboutUsAttributeDto>> {
    return this.GET<ICommonArrayDto<IAboutUsAttributeDto>>('');
  }
}

export default new AboutUsService();
