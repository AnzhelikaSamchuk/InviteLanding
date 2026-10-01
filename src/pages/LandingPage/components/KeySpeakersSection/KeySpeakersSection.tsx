import React, { useEffect } from 'react';

import { observer } from 'mobx-react';
import { lecturesStore } from 'stores';
import { Section, H2, SliderArrow } from 'components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Grid } from '@mui/material';
import Slider from 'react-slick';
import { KeySpeakerModel } from 'shared/models';
import * as S from './KeySpeakersSection.styles';

const KeySpeakersSection = (props: { title: string }) => {
  useEffect(() => {
    lecturesStore.getAllKeySpeakers();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: lecturesStore.keySpeakers.length >= 4 ? 4 : lecturesStore.keySpeakers.length,
    slidesToScroll: 1,
    nextArrow: (
      <SliderArrow
        isNext={true}
        top="80px"
        onClick={() => {
          return;
        }}>
        <img src="img/NextIcon.svg" alt="" />
      </SliderArrow>
    ),
    prevArrow: (
      <SliderArrow
        isNext={false}
        top="80px"
        onClick={() => {
          return;
        }}>
        <img src="img/PrevIcon.svg" alt="" />
      </SliderArrow>
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow:
            lecturesStore.keySpeakers.length >= 4 ? 3 : lecturesStore.keySpeakers.length - 1 == 0 ? 1 : lecturesStore.keySpeakers.length - 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:
            lecturesStore.keySpeakers.length >= 4 ? 2 : lecturesStore.keySpeakers.length - 1 == 0 ? 1 : lecturesStore.keySpeakers.length - 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const oneKeySpeaker = (item: KeySpeakerModel) => (
    <S.Inner1 key={item.id}>
      <S.Author1>
        <S.PhotoUnion>
          <S.AuthorPhoto1>
            <img src={item.photo} alt="" />
          </S.AuthorPhoto1>
          <S.Union2 />
        </S.PhotoUnion>

        <S.AuthorDesc1>
          <S.AuthorName1 variant="h2">{item.fullName}</S.AuthorName1>
          <S.AuthorPosition variant="body1">{item.position}</S.AuthorPosition>

          <S.Media>
            <S.MediaIcon>
              {item.facebookUrl && (
                <a href={item.facebookUrl} target="_blank" rel="noopener noreferrer">
                  <img src="img/TelegramIcon.svg" alt="" />
                </a>
              )}
            </S.MediaIcon>

            <S.MediaIcon>
              {item.vkUrl && (
                <a href={item.vkUrl} target="_blank" rel="noopener noreferrer">
                  <img src="img/VkIcon.svg" alt="" />
                </a>
              )}
            </S.MediaIcon>

            <S.MediaIcon>
              {item.instagramUrl && (
                <a href={item.instagramUrl} target="_blank" rel="noopener noreferrer">
                  <img src="img/InstagramIcon.svg" alt="" />
                </a>
              )}
            </S.MediaIcon>
          </S.Media>
        </S.AuthorDesc1>
      </S.Author1>
    </S.Inner1>
  );

  const twoKeySpeaker = (item: KeySpeakerModel) => (
    <S.Inner key={item.id}>
      <S.Author2>
        <S.AuthorPhoto2>
          <img src={item.photo} alt="" />
        </S.AuthorPhoto2>

        <S.AuthorDesc2>
          <S.AuthorName2 variant="h3">{item.fullName}</S.AuthorName2>
          <S.AuthorCompany variant="body1">{item.company}</S.AuthorCompany>
        </S.AuthorDesc2>
      </S.Author2>
    </S.Inner>
  );

  const moreKeySpeaker = (item: KeySpeakerModel) => (
    <S.Inner key={item.id}>
      <S.Author>
        <S.AuthorPhoto>
          <img src={item.photo} alt="" />
        </S.AuthorPhoto>

        <S.AuthorDesc>
          <S.AuthorName variant="h4">{item.fullName}</S.AuthorName>
          <S.AuthorCompany variant="body1">{item.company}</S.AuthorCompany>
        </S.AuthorDesc>
      </S.Author>
    </S.Inner>
  );

  return (
    <>
      {lecturesStore.keySpeakers.length !== 0 && (
        <Section>
          <>
            {lecturesStore.keySpeakers.length > 1 && <H2 text={props.title} />}

            <S.Container>
              {lecturesStore.keySpeakers.length > 4 ? (
                <Slider {...settings}>
                  {lecturesStore.keySpeakers.map((item) => {
                    switch (lecturesStore.keySpeakers.length) {
                      case 1:
                        return oneKeySpeaker(item);
                      case 2:
                        return twoKeySpeaker(item);
                      default:
                        return moreKeySpeaker(item);
                    }
                  })}
                </Slider>
              ) : lecturesStore.keySpeakers.length < 4 ? (
                <S.Slider>
                  {lecturesStore.keySpeakers.map((item) => {
                    switch (lecturesStore.keySpeakers.length) {
                      case 1:
                        return oneKeySpeaker(item);
                      case 2:
                        return twoKeySpeaker(item);
                      default:
                        return moreKeySpeaker(item);
                    }
                  })}
                </S.Slider>
              ) : (
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <Grid container spacing={3}>
                    {lecturesStore.keySpeakers.map((item) => {
                      {
                        return (
                          <Grid item xs={6} lg={3} key={item.id}>
                            {moreKeySpeaker(item)}
                          </Grid>
                        );
                      }
                    })}
                  </Grid>
                </Box>
              )}
            </S.Container>
          </>
        </Section>
      )}
    </>
  );
};

export default observer(KeySpeakersSection);
