import React from 'react';

import * as S from './Text.styles';

interface ITextProps {
  text: string;
}
const Text: React.FC<ITextProps> = (props) => {
  const { text } = props;

  return (
    <S.CustomTypography>
      <a href="/">{text}</a>
    </S.CustomTypography>
  );
};

export default Text;
