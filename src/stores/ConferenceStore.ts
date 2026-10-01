import { action, computed, makeAutoObservable, observable, runInAction } from 'mobx';
import { ConferenceService } from 'services';
import { IAboutConferenceDto, IParticipantTypeDto } from 'shared/interfaces';
import { ConferenceModel } from 'shared/models';

class CurrentConferenceStore {
  public waiting = false;

  public currentConferenceId = 0;
  public conference: ConferenceModel = new ConferenceModel();
  public aboutConference: IAboutConferenceDto | null = null;
  public selectedTypeIndex = 0;

  constructor() {
    makeAutoObservable(this, {
      waiting: observable,
      currentConferenceId: observable,
      conference: observable,
      selectedTypeIndex: observable,
      selectedType: computed,
      setSelectedType: action,
      getConference: action,
    });
  }

  public setSelectedType(value: number) {
    this.selectedTypeIndex = value;
  }

  public get selectedType(): IParticipantTypeDto {
    return this.conference.types[this.selectedTypeIndex];
  }

  public async getConference() {
    try {
      this.waiting = true;

      const dtos = await ConferenceService.getConference();
      if (!dtos) return;

      this.currentConferenceId = dtos.data[0].attributes.conferenceId.data.id;
      const aboutConference = dtos.data[0].attributes.conferenceId.data.attributes.about_conference.data.attributes;

      runInAction(() => {
        this.conference = new ConferenceModel(dtos.data[0]);
        this.aboutConference = {
          subTitle: aboutConference.subTitle,
          description: aboutConference.description,
        };
      });
    } catch (e) {
    } finally {
      this.waiting = false;
    }
  }
}

export default new CurrentConferenceStore();
