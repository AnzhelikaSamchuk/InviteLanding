import styled from 'styled-components/macro';
import { Typography } from '@mui/material';

export const Performances = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;

  a {
    margin: ${(props) => props.theme.spacing(10)} 0 0 0;
  }

  .slick-slider {
    width: 1238px;
    margin: auto;

    ${(props) => props.theme.breakpoints.down('xl')} {
      width: 700px !important;
      margin: auto;
    }

    ${(props) => props.theme.breakpoints.down('md')} {
      width: 430px !important;
    }

    ${(props) => props.theme.breakpoints.down('sm')} {
      width: 304px !important;
    }
  }

  .slick-list {
    border-radius: 24px !important;
  }

  .slick-slide {
    width: 373px !important;
    margin-right: 40px;

    ${(props) => props.theme.breakpoints.down('xl')} {
      width: 620px !important;
      margin-right: 40px;
      margin-left: 40px;
    }

    ${(props) => props.theme.breakpoints.down('md')} {
      width: 350px !important;
    }

    ${(props) => props.theme.breakpoints.down('sm')} {
      width: 264px !important;
      margin-right: 20px;
      margin-left: 20px;
    }
  }

  .MuiButton-textPrimary {
    ${(props) => props.theme.breakpoints.down('sm')} {
      font-size: 1rem;
      line-height: 24px;
    }
  }
`;

export const PerformanceElement = styled.div`
  display: block !important;
`;

export const ImgWrapper = styled.div`
  border-radius: 24px;
  max-height: 200px;
  max-width: 373px;

  ${(props) => props.theme.breakpoints.down('xl')} {
    max-width: 620px;
    max-height: 333px;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    max-width: 350px;
    max-height: 188px;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    max-width: 264px;
    max-height: 147px;
  }
`;

export const PerformanceImg = styled.div`
  height: 200px;
  border-radius: 24px !important;
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 24px;
  }

  a {
    margin: 0;
  }

  ${(props) => props.theme.breakpoints.down('xl')} {
    width: 620px !important;
    height: 333px;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    width: 350px !important;
    height: 188px;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 264px !important;
    height: 147px;
  }
`;

export const IconWrapper = styled.div<{ isNext?: boolean }>`
  width: 24px;
  height: 24px;
  position: absolute;
  left: ${(props) => (props.isNext ? 'unset' : '-45px')};
  right: ${(props) => (props.isNext ? '-5px' : 'unset')};
  top: 88px;
  cursor: pointer;
  color: ${(props) => props.theme.palette.grey[300]};
  z-index: 1;

  svg {
    width: 100%;
    height: 100%;
  }

  ${(props) => props.theme.breakpoints.down('xl')} {
    top: 154px;
    left: ${(props) => (props.isNext ? 'unset' : '-5px')};
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    top: 82px;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    top: 60px;
  }
`;

export const PerformanceIcon = styled.div`
  width: 48px;
  height: 48px;
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: 0.3s transform;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 40px;
    height: 40px;

    svg {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const PerformanceTime = styled.div`
  font-size: 0.8rem;
  line-height: 15.23px;
  height: 17px;
  color: ${(props) => props.theme.palette.common.white};
  background-color: ${(props) => props.theme.palette.grey[600]};
  position: absolute;
  content: '';
  bottom: 13px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => props.theme.breakpoints.down('xl')} {
    bottom: 22px;
    right: 35px;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    bottom: 10px;
    right: 20px;
    font-size: 0.7rem;
    line-height: 13px;
    height: 12px;
  }
`;

export const PerformanceTitle = styled(Typography)`
  max-width: 325px;
  margin: ${(props) => props.theme.spacing(3)} auto 0;

  ${(props) => props.theme.breakpoints.down('xl')} {
    max-width: 572px;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    max-width: 310px;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    font-size: 0.875rem;
    margin: ${(props) => props.theme.spacing(3)} 0 0 0;
    line-height: 22px;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.palette.grey[100]};
    margin: 0;
  }
`;

export const PerformanceMonth = styled.p`
  display: none;
  margin-top: ${(props) => props.theme.spacing(2)};
  color: ${(props) => props.theme.palette.grey[200]};

  ${(props) => props.theme.breakpoints.down('sm')} {
    font-size: 0.8125rem;
    line-height: 20px;
  }
`;

export const Dots = styled.div`
  bottom: -60px;
  color: ${(props) => props.theme.palette.grey[400]};

  li:hover {
    color: ${(props) => props.theme.palette.primary.main};
  }

  li.slick-active {
    color: ${(props) => props.theme.palette.primary.main};
  }
`;
