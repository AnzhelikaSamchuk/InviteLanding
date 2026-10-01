import { lecturesStore } from 'stores';
import { LectureModel } from 'shared/models';
import * as S from './DataProgram.styles';

const DataProgram = (props: { item: LectureModel; sectionColor?: string | undefined }) => (
  <S.ProgramsListWrapper>
    <S.ProgramsList>
      <S.ProgramTime variant="body1">
        {props.item.startTime}—{props.item.endTime}
      </S.ProgramTime>

      <S.WrapperTheme>
        <S.ProgramTheme variant={lecturesStore.program.length === 1 ? 'h4' : 'body1'}>{props.item.title}</S.ProgramTheme>

        <S.WrapperSpeakers>
          {props.item.speakers.map((speaker, index) => (
            <S.ProgramSpeaker key={index} dayCount={lecturesStore.program.length}>
              <S.SpeakerPhoto>
                <img src={speaker.photo} alt="" />
              </S.SpeakerPhoto>

              <S.SpeakerInformation>
                <S.SpeakerName variant="body1" bgcolor={props.sectionColor}>
                  {speaker.fullName}
                </S.SpeakerName>
                <S.SpeakerPosition variant="subtitle1">{speaker.position}</S.SpeakerPosition>
              </S.SpeakerInformation>
            </S.ProgramSpeaker>
          ))}
        </S.WrapperSpeakers>
      </S.WrapperTheme>
    </S.ProgramsList>
  </S.ProgramsListWrapper>
);

export default DataProgram;
