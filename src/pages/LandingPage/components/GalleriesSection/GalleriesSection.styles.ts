import styled from 'styled-components/macro';

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;

  ${(props) => props.theme.breakpoints.down('lg')} {
    flex-direction: column;
  }
`;

export const Gallery = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

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
`;

export const GalleryElement = styled.div`
  display: block !important;

  :hover {
    cursor: pointer;
  }
`;

export const NavigationAdaptiveText = styled.div`
  display: flex;
  justify-content: center;
  padding: ${(props) => props.theme.spacing(0.5)} 0;
  font-size: 1.5rem;
  margin-bottom: ${(props) => props.theme.spacing(5)};

  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.palette.primary.main};
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const GalleryPhoto = styled.div`
  display: block !important;
  margin: auto;
  height: 240px;
  border-radius: 24px !important;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${(props) => props.theme.breakpoints.down('xl')} {
    width: 620px !important;
    height: 398px;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    width: 350px !important;
    height: 225px;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 264px !important;
    height: 170px;
  }
`;

export const IconWrapper = styled.div<{ isNext?: boolean }>`
  width: 24px;
  height: 24px;
  position: absolute;
  left: ${(props) => (props.isNext ? 'unset' : '-45px')};
  right: ${(props) => (props.isNext ? '-5px' : 'unset')};
  top: 108px;
  cursor: pointer;
  color: ${(props) => props.theme.palette.grey[300]};
  z-index: 1;

  svg {
    width: 100%;
    height: 100%;
  }

  ${(props) => props.theme.breakpoints.down('xl')} {
    top: 187px;
    left: ${(props) => (props.isNext ? 'unset' : '-5px')};
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    top: 100px;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    top: 75px;
  }
`;

export const GalleryLink = styled.div`
  margin-top: ${(props) => props.theme.spacing(9)};
  display: flex;
  justify-content: center;

  a {
    ${(props) => props.theme.breakpoints.down('sm')} {
      font-size: 1rem;
      line-height: 24px;
    }
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
