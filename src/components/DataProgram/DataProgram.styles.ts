import styled from 'styled-components/macro';
import { Typography } from '@mui/material';

export const ProgramsListWrapper = styled.div`
  margin: auto;

  .MuiDivider-root {
    ${(props) => props.theme.breakpoints.down('sm')} {
      margin: ${(props) => props.theme.spacing(2.5)} 0 !important;
    }
  }
`;

export const ProgramsList = styled.div`
  color: ${(props) => props.theme.palette.grey[200]};
  display: flex;
  justify-content: space-between;

  ${(props) => props.theme.breakpoints.down('xl')} {
    flex-wrap: wrap;
    justify-content: flex-start;
    flex-direction: column;
  }
`;

export const ProgramTime = styled(Typography)`
  width: 167px;
  min-width: 110px;

  ${(props) => props.theme.breakpoints.down('xl')} {
    margin: auto ${(props) => props.theme.spacing(5)} auto 0;
  }

  ${(props) => props.theme.breakpoints.down('lg')} {
    margin-bottom: ${(props) => props.theme.spacing(0.5)};
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    width: auto;
    margin-right: ${(props) => props.theme.spacing(2.5)};
    font-size: 0.875rem;
    line-height: 22px;
  }
`;

export const WrapperTheme = styled.div`
  display: flex;
  justify-content: start;

  ${(props) => props.theme.breakpoints.down('xl')} {
    width: auto;
    flex-direction: column;
  }
`;

export const ProgramTheme = styled(Typography)<{ variant?: string }>`
  width: 477px;
  margin-right: ${(props) => props.theme.spacing(5)};
  color: ${(props) => props.theme.palette.common.black};

  ${(props) => props.theme.breakpoints.down('xl')} {
    margin-right: 0;
    width: auto;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    font-size: ${(props) => (props.variant === 'body1' ? '0.875rem' : '1rem')};
    line-height: ${(props) => (props.variant === 'body1' ? '22px' : '24px')};
  }
`;

export const WrapperSpeakers = styled.div<{ dayCount?: number }>`
  display: flex;
  flex-direction: column;
`;

export const ProgramSpeaker = styled.div<{ dayCount?: number }>`
  width: ${(props) => (props.dayCount === 1 ? '477px' : '437px')};
  display: flex;

  ${(props) => props.theme.breakpoints.down('xl')} {
    margin-top: ${(props) => props.theme.spacing(2.5)};
  }

  ${(props) => props.theme.breakpoints.down('lg')} {
    width: auto;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    margin-top: ${(props) => (props.dayCount === 1 ? props.theme.spacing(2.5) : props.theme.spacing(1.5))};
  }

  &:not(:last-child) {
    padding-bottom: ${(props) => props.theme.spacing(2.5)};
  }
`;

export const SpeakerPhoto = styled.div`
  width: 64px;
  height: 64px;
  margin-right: ${(props) => props.theme.spacing(2.5)};
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SpeakerInformation = styled.div``;

export const SpeakerName = styled(Typography)<{ bgcolor?: string }>`
  margin-bottom: ${(props) => props.theme.spacing(0.625)};
  color: ${(props) => (props.bgcolor ? `${props.bgcolor}` : props.theme.palette.grey[100])};
  background-color: inherit;

  ${(props) => props.theme.breakpoints.down('md')} {
    font-size: 0.875rem;
    line-height: 22px;
  }
`;

export const SpeakerPosition = styled(Typography)`
  ${(props) => props.theme.breakpoints.down('md')} {
    font-size: 0.8125rem;
    line-height: 20px;
  }
`;
