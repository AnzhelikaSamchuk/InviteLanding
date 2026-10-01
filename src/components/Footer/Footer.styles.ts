import styled from 'styled-components/macro';
import { Typography } from '@mui/material';
import { styled as materialStyled } from '@mui/material/styles';

export const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.palette.common.black};
  padding: ${(props) => props.theme.spacing(9)} ${(props) => props.theme.spacing(5)} ${(props) => props.theme.spacing(3)};
  width: 100%;
  display: block;
  margin-top: 140px;

  ${(props) => props.theme.breakpoints.down('xl')} {
    padding: ${(props) => props.theme.spacing(9)} ${(props) => props.theme.spacing(9.25)} ${(props) => props.theme.spacing(3)};
    margin-top: 120px;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    padding: ${(props) => props.theme.spacing(4)} ${(props) => props.theme.spacing(3.25)} ${(props) => props.theme.spacing(3.25)};
    margin-top: 80px;
  }
`;

export const FooterContainer = materialStyled('div')(({ theme }) => ({
  ...theme.typography.subtitle1,
  margin: 'auto',
  maxWidth: theme.breakpoints.values.xl,
  color: theme.palette.grey[300],
  width: 1200,
  minWidth: 268,
  '& a': {
    color: theme.palette.grey[200],
    textDecoration: 'none',
    opacity: 0.5,
    transition: 'opacity 0.4s',

    '&:hover, &:focus': {
      color: theme.palette.grey[300],
      opacity: 1,
      textDecoration: 'underline',
    },
  },

  [theme.breakpoints.down('xl')]: {
    width: '100%',
  },
}));

export const IconContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.spacing(3)};

  ${(props) => props.theme.breakpoints.down('md')} {
    flex-direction: column;
  }
`;

export const FooterIcon = styled.div`
  width: 122px;
  height: 20px;
  margin-bottom: ${(props) => props.theme.spacing(3.5)};

  a {
    color: ${(props) => props.theme.palette.grey[300]};
    opacity: 0.5;
    transition: opacity 0.4s;

    &:hover,
    &:focus {
      opacity: 1;
    }
  }
`;

export const Archive = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: ${(props) => props.theme.spacing(-6.5)};
  margin-bottom: ${(props) => props.theme.spacing(3)};

  ${(props) => props.theme.breakpoints.down('lg')} {
    margin-top: 0;
  }
`;

export const ArchiveText = styled(Typography)`
  a {
    color: ${(props) => props.theme.palette.grey[300]};
    margin-right: ${(props) => props.theme.spacing(5)};
    opacity: 1;

    &:hover,
    :focus {
      text-decoration: none;
    }

    ${(props) => props.theme.breakpoints.down('lg')} {
      margin-right: ${(props) => props.theme.spacing(3)};
    }
  }
`;

export const MediaContent = styled.div`
  margin-right: 0;

  ${(props) => props.theme.breakpoints.down('md')} {
    margin-top: ${(props) => props.theme.spacing(2)};
  }
`;

export const Media = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-right: ${(props) => props.theme.spacing(-2)};

  ${(props) => props.theme.breakpoints.down('md')} {
    justify-content: flex-start;
  }
`;

export const MediaText = styled.div`
  text-align: right;
  margin-bottom: ${(props) => props.theme.spacing(2.5)};

  ${(props) => props.theme.breakpoints.down('md')} {
    text-align: left;
  }
`;

export const MediaIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: ${(props) => props.theme.spacing(2)};
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    opacity: 1;
  }
`;

export const TextContent = styled.div`
  margin-top: ${(props) => props.theme.spacing(4)};
  display: flex;
  justify-content: space-between;

  ${(props) => props.theme.breakpoints.down('sm')} {
    flex-direction: column;
  }
`;

export const Normative = styled.div``;

export const Date = styled.div`
  margin-bottom: ${(props) => props.theme.spacing(5.5)};

  ${(props) => props.theme.breakpoints.down('xl')} {
    margin-bottom: ${(props) => props.theme.spacing(2)};
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    margin-bottom: ${(props) => props.theme.spacing(1.5)};
  }
`;

export const FooterInfo = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  justify-content: space-between;

  ${(props) => props.theme.breakpoints.down('xl')} {
    width: 220px;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    display: none;
  }
`;

export const FooterInfoInNormative = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: ${(props) => props.theme.spacing(3)};

  ${(props) => props.theme.breakpoints.up('md')} {
    display: none;
  }
`;

export const Contact = materialStyled('div')(({ theme }) => ({
  ...theme.typography.subtitle1,

  maxWidth: 175,
  color: theme.palette.grey[300],
  textAlign: 'end',

  '& a': {
    color: theme.palette.grey[300],
    opacity: 1,

    '&:hover': {
      textDecoration: 'none',
    },
  },

  [theme.breakpoints.down('md')]: {
    textAlign: 'start',
  },
}));

export const Link = styled.div``;

export const Phone = styled.div``;

export const Information = styled.div`
  display: none;
  color: ${(props) => props.theme.palette.grey[200]};
  opacity: 0.5;

  ${(props) => props.theme.breakpoints.down('xl')} {
    width: auto;
  }
`;
