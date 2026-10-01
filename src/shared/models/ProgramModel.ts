import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import localeData from 'dayjs/plugin/localeData';
import { action, makeAutoObservable, makeObservable, observable } from 'mobx';
import { ICommonStrapiDto, ILectureAttributeDto, ISpeakersAttributeDto } from 'shared/interfaces';
dayjs.extend(localeData);
dayjs.locale('ru');

export class ProgramModel {
  public day = '';
  public lectureSections: SectionModel[] = [];

  constructor(date: string) {
    makeAutoObservable(this, undefined, { autoBind: true });
    if (!date) return;

    this.day = date;
  }
}

/*Секции*/
export class SectionModel {
  public id = 0;
  public order = 0;
  public title = '';
  public isVisible = false;
  public isCollapse = false;
  public place = '';
  public sectionColor: string | undefined = '';
  public shortTitle = '';
  public lectures: LectureModel[] = [];

  constructor(collapse: boolean, lecture?: ICommonStrapiDto<ILectureAttributeDto>) {
    makeObservable(
      this,
      {
        isCollapse: observable,
        toggleCollapse: action,
      },
      { autoBind: true }
    );
    if (!lecture) return;

    this.id = lecture.attributes.LectureSection.data.id;
    const attr = lecture.attributes.LectureSection.data.attributes;

    this.order = attr.order;
    this.title = attr.title;
    this.isVisible = attr.isVisible;
    this.isCollapse = collapse;
    this.place = !attr.place ? '—' : attr.place;
    this.sectionColor = attr.sectionColor;
    this.shortTitle = attr.shortTitle;
  }

  public toggleCollapse() {
    this.isCollapse ? (this.isCollapse = false) : (this.isCollapse = true);
  }
}

/*Лекции*/
export class LectureModel {
  public id = 0;
  public order = 0;
  public title = '';
  public subTitle = '';
  public description = '';
  public startTime = '';
  public endTime = '';
  public speakers: SpeakerProgramModel[] = [];

  constructor(lecture?: ICommonStrapiDto<ILectureAttributeDto>) {
    makeAutoObservable(this, undefined, { autoBind: true });
    if (!lecture) return;

    this.id = lecture.id;
    this.order = lecture.attributes.order;
    this.title = lecture.attributes.title ?? '';
    this.subTitle = lecture.attributes.subTitle ?? '';
    this.description = lecture.attributes.description ?? '';
    this.startTime = dayjs(lecture.attributes.startTime).format('HH:mm');
    this.endTime = dayjs(lecture.attributes.endTime).format('HH:mm');
  }
}

/** Спикеры */
export class SpeakerProgramModel {
  public photo = '';
  public fullName = '';
  public company = '';
  public position = '';
  public vkUrl = '';
  public facebookUrl = '';
  public instagramUrl = '';

  constructor(speaker?: ICommonStrapiDto<ISpeakersAttributeDto>) {
    makeAutoObservable(this, undefined, { autoBind: true });
    if (!speaker) return;

    this.photo = speaker.attributes.photo?.data.attributes.url ?? '';
    this.fullName = speaker.attributes.fullName;
    this.company = speaker.attributes.company ?? '';
    this.position = speaker.attributes.position ?? '';
    this.vkUrl = speaker.attributes.vkUrl;
    this.facebookUrl = speaker.attributes.facebookUrl;
    this.instagramUrl = speaker.attributes.instagramUrl;
  }
}
