import styled from 'styled-components/macro';
import { Dialog } from '@mui/material';

export const DialogFullScreen = styled(Dialog)`
  backdrop-filter: blur(6px);

  & .MuiPaper-root {
    width: 935px;
    max-width: 935px;
    height: 600px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: unset;
    border-radius: ${(props) => props.theme.spacing(3)};
    position: relative;
    margin: 0;

    ${(props) => props.theme.breakpoints.down('xl')} {
      width: 80%;
      height: calc(80vw * 0.64);
    }

    ${(props) => props.theme.breakpoints.down('md')} {
      width: 90%;
      height: calc(90vw * 0.64);
    }
  }
`;

export const Gallery = styled.div`
  width: 100%;
  height: 100%;

  .slick-slider {
    margin: auto;
    width: 100%;
    height: 100%;
  }

  .slick-list {
    border-radius: 24px !important;
    height: 100%;

    .slick-track {
      height: 100%;
    }
  }
`;

export const GalleryPhoto = styled.div`
  border-radius: 24px !important;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  width: 935px;
  height: 600px;

  ${(props) => props.theme.breakpoints.down('xl')} {
    width: 80%;
    height: calc(80vw * 0.64);
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    width: 90%;
    height: calc(90vw * 0.64);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const IconWrapper = styled.div<{ isNext?: boolean }>`
  width: 24px;
  height: 24px;
  position: absolute;
  left: ${(props) => (props.isNext ? 'unset' : '-133px')};
  right: ${(props) => (props.isNext ? '-133px' : 'unset')};
  top: 47%;
  z-index: 1;

  ${(props) => props.theme.breakpoints.down('xl')} {
    left: ${(props) => (props.isNext ? 'unset' : '-56px')};
    right: ${(props) => (props.isNext ? '-56px' : 'unset')};
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    display: none;
  }

  svg {
    stroke: ${(props) => props.theme.palette.grey[500]};

    &:hover {
      stroke: ${(props) => props.theme.palette.primary.main};
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Dots = styled.div`
  bottom: -55px;
  color: ${(props) => props.theme.palette.grey[400]};

  li:hover {
    color: ${(props) => props.theme.palette.primary.main};
  }

  li.slick-active {
    color: ${(props) => props.theme.palette.primary.main};
  }
`;

export const DialogCloseIconWrapper = styled.div`
  width: 28px;
  height: 28px;
  position: absolute;
  content: '';
  top: 0;
  right: -48px;

  .MuiIconButton-root {
    padding: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
