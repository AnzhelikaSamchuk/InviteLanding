import { action, makeObservable, observable } from 'mobx';
import { PreSpeakerService } from 'services';
import { conferenceStore, toastStore } from 'stores';
import { PreSpeakerFormModes } from 'shared/enums';
import { PreSpeakerModel } from 'shared/models';

class PreSpeakerStore {
  public isWaiting = false;

  public preSpeaker: PreSpeakerModel = new PreSpeakerModel();
  public isDialogOpen = false;
  public dialogMode = PreSpeakerFormModes.Registration;

  constructor() {
    makeObservable(this, {
      isWaiting: observable,
      preSpeaker: observable,
      isDialogOpen: observable,
      dialogMode: observable,

      postPreSpeaker: action,
      setIsDialogOpen: action,
      setDialogMode: action,
    });
  }

  public setIsDialogOpen(value: boolean) {
    if (value) this.setDialogMode(PreSpeakerFormModes.Registration);
    this.isDialogOpen = value;
  }

  public setDialogMode(value: PreSpeakerFormModes) {
    this.dialogMode = value;
  }

  public async postPreSpeaker(): Promise<void> {
    this.isWaiting = true;
    try {
      const repeatedSpeakers = await PreSpeakerService.getRepeatEmailFromSpeaker(this.preSpeaker.email, conferenceStore.currentConferenceId);
      if (repeatedSpeakers.data.length !== 0) {
        toastStore.showError('Пользователь с данным email уже зарегистрирован');
        return;
      }
      await PreSpeakerService.addPreSpeaker(this.preSpeaker.getDto());
      this.setDialogMode(PreSpeakerFormModes.Success);
      this.preSpeaker.clearModel();
      return;
    } catch (e) {
      toastStore.showError('Произошла ошибка, попробуйте зарегистрироваться еще раз');
    } finally {
      this.isWaiting = false;
    }
  }
}

export default new PreSpeakerStore();
