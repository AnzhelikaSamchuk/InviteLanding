import { BASE_PATH } from 'shared/constants/common';
import { ICommonArrayDto, ITariffAttributeDto } from 'shared/interfaces';
import HTTPService from './HttpService';

/* Сервис для получения данных секции Стоимости*/
class TariffService extends HTTPService {
  constructor() {
    super(BASE_PATH.TARIFF);
  }

  public get(): Promise<ICommonArrayDto<ITariffAttributeDto>> {
    return this.GET<ICommonArrayDto<ITariffAttributeDto>>('?populate=*');
  }
}

export default new TariffService();
