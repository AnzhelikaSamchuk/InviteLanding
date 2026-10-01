import styled from 'styled-components/macro';
import { Typography } from '@mui/material';

export const SectionProgram = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 280px;
  max-width: ${(props) => props.theme.breakpoints.values.xl}px;
  margin: auto;
  width: inherit;
  margin-top: 112px;

  ${(props) => props.theme.breakpoints.down('xl')} {
    padding: 0 ${(props) => props.theme.spacing(2.5)};
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    padding: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  display: block;

  ${(props) => props.theme.breakpoints.down('xl')} {
    padding: 0 ${(props) => props.theme.spacing(6.75)};
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    padding: 0 ${(props) => props.theme.spacing(3.25)};
  }
`;

export const ElementsWrapper = styled.div``;

export const ProgramWrapper = styled.div`
  width: 100%;
  padding: ${(props) => props.theme.spacing(10)} ${(props) => props.theme.spacing(5)};
  border-radius: 48px;
  background: ${(props) => props.theme.palette.grey[500]};

  ${(props) => props.theme.breakpoints.down('xl')} {
    padding: ${(props) => props.theme.spacing(10)} ${(props) => props.theme.spacing(6.75)};
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    border-radius: 0;
    padding: ${(props) => props.theme.spacing(7.5)} ${(props) => props.theme.spacing(3.25)} ${(props) => props.theme.spacing(9)};
  }
`;

export const DaySection = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.theme.spacing(5)};

  .MuiListItemText-root {
    margin: 0;
    padding: 0;
  }

  .MuiListItemText-primary {
    color: ${(props) => props.theme.palette.grey[200]};

    ${(props) => props.theme.breakpoints.down('md')} {
      font-size: 0.875rem;
      line-height: 22px;
    }
  }
`;

export const GeneralInformation = styled.div`
  color: ${(props) => props.theme.palette.grey[200]};
  display: flex;

  .MuiListItemText-primary {
    color: ${(props) => props.theme.palette.grey[200]};
  }

  ${(props) => props.theme.breakpoints.down('lg')} {
    flex-direction: column;
  }
`;

export const SectionText = styled.div`
  color: ${(props) => props.theme.palette.grey[200]};

  ${(props) => props.theme.breakpoints.down('md')} {
    font-size: 0.875rem;
    line-height: 22px;
  }

  .MuiListItemText-root {
    margin: 0;
  }
`;

export const SectionItemText = styled(Typography)`
  color: ${(props) => props.theme.palette.common.black};

  .MuiListItemText-primary {
    color: ${(props) => props.theme.palette.common.black};
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 32px;

    ${(props) => props.theme.breakpoints.down('md')} {
      font-size: 1.125rem;
      line-height: 26px;
    }
  }
`;

export const Day = styled.div`
  color: ${(props) => props.theme.palette.grey[100]};
  margin-right: ${(props) => props.theme.spacing(1.25)};

  ${(props) => props.theme.breakpoints.down('md')} {
    font-size: 0.875rem;
    line-height: 22px;
  }
`;

export const Date = styled.div`
  color: ${(props) => props.theme.palette.grey[200]};
`;

export const SectionWrapper = styled.div<{ openSection: boolean; borderColor: string | undefined }>`
  border: ${(props) => (props.openSection ? `2px solid ${props.borderColor ? props.borderColor : props.theme.palette.grey[100]}` : 'none')};
  background-color: ${(props) => props.theme.palette.common.white};
  padding: ${(props) => props.theme.spacing(5)};
  border-radius: ${(props) => props.theme.spacing(3)};
  margin-top: ${(props) => props.theme.spacing(5)};
  position: relative;

  .MuiListItemButton-root {
    justify-content: space-between;

    &:hover {
      background-color: ${(props) => props.theme.palette.common.white};
    }

    ${(props) => props.theme.breakpoints.down('md')} {
      margin-bottom: ${({ openSection }) => (openSection ? '16px' : 0)};
    }
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    margin-top: ${(props) => props.theme.spacing(4)};
    padding: ${(props) => props.theme.spacing(2.5)};
  }
`;

export const ShortTitleWrapper = styled.div<{ bgColor: string | undefined }>`
  width: fit-content;
  padding: 0 20px;
  height: ${(props) => props.theme.spacing(3.5)};
  border-radius: ${(props) => props.theme.spacing(2.5)};
  background-color: ${(props) => (props.bgColor ? props.bgColor : props.theme.palette.grey[100])};
  position: absolute;
  content: '';
  top: -14px;
  left: 40px;
  bottom: 0;
  right: 0;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.07rem;
  color: ${(props) => props.theme.palette.common.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  margin-top: ${(props) => props.theme.spacing(5)};

  &:first-child {
    margin-top: 0;
  }
`;

export const Divider = styled.div`
  margin: ${(props) => props.theme.spacing(4)} 0;
  border-bottom: 2px solid ${(props) => props.theme.palette.grey[500]};

  ${(props) => props.theme.breakpoints.down('lg')} {
    margin: ${(props) => props.theme.spacing(2)} 0;
  }
`;
