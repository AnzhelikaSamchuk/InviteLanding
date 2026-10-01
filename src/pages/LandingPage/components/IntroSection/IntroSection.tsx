import React from 'react';

import { observer } from 'mobx-react';
import { conferenceStore, landingStore, participantsStore, tariffStore } from 'stores';
import { Button } from '@mui/material';

import { MenuItems } from 'shared/constants/common';
import { MenuKeys } from 'shared/enums/commonEnums';

import * as S from './IntroSection.styles';

const IntroSection = () => {
  const introData = conferenceStore.conference;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    conferenceStore.setSelectedType(newValue);
  };

  const handleClickOpenParticipant = () => {
    const isFree = !!tariffStore.freeConferenceModel;
    if (isFree) {
      // определяем тип тарифа из типа конференции
      // ищем среди тарифов тариф с таким же именем
      const tariff = tariffStore.tariffs.find((t) => t.title === conferenceStore.selectedType.name);
      const tariffType = tariff?.types[0];
      participantsStore.openDialog(undefined, tariffType);
    } else landingStore.setSelectedSection(MenuKeys.Price);
  };

  const handleVideoLink = () => {
    const menuItem = MenuItems.find((item) => item.key === MenuKeys.Events);
    if (menuItem) landingStore.setSelectedSection(menuItem.key);
  };

  const price = isNaN(parseInt(conferenceStore.selectedType?.price))
    ? 'Free'
    : parseInt(conferenceStore.selectedType.price) === 0
    ? 'Free'
    : conferenceStore.selectedType.price;

  return (
    <S.SectionIntro>
      <S.ImgWrapper path={conferenceStore.conference.imagePath}>
        <S.BgWrapper>
          <S.Title variant="h1" style={{ color: introData.titleColor }}>
            {introData.title}
          </S.Title>

          <S.SubTitle variant="body1" style={{ color: introData.subTitleColor }}>
            {introData.subTitle}
          </S.SubTitle>

          {conferenceStore.conference.types.length > 0 ? (
            <>
              <S.NewTabs value={conferenceStore.selectedTypeIndex} onChange={handleChange}>
                {conferenceStore.conference.types.map((item, index) => (
                  <S.NewTab
                    key={index}
                    label={item.name.toUpperCase()}
                    value={index}
                    disableRipple
                    style={index !== conferenceStore.selectedTypeIndex ? { color: introData.subTitleColor } : {}}
                  />
                ))}
              </S.NewTabs>

              <S.EventInfo isregistration={conferenceStore.conference.isRegistration}>
                <S.EventHeader>
                  <S.EventColumn>
                    <S.EventColumnTitle variant="h4">{conferenceStore.selectedType.date}</S.EventColumnTitle>
                    <S.EventColumnSubTitle variant="body1">Когда</S.EventColumnSubTitle>
                  </S.EventColumn>

                  <S.MyDivider orientation="vertical" variant="middle" flexItem />

                  <S.EventColumn>
                    <S.EventColumnTitle variant="h4">{conferenceStore.selectedType.location}</S.EventColumnTitle>
                    <S.EventColumnSubTitle variant="body1">Где</S.EventColumnSubTitle>
                  </S.EventColumn>

                  <S.MyDivider orientation="vertical" variant="middle" flexItem />

                  <S.EventColumn>
                    <S.EventColumnTitle variant="h4">
                      {price}
                      {!isNaN(parseInt(conferenceStore.selectedType.price)) && parseInt(conferenceStore.selectedType.price) !== 0 && (
                        <span>&#8381;</span>
                      )}
                    </S.EventColumnTitle>
                    <S.EventColumnSubTitle variant="body1">Цена</S.EventColumnSubTitle>
                  </S.EventColumn>
                </S.EventHeader>

                {conferenceStore.conference.isRegistration && (
                  <Button variant={'contained'} disableRipple onClick={handleClickOpenParticipant}>
                    Участвовать
                  </Button>
                )}
              </S.EventInfo>
            </>
          ) : (
            <S.VideoBtn variant={'contained'} disableRipple onClick={handleVideoLink}>
              <S.VideoImg src="img/Video.svg" alt=""></S.VideoImg>Смотреть видео
            </S.VideoBtn>
          )}
        </S.BgWrapper>
      </S.ImgWrapper>
    </S.SectionIntro>
  );
};

export default observer(IntroSection);
