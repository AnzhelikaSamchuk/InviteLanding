import styled from 'styled-components/macro';
import { DialogContent, TextField, Typography, Tab as MuiTab, Tabs as MuiTabs, FormControlLabel } from '@mui/material';

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

export const Tabs = styled(MuiTabs)`
  align-items: center;
  z-index: inherit;
  height: 64px;
  background: #f6f7fc;
  border-radius: ${(props) => props.theme.spacing(2.5)};
  padding: ${(props) => props.theme.spacing(1)};

  & .MuiTabs-indicator {
    background-color: transparent;
  }

  & .MuiTabs-flexContainer {
    justify-content: center;
  }
`;

export const Tab = styled(MuiTab)<{ tabCount: number }>`
  font-size: 16px;
  font-weight: 600;
  line-height: ${(props) => props.theme.spacing(3)};
  width: ${(props) => (props.tabCount >= 2 ? '50%' : '100%')};
  z-index: inherit;
  border-radius: ${(props) => props.theme.spacing(1.5)};
  color: ${(props) => props.theme.palette.grey[200]};
  background-color: inherit;

  &.Mui-selected {
    background: #16bb76;
    color: ${(props) => props.theme.palette.common.white};
    border: none;
  }
`;

export const Inputs = styled(TextField)`
  margin-top: ${(props) => props.theme.spacing(3.2)};
  width: 100%;

  .MuiInput-input {
    font-size: 1rem;
    line-height: 28px;
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
export const div_actionWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const div_BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

export const div_resultSum = styled.div`
  margin-top: ${(props) => props.theme.spacing(-2)};
  margin-bottom: ${(props) => props.theme.spacing(2.5)};
  display: flex;
  width: 100%;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: ${(props) => props.theme.palette.grey[100]};
`;

export const Agreement = styled(Typography)`
  color: ${(props) => props.theme.palette.grey[200]};
  margin-top: ${(props) => props.theme.spacing(2)};
  text-align: justify;

  ${(props) => props.theme.breakpoints.down('sm')} {
    text-align: justify;
    font-size: 0.8125rem;
    line-height: 20px;
  }

  & a {
    color: inherit;
  }
`;

export const HelpField = styled(FormControlLabel)`
  margin-right: 0;
  margin-left: ${(props) => props.theme.spacing(0)};
  margin-top: ${(props) => props.theme.spacing(2)};

  & span {
    padding-left: 0;
    font-size: 16px;
    color: ${(props) => props.theme.palette.grey[100]};
  }
`;
