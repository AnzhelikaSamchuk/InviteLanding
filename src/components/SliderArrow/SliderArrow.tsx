import * as S from './SliderArrow.styles';

const SliderArrow = (props: { onClick: () => void; children: JSX.Element; isNext: boolean; top?: string }) => (
  <S.IconWrapper onClick={props.onClick} isNext={props.isNext} top={props.top}>
    {props.children}
  </S.IconWrapper>
);

export default SliderArrow;
