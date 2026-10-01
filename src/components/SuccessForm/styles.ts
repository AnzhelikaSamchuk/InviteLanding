import styled from 'styled-components/macro';
import { Button, DialogContent, Typography } from '@mui/material';

export const SuccessWrapper = styled(DialogContent)`
  padding: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const SuccessIconWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: center;
`;

export const Title = styled(Typography)`
  margin: ${(props) => props.theme.spacing(4)} 0;
  text-align: center;

  ${(props) => props.theme.breakpoints.down('sm')} {
    font-size: 1.125rem;
    line-height: 26px;
  }
`;

export const Subtitle = styled(Typography)`
  margin: ${(props) => props.theme.spacing(4)} 0;
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing(1.5)};

  ${(props) => props.theme.breakpoints.down('sm')} {
    font-size: 0.875rem;
    line-height: 22px;
  }
`;

export const Finish = styled(Typography)`
  margin-top: ${(props) => props.theme.spacing(4)};
  text-align: center;

  ${(props) => props.theme.breakpoints.down('sm')} {
    font-size: 1.125rem;
    line-height: 26px;
  }
`;

export const Button_finish = styled(Button)`
  margin-top: ${(props) => props.theme.spacing(4)};
`;
