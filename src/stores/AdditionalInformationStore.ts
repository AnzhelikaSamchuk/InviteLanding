import { action, makeObservable, observable, runInAction } from 'mobx';
import { AdditionalInformationService } from 'services';
import { IPhotoInformationDto, IVideoInformationDto } from 'shared/interfaces';

class AdditionalInformationStore {
  public waiting = false;

  public photoInformation: IPhotoInformationDto | null = null;
  public videoInformation: IVideoInformationDto | null = null;

  constructor() {
    makeObservable(this, {
      waiting: observable,
      photoInformation: observable,
      videoInformation: observable,
      getAdditionalInformation: action,
    });
  }

  public async getAdditionalInformation() {
    try {
      this.waiting = true;

      const dtos = await AdditionalInformationService.getAllAdditionalInformations();
      if (!dtos) return;

      const additionalInformation = dtos.data[0].attributes;

      runInAction(() => {
        this.photoInformation = {
          photoTitle: additionalInformation.photoTitle,
          photoLink: additionalInformation.photoLink,
        };

        this.videoInformation = {
          videoTitle: additionalInformation.videoTitle,
          videoLink: additionalInformation.videoLink,
        };
      });
    } catch (e) {
    } finally {
      this.waiting = false;
    }
  }
}

export default new AdditionalInformationStore();
