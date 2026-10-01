import Box from '@mui/material/Box';
import { observer } from 'mobx-react';

import { landingStore, navigationsStore, preSpeakerStore } from 'stores';

import CloseMobileIcon from 'components/CloseMobileIcon';
import { SpeakerDialog } from 'pages/LandingPage/components';
import { CorporateDialog, ParticipantDialog } from 'pages/LandingPage/components/Dialogs';
import { Button, IconButton } from '@mui/material';

import { MenuItems } from 'shared/constants/common';
import IMenu from 'shared/interfaces/IMenu';

import * as S from './Menu.styles';

const Menu = () => {
  const setCurrentSection = (item: IMenu) => {
    landingStore.setSelectedSection(item.key);
  };

  const handleClickOpenModalParticipate = () => {
    preSpeakerStore.setIsDialogOpen(true);
    toggleDrawer(false);
  };

  const toggleDrawer = (value: boolean) => {
    navigationsStore.setIsDrawerOpen(value);
  };

  const list = () => (
    <Box sx={{ width: 'auto' }} role="presentation">
      {navigationsStore.navigations.map((entry) =>
        MenuItems.map((item) => {
          if (entry.key !== item.key || !entry.isVisible) return null;
          return (
            <S.NavigationAdaptiveText
              key={item.key}
              variant="body1"
              onClick={() => {
                setCurrentSection(item);
                toggleDrawer(false);
              }}
              onKeyDown={() => {
                setCurrentSection(item);
                toggleDrawer(false);
              }}
              role="button"
              tabIndex={0}>
              {item.name}
            </S.NavigationAdaptiveText>
          );
        })
      )}

      <S.ButtonAdaptive>
        <Button variant="outlined" disableRipple onClick={handleClickOpenModalParticipate}>
          Хочу выступить
        </Button>
      </S.ButtonAdaptive>
    </Box>
  );

  return (
    <S.Wrapper>
      <S.Container>
        <S.Logo>
          <a href="/" rel="noopener noreferrer">
            <img src="img/logo-menu.svg" alt="" />
          </a>
        </S.Logo>

        <S.Navigation>
          {navigationsStore.navigations.map((entry) =>
            MenuItems.map((item, index) => {
              if (entry.key !== item.key || !entry.isVisible) return null;
              return (
                <S.NavigationText
                  key={item.key}
                  pad={index === MenuItems.length - 1 ? '60px' : undefined}
                  variant="body1"
                  onClick={() => setCurrentSection(item)}
                  onKeyDown={() => setCurrentSection(item)}
                  role="button"
                  tabIndex={0}>
                  {item.name}
                </S.NavigationText>
              );
            })
          )}

          <Button variant="outlined" disableRipple onClick={handleClickOpenModalParticipate}>
            Хочу выступить
          </Button>
        </S.Navigation>

        <S.Humb>
          {navigationsStore.isDrawerOpen ? (
            <IconButton
              disableRipple
              onClick={() => {
                toggleDrawer(false);
              }}>
              <S.Close>
                <img src="img/Close.svg" alt="" />
              </S.Close>

              <S.CloseMobile>
                <CloseMobileIcon />
              </S.CloseMobile>
            </IconButton>
          ) : (
            <IconButton
              disableRipple
              onClick={() => {
                toggleDrawer(true);
              }}>
              <S.Menu>
                <img src="img/Menu.svg" alt="" />
              </S.Menu>

              <S.MenuMobile>
                <img src="img/MenuMobile.svg" alt="" />
              </S.MenuMobile>
            </IconButton>
          )}
          <S.DrawerContent
            anchor="top"
            open={navigationsStore.isDrawerOpen}
            variant="persistent"
            elevation={0}
            onClose={() => {
              toggleDrawer(false);
            }}>
            {list()}
          </S.DrawerContent>
        </S.Humb>
      </S.Container>

      <ParticipantDialog />
      <CorporateDialog />
      <SpeakerDialog />
    </S.Wrapper>
  );
};

export default observer(Menu);
