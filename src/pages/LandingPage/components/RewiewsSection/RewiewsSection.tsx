import { useEffect } from 'react';

import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';

import { landingStore } from 'stores';
import { SliderArrow } from 'components';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Button } from '@mui/material';
import Slider from 'react-slick';

import { Routes } from 'shared/constants/Routes';

import * as S from './RewiewsSection.styles';

const RewiewsSection = () => {
  useEffect(() => {
    landingStore.getRewiews();
  }, []);

  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <SliderArrow
        isNext={true}
        onClick={() => {
          return;
        }}>
        <img src="img/NextIcon.svg" alt="" />
      </SliderArrow>
    ),
    prevArrow: (
      <SliderArrow
        isNext={false}
        onClick={() => {
          return;
        }}>
        <img src="img/PrevIcon.svg" alt="" />
      </SliderArrow>
    ),
  };

  return (
    <S.Wrapper>
      <S.Container>
        <Slider {...settings}>
          {landingStore.rewiews.map((item) => (
            <S.Inner key={item.id}>
              <S.Text>{item.text}</S.Text>

              <S.Author>
                <S.AuthorPhoto>
                  <img src={item.authorPhoto} alt="" />
                </S.AuthorPhoto>

                <S.AuthorDesc>
                  <S.AuthorName variant="button">{item.author}</S.AuthorName>
                  {!item.company && <S.AuthorLocation variant="body1">{item.location}</S.AuthorLocation>}
                  {item.company && (
                    <S.AuthorLocation variant="body1">
                      {item.company} ({item.location})
                    </S.AuthorLocation>
                  )}
                </S.AuthorDesc>
              </S.Author>
            </S.Inner>
          ))}
        </Slider>

        <S.ButtonWrapper>
          <Button variant="contained" disableRipple onClick={() => navigate(Routes.ARCHIVE)}>
            ПОСМОТРЕТЬ ПРОШЛОГОДНИЕ ДОКЛАДЫ
          </Button>
        </S.ButtonWrapper>
      </S.Container>
    </S.Wrapper>
  );
};

export default observer(RewiewsSection);
