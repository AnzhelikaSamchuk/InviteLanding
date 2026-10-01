import { action, makeObservable, observable } from 'mobx';
import { ToastMessageTypes } from 'shared/enums/commonEnums';

const DURATION = 4000;
const SUCCESS_MESSAGE = 'The operation completed successfully';
const ERROR_MESSAGE = 'An error occurred during execution';

class ToastStore {
  public duration = DURATION;

  public isOpen = false;
  public message = '';
  public messageType: ToastMessageTypes = ToastMessageTypes.Success;

  constructor() {
    makeObservable(this, {
      isOpen: observable,
      message: observable,
      messageType: observable,
      showSuccess: action.bound,
      showError: action.bound,
      showWarning: action.bound,
      onClose: action.bound,
    });
  }

  public showSuccess(message?: string) {
    this.isOpen = true;
    this.message = message || SUCCESS_MESSAGE;
    this.messageType = ToastMessageTypes.Success;
  }

  public showError(message?: string) {
    this.isOpen = true;
    this.message = message || ERROR_MESSAGE;
    this.messageType = ToastMessageTypes.Error;
  }

  public showWarning(message?: string) {
    this.isOpen = true;
    this.message = message || ERROR_MESSAGE;
    this.messageType = ToastMessageTypes.Warning;
  }

  public onClose() {
    this.isOpen = false;
    this.message = '';
  }
}

export default new ToastStore();
