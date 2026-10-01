import { makeAutoObservable } from 'mobx';
import { ICommonStrapiDto } from 'shared/interfaces';
import { IKeySpeakersAttributeDto } from 'shared/interfaces/Dto/ISpeakerDto';

/** Ключевые спикеры */
export class KeySpeakerModel {
  public id = 0;
  public order = 0;
  public photo = '';

  public fullName = '';
  public company = '';
  public position = '';
  public vkUrl = '';
  public facebookUrl = '';
  public instagramUrl = '';

  constructor(speaker?: ICommonStrapiDto<IKeySpeakersAttributeDto>) {
    makeAutoObservable(this, undefined, { autoBind: true });
    if (!speaker) return;

    this.id = speaker.id;
    this.order = speaker.attributes.order;
    this.photo = speaker.attributes.speaker.data.attributes.photo?.data.attributes.url ?? '';
    this.fullName = speaker.attributes.speaker.data.attributes.fullName;
    this.company = speaker.attributes.speaker.data.attributes.company ?? '';
    this.position = speaker.attributes.speaker.data.attributes.position ?? '';
    this.vkUrl = speaker.attributes.speaker.data.attributes.vkUrl;
    this.facebookUrl = speaker.attributes.speaker.data.attributes.facebookUrl;
    this.instagramUrl = speaker.attributes.speaker.data.attributes.instagramUrl;

    /*По умолчанию, если лекция одна - берём её, если лекций несколько берём ту, 
    у которой true, если у ключ спикера ни одна из его нескольких лекций не помечена ключевой - берём первую
    Если все лекции ключ спикера помечены ключевыми - берём первую*/

    // const speakerLectures = speaker.attributes.speaker.data.attributes.Lectures.data;
  }
}
