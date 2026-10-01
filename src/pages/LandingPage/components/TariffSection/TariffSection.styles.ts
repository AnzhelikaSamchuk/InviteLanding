import styled from 'styled-components/macro';
import { Typography } from '@mui/material';

export const Wrapper = styled.div<{ imgPath?: string }>`
  width: 1200px;
  border-radius: ${(props) => props.theme.spacing(3)};
  background-color: ${(props) => props.theme.palette.grey[500]};
  position: relative;

  &::after {
    width: 478px;
    height: 100%;
    position: absolute;
    content: '';
    top: 0;
    right: 0;
    border-radius: 0px ${(props) => props.theme.spacing(3)} ${(props) => props.theme.spacing(3)} 0px;
    overflow: hidden;
    background: linear-gradient(100.59deg, #f6f7fc 23.86%, rgba(246, 247, 252, 0) 97.26%), url(${(props) => props.imgPath || ''});
    background-repeat: no-repeat;
    background-size: cover;

    ${(props) => props.theme.breakpoints.down('lg')} {
      width: 320px;
    }

    ${(props) => props.theme.breakpoints.down('md')} {
      background: none;
    }
  }

  ${(props) => props.theme.breakpoints.down('xl')} {
    width: 100%;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    border-radius: ${(props) => props.theme.spacing(4)};
  }
`;

export const Content = styled.div`
  margin: ${(props) => props.theme.spacing(10)} auto ${(props) => props.theme.spacing(10)} ${(props) => props.theme.spacing(12.5)};
  position: inherit;
  z-index: 1;

  ${(props) => props.theme.breakpoints.down('lg')} {
    margin: ${(props) => props.theme.spacing(8.5)} auto ${(props) => props.theme.spacing(10)} ${(props) => props.theme.spacing(10)};
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    margin: ${(props) => props.theme.spacing(8.5)};
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    margin: ${(props) => props.theme.spacing(4)};
  }
`;

export const Title = styled(Typography)`
  margin-bottom: ${(props) => props.theme.spacing(3)};

  ${(props) => props.theme.breakpoints.down('lg')} {
    width: 380px;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    width: 293px;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 204px;
    margin-bottom: ${(props) => props.theme.spacing(2)};
    font-size: 1.25rem;
    line-height: 28px;
  }
`;

export const DescriptionContent = styled.div`
  display: flex;

  ${(props) => props.theme.breakpoints.down('xl')} {
    display: block;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    button {
      width: 100%;
      font-size: 1rem;
      line-height: 24px;
    }
  }
`;

export const Desc = styled(Typography)`
  width: 579px;
  margin-right: ${(props) => props.theme.spacing(5)};
  color: ${(props) => props.theme.palette.grey[100]};

  ${(props) => props.theme.breakpoints.down('xl')} {
    margin-bottom: ${(props) => props.theme.spacing(6)};
  }

  ${(props) => props.theme.breakpoints.down('lg')} {
    width: 380px;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    width: 100%;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    margin-bottom: ${(props) => props.theme.spacing(3)};
    font-size: 0.875rem;
    line-height: 22px;
  }
`;

export const ElementsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 1240px;
  margin-top: -${(props) => props.theme.spacing(5)};
  margin-left: ${(props) => props.theme.spacing(5)};

  ${(props) => props.theme.breakpoints.down('xl')} {
    width: 826px;
  }

  ${(props) => props.theme.breakpoints.down('lg')} {
    width: 413px;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 280px;
  }
`;

export const PriceElementWrapper = styled.div`
  width: 373px;
  height: 720px;
  background-color: ${(props) => props.theme.palette.grey[500]};
  border-radius: ${(props) => props.theme.spacing(3)};
  display: flex;
  margin-top: ${(props) => props.theme.spacing(5)};
  margin-right: ${(props) => props.theme.spacing(5)};
`;

export const PriceContainer = styled.div`
  height: 560px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Information = styled.div``;

export const PriceIconWrapper = styled.div`
  width: 120px;
  height: 120px;
  background: rgba(22, 187, 118, 0.1);
  border-radius: ${(props) => props.theme.spacing(3.75)};
  margin: 0 auto ${(props) => props.theme.spacing(3)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PriceIcon = styled.div`
  width: 60px;
  height: 60px;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PriceTitle = styled(Typography)`
  max-width: 213px;
  text-align: center;
  margin: 0 auto ${(props) => props.theme.spacing(2.5)};
`;

export const PriceInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoFeature = styled.div`
  max-width: 230px;
  margin: auto;

  .wmde-markdown {
    font-family: 'Montserrat', 'sans-serif';
    font-size: 1rem;
    line-height: 24px;
    font-weight: 400;
    letter-spacing: 0.02rem;

    ul {
      color: ${(props) => props.theme.palette.grey[200]};

      li::marker {
        color: ${(props) => props.theme.palette.primary.main};
      }

      li:not(:last-child) {
        margin-bottom: ${(props) => props.theme.spacing(1.25)};
      }
    }
  }
`;

export const PriceAction = styled.div`
  text-align: center;

  .MuiButton-root {
    padding: 12px 44.5px;
  }
`;

export const Price = styled(Typography)`
  margin-bottom: ${(props) => props.theme.spacing(5.5)};
  color: ${(props) => props.theme.palette.grey[100]};
`;

export const PriceWrapper2 = styled.div`
  margin: 0 auto ${(props) => props.theme.spacing(2.5)};
  width: 210px;
  display: flex;
  justify-content: space-between;
`;

export const PriceContent2 = styled.div``;

export const PriceTitle2 = styled(Typography)`
  color: ${(props) => props.theme.palette.grey[200]};
`;

export const Price2 = styled(Typography)`
  color: ${(props) => props.theme.palette.grey[100]};
`;
