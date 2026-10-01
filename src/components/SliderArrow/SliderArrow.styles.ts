import styled from 'styled-components/macro';

export const IconWrapper = styled.div<{ isNext?: boolean; top?: string }>`
  width: 24px;
  height: 24px;
  position: absolute;
  left: ${(props) => (props.isNext ? 'unset' : '-45px')};
  right: ${(props) => (props.isNext ? '-5px' : 'unset')};
  top: 80px;
  cursor: pointer;
  color: ${(props) => props.theme.palette.grey[300]};
  z-index: 1;

  svg {
    width: 100%;
    height: 100%;
  }

  ${(props) => props.theme.breakpoints.down('xl')} {
    top: ${(props) => (props.top ? props.top : '160px')};
    left: ${(props) => (props.isNext ? 'unset' : '-5px')};
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    top: 100px;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    top: 60px;
  }
`;
