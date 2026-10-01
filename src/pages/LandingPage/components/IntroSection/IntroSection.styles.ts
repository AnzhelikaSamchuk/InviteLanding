import styled from 'styled-components/macro';
import { Typography, Tab, Tabs, Divider, Button } from '@mui/material';

export const SectionIntro = styled.div`
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

  ${(props) => props.theme.breakpoints.down('lg')} {
    margin-top: 120px;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    padding: 0 ${(props) => props.theme.spacing(2)};
    margin-top: 48px;
  }
`;

export const ImgWrapper = styled.div<{ path?: string }>`
  background: url(${(props) => props.path}) ${(props) => props.theme.section.background} no-repeat;
  background-size: cover;
  background-position: center left;
  border-radius: ${(props) => props.theme.spacing(6)};
  position: relative;
  max-width: 1360px;
  width: 100%;

  /* 
  &::after {
    position: absolute;
    content: '';
    left: -1px;
    right: -1px;
    top: -1px;
    bottom: -1px;
    background: linear-gradient(96.61deg, #f4f5fb 43.21%, rgba(246, 247, 252, 0) 79.49%);
    border-radius: inherit;
  } */

  ${(props) => props.theme.breakpoints.down('md')} {
    &::after {
      background: linear-gradient(96.61deg, #f4f5fb 43.21%, rgba(246, 247, 252, 0) 79.49%);
    }
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    &::after {
      background-color: ${(props) => props.theme.palette.grey[500]};
    }
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    border-radius: ${(props) => props.theme.spacing(4)};
  }
`;

export const BgWrapper = styled.article`
  border-radius: inherit;
  padding: ${(props) => props.theme.spacing(10)};
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: center;
  width: 100%;
  z-index: 1;

  ${(props) => props.theme.breakpoints.down('lg')} {
    padding-bottom: ${(props) => props.theme.spacing(9)};
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    padding: ${(props) => props.theme.spacing(5)};
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    padding: ${(props) => props.theme.spacing(2.5)};
  }
`;

export const Title = styled(Typography)`
  color: ${(props) => props.theme.palette.common.black};
  margin-bottom: ${(props) => props.theme.spacing(3)};
  text-align: left;
  max-width: 70%;
  z-index: inherit;

  ${(props) => props.theme.breakpoints.down('lg')} {
    font-size: 2.25rem;
    line-height: 48px;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    font-size: 2rem;
    line-height: 36px;
    max-width: 85%;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    max-width: 100%;
    font-size: 1.25rem;
    line-height: 28px;
    margin: 0 ${(props) => props.theme.spacing(1.5)} ${(props) => props.theme.spacing(2)};
  }
`;

export const SubTitle = styled(Typography)`
  text-align: left;
  max-width: 518px;
  color: ${(props) => props.theme.palette.grey[100]};
  margin-bottom: ${(props) => props.theme.spacing(13)};
  z-index: inherit;

  ${(props) => props.theme.breakpoints.down('xl')} {
    margin-bottom: ${(props) => props.theme.spacing(5)};
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    max-width: 90%;
  }

  @media screen and (max-width: 728px) {
    max-width: 400px;
  }

  @media screen and (max-width: 595px) {
    max-width: 358px;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    max-width: 100%;
    margin: 0 ${(props) => props.theme.spacing(1.5)} ${(props) => props.theme.spacing(4)};
    font-size: 0.875rem;
    line-height: 22px;
  }
`;

export const NewTabs = styled(Tabs)`
  align-items: center;
  z-index: inherit;
  margin-left: ${(props) => props.theme.spacing(3.25)};
  min-height: 40px;

  ${(props) => props.theme.breakpoints.down('sm')} {
    margin-left: ${(props) => props.theme.spacing(2)};
  }

  & .MuiTabs-indicator {
    background-color: transparent;
  }
`;

export const NewTab = styled(Tab)`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: ${(props) => props.theme.spacing(5)};
  letter-spacing: 0.2em;
  width: 144px;
  height: 40px;
  min-height: 60px;
  z-index: inherit;
  border-radius: ${(props) => props.theme.spacing(4)} ${(props) => props.theme.spacing(4)} 0 0;
  color: ${(props) => props.theme.palette.grey[200]};

  &.Mui-selected {
    background-color: ${(props) => props.theme.palette.common.white};
    color: ${(props) => props.theme.palette.grey[100]};
    border: none;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    max-width: 120px;
    font-size: 10px;
    line-height: 24px;
    padding: 0 ${(props) => props.theme.spacing(1.7)};
    width: max-content;
    border-radius: ${(props) => props.theme.spacing(2.5)} ${(props) => props.theme.spacing(2.5)} 0 0;
  }
`;

export const EventInfo = styled.div<{ isregistration: boolean }>`
  z-index: inherit;
  background-color: ${(props) => props.theme.palette.common.white};
  border-radius: ${(props) => props.theme.spacing(4)};
  max-width: 1000px;
  width: 'fit-content';
  box-shadow: 0px 20px 40px rgba(143, 144, 188, 0.12);
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: ${(props) => props.theme.spacing(4)};
  justify-content: space-between;

  @media screen and (max-width: 1190px) {
    flex-direction: column;
    width: 100%;
    padding: ${(props) => props.theme.spacing(5)};
    & .MuiButtonBase-root {
      margin-top: 20px;
    }
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    padding: ${(props) => props.theme.spacing(4)};
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    border-radius: ${(props) => props.theme.spacing(2.5)};

    button {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const EventHeader = styled.div`
  z-index: inherit;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 ${(props) => props.theme.spacing(7)} 0 0;
  justify-content: center;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    margin-right: 0;
    margin-bottom: ${(props) => props.theme.spacing(5)};
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    margin-bottom: ${(props) => props.theme.spacing(3)};
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    margin-top: 0;
  }
`;

export const EventColumn = styled.div`
  z-index: inherit;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  margin: 0 ${(props) => props.theme.spacing(5)};

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 1100px) {
    align-items: center;
    margin: 0;
  }
`;

export const MyDivider = styled(Divider)`
  color: ${(props) => props.theme.palette.grey[400]};

  @media screen and (max-width: 1100px) {
    border-bottom-width: thin;
    margin: ${(props) => props.theme.spacing(2)} auto;
    width: 46px;
  }
`;

export const EventColumnTitle = styled(Typography)`
  z-index: inherit;
  line-height: ${(props) => props.theme.spacing(4)};
  color: #${(props) => props.theme.palette.common.black};

  @media screen and (max-width: 1100px) {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 32px;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    font-size: 1rem;
    font-weight: 600;
    line-height: 24px;
  }
`;

export const EventColumnSubTitle = styled(Typography)`
  z-index: inherit;
  color: ${(props) => props.theme.palette.grey[200]};

  ${(props) => props.theme.breakpoints.down('md')} {
    font-size: 0.875rem;
    line-height: 22px;
  }
`;

export const VideoBtn = styled(Button)`
  z-index: inherit;
  margin-bottom: 100px;
`;

export const VideoImg = styled.img`
  margin-right: 10px;
`;
