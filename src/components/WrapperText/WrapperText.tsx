import React from 'react';
import * as S from './WrapperText.styles';

interface ITextProps {
  text: string;
}

const WrapperText = (props: ITextProps) => {
  const { text } = props;

  return <S.Wrapper>{text}</S.Wrapper>;
};

export default WrapperText;
