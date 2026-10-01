import styled from 'styled-components/macro';
import { DialogContent, TextField, Typography } from '@mui/material';

export const Title = styled(Typography)`
  width: 100%;
  margin-bottom: ${(props) => props.theme.spacing(5)};
  color: ${(props) => props.theme.palette.common.black};

  ${(props) => props.theme.breakpoints.down('md')} {
    font-size: 1.75rem;
    margin-bottom: ${(props) => props.theme.spacing(4)};
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    font-size: 1.25rem;
    line-height: 28px;
    margin-bottom: ${(props) => props.theme.spacing(2.5)};
  }
`;

export const ContentWrapper = styled(DialogContent)`
  padding: 0;
  margin-bottom: ${(props) => props.theme.spacing(5)};
  max-height: 650px;

  ${(props) => props.theme.breakpoints.down('sm')} {
    margin-bottom: ${(props) => props.theme.spacing(2.5)};
  }
`;

export const Inputs = styled(TextField)`
  margin-top: ${(props) => props.theme.spacing(3.5)};
  width: 100%;

  .MuiInput-input {
    font-size: 1rem;
    line-height: 28px;
  }

  &:first-child {
    margin-top: 0;
  }

  .MuiInputLabel-standard {
    font-size: 0.875rem;
    line-height: 20px;
  }

  & .MuiFormHelperText-root {
    font-size: 0.875rem;
    line-height: 20px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  button {
    width: 100%;

    ${(props) => props.theme.breakpoints.down('sm')} {
      font-size: 1rem;
      line-height: 24px;
    }
  }
`;

export const Agreement = styled(Typography)`
  color: ${(props) => props.theme.palette.grey[200]};
  margin-top: ${(props) => props.theme.spacing(2)};
  text-align: justify;

  ${(props) => props.theme.breakpoints.down('sm')} {
    font-size: 0.8125rem;
    line-height: 20px;
  }

  & a {
    color: inherit;
  }
`;
