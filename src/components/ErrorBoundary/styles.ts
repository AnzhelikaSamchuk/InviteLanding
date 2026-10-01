import styled from 'styled-components/macro';
import { Typography } from '@mui/material';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const img_robot = styled.img`
  width: 40%;
  height: 40%;
  max-height: 250px;
`;

export const div_textWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -160px;
  margin-bottom: ${(props) => props.theme.spacing(3)};
  text-align: justify;
`;

export const Typography_header = styled(Typography)`
  padding: 12px ${(props) => props.theme.spacing(3.5)};
  font-size: 1.5rem;

  ${(props) => props.theme.breakpoints.down('md')} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const Typography_text = styled(Typography)`
  padding: 8px ${(props) => props.theme.spacing(3.5)};
  font-size: 1rem;

  ${(props) => props.theme.breakpoints.down('md')} {
    font-size: 12px;
    line-height: 24px;
  }
`;
