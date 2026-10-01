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

export const InputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${(props) => props.theme.spacing(3.5)};
`;

export const InputWrapper = styled(InputsWrapper)`
  margin-top: ${(props) => props.theme.spacing(2.25)};
`;

export const InputShort = styled(Inputs)`
  width: 46%;
  margin-top: 0;
`;

export const NumberFormatShort = styled.div`
  width: 46%;
`;

export const Details = styled.div`
  color: ${(props) => props.theme.palette.grey[100]};
  margin-top: ${(props) => props.theme.spacing(5)};
  font-size: 1rem;
  font-weight: 600;
  line-height: 24px;
  font-family: 'Montserrat';

  ${(props) => props.theme.breakpoints.down('md')} {
    font-size: 0.875rem;
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

  ${(props) => props.theme.breakpoints.down('sm')} {
    text-align: center;
    font-size: 0.8125rem;
    line-height: 20px;
  }

  & a {
    color: inherit;
  }
`;
