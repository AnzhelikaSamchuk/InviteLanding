import React from 'react';

import * as S from './SectionForSlider.styles';

interface ILayoutProps {
  children: JSX.Element;
}

const SectionForSlider = React.forwardRef<HTMLDivElement, ILayoutProps>((props, ref) => {
  return (
    <S.SectionWrapper ref={ref}>
      <S.Section>{props.children}</S.Section>
    </S.SectionWrapper>
  );
});
SectionForSlider.displayName = 'Section';

export default SectionForSlider;
