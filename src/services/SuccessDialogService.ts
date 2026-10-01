import { BASE_PATH } from 'shared/constants/common';
import { ICommonArrayDto, ISuccessAttributeDto } from 'shared/interfaces';
import HTTPService from './HttpService';

/* Сервис для получения контента диалогов об успешности операций*/
class SuccessDialogService extends HTTPService {
  constructor() {
    super(BASE_PATH.SUCCESS_DIALOGS);
  }

  public getAllSuccess(): Promise<ICommonArrayDto<ISuccessAttributeDto>> {
    return this.GET<ICommonArrayDto<ISuccessAttributeDto>>('');
  }
}

export default new SuccessDialogService();
