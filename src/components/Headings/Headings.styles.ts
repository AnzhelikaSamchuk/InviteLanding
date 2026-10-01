import styled from 'styled-components/macro';
import { Typography } from '@mui/material';

export const H2 = styled(Typography)`
  color: ${(props) => props.theme.palette.common.black};
  text-align: center;
  margin: 0;
  margin-bottom: ${(props) => props.theme.spacing(10)};

  ${(props) => props.theme.breakpoints.down('md')} {
    margin-bottom: ${(props) => props.theme.spacing(4)};
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    margin-bottom: ${(props) => props.theme.spacing(4)};
    font-size: 1.25rem;
    line-height: 28px;
  }
`;
