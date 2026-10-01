import React from 'react';

import * as S from './Headings.styles';

interface ILayoutProps {
  text: string;
}

const H2 = (props: ILayoutProps) => {
  const { text } = props;

  return <S.H2 variant="h2">{text}</S.H2>;
};

export default H2;
