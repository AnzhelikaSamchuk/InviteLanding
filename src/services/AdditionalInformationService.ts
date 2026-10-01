import { BASE_PATH } from 'shared/constants/common';
import { IAdditionalInformationAttributeDto, ICommonArrayDto } from 'shared/interfaces';
import HTTPService from './HttpService';

/* Сервис для получения данных дополнительной информации для секций О нас и Галереи*/
class AdditionalInformationService extends HTTPService {
  constructor() {
    super(BASE_PATH.ADDITIONAL_INFORMATION);
  }

  public getAllAdditionalInformations(): Promise<ICommonArrayDto<IAdditionalInformationAttributeDto>> {
    return this.GET<ICommonArrayDto<IAdditionalInformationAttributeDto>>('');
  }
}

export default new AdditionalInformationService();
