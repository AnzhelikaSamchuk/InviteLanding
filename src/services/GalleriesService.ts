import { BASE_PATH } from 'shared/constants/common';
import { ICommonArrayDto, IGalleryAttributeDto } from 'shared/interfaces';
import HTTPService from './HttpService';

/* Сервис для получения данных секции Галереи - Фотографии*/
class GalleriesService extends HTTPService {
  constructor() {
    super(BASE_PATH.GALLERY);
  }

  public getAllGalleries(): Promise<ICommonArrayDto<IGalleryAttributeDto>> {
    return this.GET<ICommonArrayDto<IGalleryAttributeDto>>('?populate=*');
  }
}

export default new GalleriesService();
