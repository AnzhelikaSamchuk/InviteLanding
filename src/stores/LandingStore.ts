import { action, makeObservable, observable } from 'mobx';
import { LandingService } from 'services';
import { IPerkDto, IRewiewDto, IOrganizerDto } from 'shared/interfaces';
import { Utils } from 'shared/utils';

class LandingStore {
  public waiting = false;

  public perks: IPerkDto[] = [];
  public rewiews: IRewiewDto[] = [];
  public organizers: IOrganizerDto[] = [];
  public selectedSection: string | null = null;

  constructor() {
    makeObservable(this, {
      waiting: observable,
      perks: observable,
      rewiews: observable,
      organizers: observable,
      selectedSection: observable,
      getPerks: action,
      getRewiews: action,
      getOrganizers: action,
      setSelectedSection: action,
    });
  }

  public setSelectedSection(key: string | null) {
    this.selectedSection = key;
  }

  public getCurrentSection() {
    return this.selectedSection;
  }

  public async getPerks() {
    try {
      this.waiting = true;

      const dtos = await LandingService.getPerks();
      if (!dtos) return;

      this.perks = dtos;
    } catch (e) {
    } finally {
      this.waiting = false;
    }
  }

  public async getRewiews() {
    try {
      this.waiting = true;

      const dtos = await LandingService.getRewiews();
      if (!dtos) return;

      this.rewiews = dtos;
    } catch (e) {
    } finally {
      this.waiting = false;
    }
  }

  public async getOrganizers() {
    try {
      this.waiting = true;

      const dtos = await LandingService.getOrganizers();
      if (!dtos) return;

      this.organizers = Utils.sortByField(dtos, 'order');
    } catch (e) {
    } finally {
      this.waiting = false;
    }
  }
}

export default new LandingStore();
