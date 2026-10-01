import { action, makeObservable, observable } from 'mobx';

class ImageSliderStore {
  public selectedImageIndex = 0;
  public isDialogFullScreenOpen = false;

  constructor() {
    makeObservable(this, {
      selectedImageIndex: observable,
      isDialogFullScreenOpen: observable,
      setSelectedImage: action,
    });
  }

  public setIsDialogFullScreenOpen(value: boolean) {
    this.isDialogFullScreenOpen = value;
  }

  public async setSelectedImage(currentIndex: number) {
    this.selectedImageIndex = currentIndex - 1;
  }
}

export default new ImageSliderStore();
