import styled from 'styled-components/macro';
import { Dialog } from '@mui/material';

export const CustomDialog = styled(Dialog)`
  backdrop-filter: blur(6px);

  & .MuiPaper-root {
    max-width: 584px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: unset;
    border-radius: ${(props) => props.theme.spacing(6)};
    padding: ${(props) => props.theme.spacing(9)};
    position: relative;

    ${(props) => props.theme.breakpoints.down('md')} {
      padding: ${(props) => props.theme.spacing(5)};
    }

    ${(props) => props.theme.breakpoints.down('sm')} {
      width: 100%;
      margin: ${(props) => props.theme.spacing(6)} auto 0 auto;
      padding: ${(props) => props.theme.spacing(4)} ${(props) => props.theme.spacing(3)};
      border-radius: 0;
    }
  }
`;

export const DialogCloseIconWrapper = styled.div`
  width: 28px;
  height: 28px;
  position: absolute;
  content: '';
  top: 0;
  right: -48px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    top: 0;
    right: -26px;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    top: -36px;
    right: 31px;
  }

  .MuiIconButton-root {
    padding: 0;
  }
`;

export const Close = styled.div`
  ${(props) => props.theme.breakpoints.down('md')} {
    display: none;
  }
`;

export const CloseMobile = styled.div`
  ${(props) => props.theme.breakpoints.up('md')} {
    display: none;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    display: block;
  }
`;
