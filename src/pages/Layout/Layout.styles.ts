import styled from 'styled-components/macro';

export const LayoutWrapper = styled.div`
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.palette.common.black};
  background-color: ${(props) => props.theme.palette.common.white};
  letter-spacing: ${(props) => props.theme.letterSpacing.letterSpacingGeneral};
`;

export const LayoutContent = styled.div`
  width: 100%;
  padding-top: 80px;
  display: block;
  flex: 1;
`;
