import styled from 'styled-components/macro';
import { Typography } from '@mui/material';

export const Programs = styled.div`
  margin: auto;
  max-width: 994px;

  ${(props) => props.theme.breakpoints.up('xl')} {
    display: flex;
    justify-content: space-between;
  }

  ${(props) => props.theme.breakpoints.down('xl')} {
    max-width: 620px;
    flex-direction: column;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    width: 100%;
  }

  .wmde-markdown {
    width: 580px;
    font-family: 'Montserrat', 'sans-serif';
    font-size: 1rem;
    line-height: 28px;
    font-weight: 500;
    letter-spacing: 0.02rem;

    ul {
      color: ${(props) => props.theme.palette.grey[100]};

      li::marker {
        color: ${(props) => props.theme.palette.primary.main};
      }

      li:not(:last-child) {
        margin-bottom: ${(props) => props.theme.spacing(1)};
      }
    }

    ${(props) => props.theme.breakpoints.down('xl')} {
      width: 100%;
    }

    ${(props) => props.theme.breakpoints.down('sm')} {
      font-size: 0.875rem;
      line-height: 22px;
    }
  }
`;

export const InformationTitle = styled.div`
  width: 374px;
  margin-right: ${(props) => props.theme.spacing(5)};

  ${(props) => props.theme.breakpoints.down('xl')} {
    width: 100%;
  }
`;

export const Title = styled(Typography)`
  margin-bottom: ${(props) => props.theme.spacing(3)};
  text-align: start;

  ${(props) => props.theme.breakpoints.down('xl')} {
    text-align: center;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    text-align: center;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    font-size: 1.25rem;
    line-height: 28px;
    margin-bottom: ${(props) => props.theme.spacing(1.5)};
  }
`;

export const SubTitle = styled(Typography)`
  color: ${(props) => props.theme.palette.grey[200]};
  margin: 0 auto ${(props) => props.theme.spacing(6)};
  text-align: start;
  max-width: 580px;

  ${(props) => props.theme.breakpoints.down('xl')} {
    max-width: 620px;
    text-align: center;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    font-size: 0.875rem;
    line-height: 22px;
    margin: 0 auto ${(props) => props.theme.spacing(4)};
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    font-size: 0.875rem;
    line-height: 22px;
  }
`;
