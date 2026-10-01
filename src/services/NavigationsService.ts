import { BASE_PATH } from 'shared/constants/common';
import { ICommonArrayDto, INavigationAttributeDto } from 'shared/interfaces';
import HTTPService from './HttpService';

/* Сервис для получения данных PageContent для LandingPage*/
class NavigationsService extends HTTPService {
  constructor() {
    super(BASE_PATH.NAVIGATION);
  }

  public getAllNavigations(): Promise<ICommonArrayDto<INavigationAttributeDto>> {
    return this.GET<ICommonArrayDto<INavigationAttributeDto>>('');
  }
}

export default new NavigationsService();
