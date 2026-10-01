import { action, makeObservable, observable, runInAction } from 'mobx';
import { AboutUsService, GalleriesService } from 'services';
import { IAboutUsDto } from 'shared/interfaces';
import { GalleryModel } from 'shared/models';
import { Utils } from 'shared/utils';

class GalleriesStore {
  public waiting = false;

  public aboutUs: IAboutUsDto | null = null;
  public galleries: GalleryModel[] = [];

  constructor() {
    makeObservable(this, {
      galleries: observable,
      aboutUs: observable,
      getGalleries: action,
    });
  }

  public async getGalleries() {
    try {
      this.waiting = true;

      const aboutUs = await AboutUsService.getAllAboutUs();
      if (!aboutUs) return;

      const galleries = await GalleriesService.getAllGalleries();
      if (!galleries) return;

      const about = aboutUs.data[0].attributes;

      runInAction(() => {
        this.aboutUs = {
          description: about.description,
          forSpeakersTitle: about.forSpeakersTitle,
          forSpeakersLink: about.forSpeakersLink,
        };

        const attr = galleries.data.map((gallery) => new GalleryModel(gallery));

        this.galleries = Utils.sortByField(attr, 'order');
      });
    } catch (e) {
    } finally {
      this.waiting = false;
    }
  }
}

export default new GalleriesStore();
