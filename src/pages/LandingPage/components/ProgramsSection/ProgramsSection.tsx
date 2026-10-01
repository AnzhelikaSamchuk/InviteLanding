import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { observer } from 'mobx-react';
import { lecturesStore } from 'stores';
import { DataProgram, H2, ProgramConference } from 'components';
import { Collapse, Divider, List, ListItemButton, ListItemText } from '@mui/material';
import { ProgramModel } from 'shared/models';
import * as S from './ProgramsSection.styles';
import { useTheme } from '@mui/material/styles';

export interface IProps {
  title: string;
}

const ProgramsSection = React.forwardRef<HTMLDivElement, IProps>((props, ref) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('lg'));

  const itemInformation = (section: string, sectionTitle: string) => (
    <S.SectionText>
      {section}
      <S.SectionItemText variant="h3">
        <ListItemText primary={sectionTitle} />
      </S.SectionItemText>
    </S.SectionText>
  );

  const programSection = (program: ProgramModel, dayIndex: number) =>
    program.lectureSections.map((section, sectionIndex) => (
      <div key={section.id}>
        <S.SectionWrapper openSection={section.isCollapse} borderColor={section.sectionColor}>
          <S.ShortTitleWrapper bgColor={section.sectionColor}>{section.shortTitle.toUpperCase()}</S.ShortTitleWrapper>

          <ListItemButton
            disableRipple
            sx={{ padding: '0 0', marginBottom: '40px' }}
            onClick={() => lecturesStore.program.at(dayIndex)?.lectureSections.at(sectionIndex)?.toggleCollapse()}>
            <S.GeneralInformation>
              {itemInformation('Секция', section.title)}

              <Divider
                sx={{ width: matches ? '50px' : 'auto', bgcolor: (theme) => theme.palette.grey[700] }}
                style={{
                  margin: matches ? '20px 0 20px' : '7px 40px',
                }}
                orientation={matches ? 'horizontal' : 'vertical'}
                flexItem
                variant="middle"
              />

              {itemInformation('Место', section.place)}
            </S.GeneralInformation>

            <img src={section.isCollapse ? 'img/ExpandLess.svg' : 'img/ExpandMore.svg'} alt="" />
          </ListItemButton>

          <Collapse in={section.isCollapse} timeout="auto" unmountOnExit>
            {section.lectures.map((item, index) => (
              <S.ElementsWrapper key={item.id}>
                <DataProgram item={item} sectionColor={section.sectionColor} />
                {index !== section.lectures.length - 1 && <S.Divider />}
              </S.ElementsWrapper>
            ))}
          </Collapse>
        </S.SectionWrapper>
      </div>
    ));

  /*если один день, одна секция, одна лекция и один или два спикера, то короткая программа */
  const oneDaySectionLectureOneorTwoSpeaker = (): boolean =>
    lecturesStore.program[0].lectureSections.length === 1 &&
    lecturesStore.program[0].lectureSections[0].lectures.length === 1 &&
    (lecturesStore.program[0].lectureSections[0].lectures[0].speakers.length === 1 ||
      lecturesStore.program[0].lectureSections[0].lectures[0].speakers.length === 2);

  const oneDayProgram = () => (
    <>
      {lecturesStore.countAllSpeakers > 1 && <H2 text={props.title} />}

      {oneDaySectionLectureOneorTwoSpeaker() ? (
        <S.Container>
          <ProgramConference
            title={props.title}
            subtitle={lecturesStore.program[0].lectureSections[0].lectures[0].subTitle}
            description={lecturesStore.program[0].lectureSections[0].lectures[0].description}
          />
        </S.Container>
      ) : (
        <S.Container>
          {lecturesStore.program[0].lectureSections.length === 1
            ? lecturesStore.program[0].lectureSections[0].lectures.map((item, index) => (
                <S.ElementsWrapper key={item.id}>
                  <DataProgram item={item} />
                  {index !== lecturesStore.program[0].lectureSections[0].lectures.length - 1 && <S.Divider />}
                </S.ElementsWrapper>
              ))
            : programSection(lecturesStore.program[0], 0)}
        </S.Container>
      )}
    </>
  );

  const manyDayProgram = () => (
    <S.ProgramWrapper>
      <H2 text={props.title} />

      <List sx={{ width: '100%', margin: 'auto', padding: 0 }}>
        {lecturesStore.program.map((program, dayIndex) => (
          <S.Wrapper key={dayIndex}>
            <S.DaySection>
              <S.Day>{`${dayIndex + 1} День`}</S.Day>
              <S.Date>{program.day}</S.Date>
            </S.DaySection>

            {programSection(program, dayIndex)}
          </S.Wrapper>
        ))}
      </List>
    </S.ProgramWrapper>
  );

  return (
    <S.SectionProgram ref={ref}>
      <>{lecturesStore.program.length === 1 ? oneDayProgram() : manyDayProgram()}</>
    </S.SectionProgram>
  );
});
ProgramsSection.displayName = 'ProgramsSection';

export default observer(ProgramsSection);
