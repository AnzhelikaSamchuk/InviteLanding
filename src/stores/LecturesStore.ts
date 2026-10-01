import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { action, makeObservable, observable, runInAction } from 'mobx';
import { KeySpeakersService, LecturesService } from 'services';
import { conferenceStore } from 'stores';
import { ProgramModel, SectionModel, LectureModel, SpeakerProgramModel, KeySpeakerModel } from 'shared/models';
import { Utils } from 'shared/utils';

dayjs.locale('ru');

/* Стор место где организуется получнеие, хранение, обработка данных */
class LecturesStore {
  public waiting = false;

  public countAllSpeakers = 0;
  public keySpeakers: KeySpeakerModel[] = [];
  public program: ProgramModel[] = [];

  constructor() {
    makeObservable(this, {
      countAllSpeakers: observable,
      waiting: observable,
      keySpeakers: observable,
      program: observable,
      getAllKeySpeakers: action,
      getAllSpeakers: action,
    });
  }

  public async getAllKeySpeakers() {
    try {
      this.waiting = true;
      const keySpeakers: KeySpeakerModel[] = [];

      const dtos = await KeySpeakersService.getKeySpeakersByConferenceId(conferenceStore.currentConferenceId);
      if (!dtos) return;

      dtos.data
        .filter((ks) => ks.attributes?.speaker?.data?.attributes?.Lectures?.data?.length > 0)
        .forEach((keySpeaker) => keySpeakers.push(new KeySpeakerModel(keySpeaker)));

      runInAction(() => {
        this.keySpeakers = Utils.sortByField(keySpeakers, 'order');
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.waiting = false;
    }
  }

  public async getAllSpeakers() {
    try {
      this.waiting = true;
      const program: ProgramModel[] = [];
      let countAllSpeakers = 0;

      const dtos = await LecturesService.getLecturesByConferenceId(conferenceStore.currentConferenceId);
      if (!dtos) return;

      dtos.data.forEach((lecture) => {
        //программа
        const day = dayjs(lecture.attributes.startTime).format('YYYY-MM-DD');

        let programItem = program.find((p) => p.day === day);
        if (!programItem) {
          programItem = new ProgramModel(day);
          program.push(programItem);
        }

        let sectionItem = programItem?.lectureSections.find((s) => s.id === lecture.attributes.LectureSection.data.id);
        if (!sectionItem) {
          sectionItem = new SectionModel(false, lecture);
          programItem?.lectureSections.push(sectionItem);
        }

        let lectureItem = sectionItem?.lectures.find((l) => l.id === lecture.id);
        if (!lectureItem) {
          lectureItem = new LectureModel(lecture);
          sectionItem?.lectures.push(lectureItem);
        }

        lecture.attributes.Speakers.data.forEach((speaker) => {
          let speakerItem = lectureItem?.speakers.find((l) => l.fullName === speaker.attributes.fullName);
          if (!speakerItem) {
            speakerItem = new SpeakerProgramModel(speaker);
            lectureItem?.speakers.push(speakerItem);
          }
        });

        countAllSpeakers += lectureItem.speakers.length;
      });

      Utils.sortByDate(program, 'day');

      program.forEach((pr, index) => {
        const day = dayjs(pr.day).format('D MMMM');
        pr.day = day;

        Utils.sortByField(pr.lectureSections, 'order');
        if (index === 0) pr.lectureSections[0].isCollapse = true;

        pr.lectureSections.forEach((lectureSection) => {
          Utils.sortByField(lectureSection.lectures, 'order');
        });
      });

      runInAction(() => {
        this.countAllSpeakers = countAllSpeakers;
        this.program = program;
      });
    } catch (e) {
    } finally {
      this.waiting = false;
    }
  }
}

export default new LecturesStore();
