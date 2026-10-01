import React from 'react';

import * as S from './Section.styles';

interface ILayoutProps {
  children: JSX.Element;
}

const Section = React.forwardRef<HTMLDivElement, ILayoutProps>((props, ref) => {
  return (
    <S.SectionWrapper ref={ref}>
      <S.Section>{props.children}</S.Section>
    </S.SectionWrapper>
  );
});
Section.displayName = 'Section';

export default Section;
