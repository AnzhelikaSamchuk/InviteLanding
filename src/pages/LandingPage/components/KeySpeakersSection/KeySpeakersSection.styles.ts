import styled from 'styled-components/macro';
import { Typography } from '@mui/material';

export const Container = styled.div`
  width: 100%;
  margin: auto;
  position: relative;
`;

export const Slider = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: -${(props) => props.theme.spacing(5)};
`;

export const Inner = styled.div`
  display: block !important;
  width: 270px !important;
  margin: ${(props) => props.theme.spacing(5)} auto 0;

  ${(props) => props.theme.breakpoints.down('md')} {
    width: 210px !important;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 124px !important;
    margin: ${(props) => props.theme.spacing(3)} auto 0;
  }
`;

export const Inner1 = styled.div`
  width: 100% !important;
`;

export const Author = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.palette.grey[200]};
  align-items: center;
`;

export const Author2 = styled(Author)`
  flex-direction: row;
  justify-content: center;

  ${(props) => props.theme.breakpoints.down('lg')} {
    flex-direction: column;
    align-items: center;
  }
`;

export const Author1 = styled(Author2)`
  ${(props) => props.theme.breakpoints.down('xl')} {
    flex-direction: column;
    align-items: flex-start;
    max-width: 457px;
    margin: auto;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    max-width: 380px;
    margin: auto;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    max-width: 270px;
    margin: auto;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    max-width: 300px;
    margin: auto;
  }
`;

export const AuthorPhoto = styled.div`
  width: 166px;
  height: 166px;
  margin: 0 auto ${(props) => props.theme.spacing(2.5)};
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  background-color: ${(props) => props.theme.palette.grey[500]};
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    width: 110px;
    height: 110px;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 72px;
    height: 72px;
  }
`;

export const AuthorPhoto2 = styled(AuthorPhoto)`
  margin: 0 ${(props) => props.theme.spacing(5)} 0 0;

  ${(props) => props.theme.breakpoints.down('lg')} {
    margin: 0 0 ${(props) => props.theme.spacing(2.5)};
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    width: 100px;
    height: 100px;
    margin: 0 0 ${(props) => props.theme.spacing(2)};
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 72px;
    height: 72px;
  }
`;

export const PhotoUnion = styled.div`
  margin: 0 ${(props) => props.theme.spacing(17.5)} 0 0;
  position: relative;
  width: 310px;
  height: 310px;
  background-repeat: no-repeat;

  ${(props) => props.theme.breakpoints.down('xl')} {
    margin: 0 auto ${(props) => props.theme.spacing(6)};
    width: 300px;
    height: 300px;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    width: 280px;
    height: 280px;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 190px;
    height: 190px;
  }
`;

export const AuthorPhoto1 = styled.div`
  width: 310px;
  height: 310px;
  mask-image: url(img/Maskgroup-opt.png);
  mask-size: 310px 310px;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  position: absolute;
  z-index: 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    ${(props) => props.theme.breakpoints.down('xl')} {
      width: 300px;
      height: 300px;
    }

    ${(props) => props.theme.breakpoints.down('md')} {
      width: 280px;
      height: 280px;
    }

    ${(props) => props.theme.breakpoints.down('sm')} {
      width: 190px;
      height: 190px;
    }
  }

  ${(props) => props.theme.breakpoints.down('xl')} {
    mask-size: 300px 300px;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    mask-size: 280px 280px;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    mask-size: 190px 190px;
  }
`;

export const Union2 = styled.div`
  width: 167px;
  height: 167px;
  mask-size: 167px 167px;
  position: absolute;
  mask-image: url(img/Union.svg);
  background-color: ${(props) => props.theme.palette.grey[500]};
  background-repeat: no-repeat;
  top: 0;
  left: 246px;
  z-index: 1;

  ${(props) => props.theme.breakpoints.down('xl')} {
    left: 180px;
    width: 200px;
    height: 200px;
    mask-size: 200px 200px;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    left: 160px;
    width: 180px;
    height: 180px;
    mask-size: 180px 180px;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    left: 120px;
    width: 110px;
    height: 110px;
    mask-size: 110px 110px;
  }
`;

export const AuthorDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) => props.theme.breakpoints.down('md')} {
    width: 124px;
  }
`;

export const AuthorDesc2 = styled(AuthorDesc)`
  max-width: 200px;
  align-items: flex-start;
  justify-content: center;

  ${(props) => props.theme.breakpoints.down('lg')} {
    align-items: center;
    max-width: 100%;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    align-items: center;
    max-width: 124px;
  }
`;

export const AuthorDesc1 = styled(AuthorDesc2)`
  max-width: 373px;
  align-items: flex-start;
  justify-content: center;

  ${(props) => props.theme.breakpoints.down('xl')} {
    max-width: 457px;
    align-items: center;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    width: 100%;
  }
`;

export const AuthorCompany = styled(Typography)`
  ${(props) => props.theme.breakpoints.down('md')} {
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
  }
`;

export const AuthorName = styled(Typography)`
  margin-bottom: ${(props) => props.theme.spacing(0.5)};
  color: ${(props) => props.theme.palette.common.black};
  width: 100%;
  text-align: center;

  ${(props) => props.theme.breakpoints.down('md')} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const AuthorName2 = styled(AuthorName)`
  width: auto;
  text-align: start;
  color: ${(props) => props.theme.palette.common.black};
  margin-bottom: ${(props) => props.theme.spacing(1)};

  ${(props) => props.theme.breakpoints.down('lg')} {
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: ${(props) => props.theme.spacing(0.5)};
  }
`;

export const AuthorName1 = styled(AuthorName2)`
  color: ${(props) => props.theme.palette.common.black};
  margin-bottom: ${(props) => props.theme.spacing(3)};

  ${(props) => props.theme.breakpoints.down('lg')} {
    font-weight: 700;
    font-size: 2.25rem;
    line-height: 48px;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    text-align: center;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    margin-bottom: ${(props) => props.theme.spacing(2)};
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 28px;
  }
`;

export const AuthorPosition = styled(Typography)`
  ${(props) => props.theme.breakpoints.down('xl')} {
    text-align: center;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 22px;
  }
`;

export const Media = styled.div`
  display: none !important;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const MediaIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: ${(props) => props.theme.spacing(2)};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    display: block;
  }
`;
