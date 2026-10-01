import MarkdownPreview from '@uiw/react-markdown-preview';

import * as S from './ProgramConference.styles';

const ProgramConference = (props: { title: string; subtitle?: string; description?: string }) => (
  <S.Programs>
    <S.InformationTitle>
      <S.Title variant="h2">{props.title}</S.Title>
      {props.subtitle && <S.SubTitle variant="body1">{props.subtitle}</S.SubTitle>}
    </S.InformationTitle>

    {props.description && <MarkdownPreview source={props.description} />}
  </S.Programs>
);

export default ProgramConference;
