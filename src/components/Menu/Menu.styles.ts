import Drawer from '@mui/material/Drawer';
import styled from 'styled-components/macro';
import { Typography } from '@mui/material';

export const Wrapper = styled.div`
  text-align: center;
  position: fixed;
  z-index: 10;
  top: 0;
  background-color: ${(props) => props.theme.palette.common.white};
  width: 1280px;
  padding: ${(props) => props.theme.spacing(4)} ${(props) => props.theme.spacing(5)};
  display: flex;
  justify-content: flex-start;

  ${(props) => props.theme.breakpoints.down('xl')} {
    width: 100%;
    padding: ${(props) => props.theme.spacing(4)} ${(props) => props.theme.spacing(2.5)};
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    padding: ${(props) => props.theme.spacing(1.5)} ${(props) => props.theme.spacing(2)};
  }
`;

export const Container = styled.div`
  padding-left: ${(props) => props.theme.spacing(5)};
  max-width: 1160px;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${(props) => props.theme.breakpoints.down('xl')} {
    padding-left: ${(props) => props.theme.spacing(10)};
  }

  ${(props) => props.theme.breakpoints.down('lg')} {
    padding: 0 ${(props) => props.theme.spacing(10)};
    height: 56px;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    padding: 0 ${(props) => props.theme.spacing(5)};
    height: 24px;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    padding: 0 ${(props) => props.theme.spacing(2.5)};
  }
`;

export const Logo = styled.div`
  width: 122px;
  height: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 95px;

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
`;

export const Navigation = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  overflow: hidden;

  ${(props) => props.theme.breakpoints.down('lg')} {
    display: none;
  }
`;

export const Humb = styled.div`
  width: 32px;
  height: 32px;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;

  ${(props) => props.theme.breakpoints.down('md')} {
    width: 24px;
    height: 24px;
  }

  button {
    padding: 0;
  }

  svg {
    display: block;
  }

  ${(props) => props.theme.breakpoints.up('lg')} {
    display: none;
  }

  ${(props) => props.theme.breakpoints.down('lg')} {
    display: block;
  }
`;

export const DrawerContent = styled(Drawer)`
  .MuiDrawer-paper {
    margin-top: ${(props) => props.theme.spacing(12)};
    padding-top: ${(props) => props.theme.spacing(5)};

    ${(props) => props.theme.breakpoints.down('md')} {
      margin-top: ${(props) => props.theme.spacing(6)};
    }
  }

  .MuiBackdrop-root {
    background-color: rgba(0, 0, 0, 0);
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-top: ${(props) => props.theme.spacing(-1)};
  }
`;

export const NavigationText = styled(Typography)<{ pad?: string }>`
  padding-right: ${(props) => props.pad || props.theme.spacing(5)};

  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.palette.primary.main};
  }

  ${(props) => props.theme.breakpoints.down('xl')} {
    padding-right: ${(props) => props.theme.spacing(5)};
  }
`;

export const NavigationAdaptiveText = styled(Typography)`
  display: flex;
  justify-content: center;
  padding: ${(props) => props.theme.spacing(0.5)} 0;
  font-size: 1.5rem;
  margin-bottom: ${(props) => props.theme.spacing(5)};

  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.palette.primary.main};
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ButtonAdaptive = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.spacing(4)};

  button {
    padding: ${(props) => props.theme.spacing(3)};
  }
`;

export const Close = styled.div`
  ${(props) => props.theme.breakpoints.down('md')} {
    display: none;
  }
`;

export const Menu = styled.div`
  ${(props) => props.theme.breakpoints.down('md')} {
    display: none;
  }
`;

export const CloseMobile = styled.div`
  ${(props) => props.theme.breakpoints.up('md')} {
    display: none;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    display: block;
  }
`;

export const MenuMobile = styled.div`
  ${(props) => props.theme.breakpoints.up('md')} {
    display: none;
  }

  ${(props) => props.theme.breakpoints.down('md')} {
    display: block;
  }
`;
