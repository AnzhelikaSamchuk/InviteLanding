import React, { useEffect } from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { observer } from 'mobx-react';

import { additionalInformationStore, performancesStore } from 'stores';

import { SectionForSlider, H2 } from 'components';
import { Button } from '@mui/material';

import Slider from 'react-slick';
import * as CommonS from 'shared/CommonStyles.styles';
import * as S from './PerformancesSection.styles';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export interface IProps {
  title: string;
}

const PerformancesSection = React.forwardRef<HTMLDivElement, IProps>((props, ref) => {
  useEffect(() => {
    performancesStore.getPerformances();
  }, []);

  const SliderArrow = (props: { onClick: () => void; children: JSX.Element; isNext: boolean; top?: string }) => (
    <S.IconWrapper onClick={props.onClick} isNext={props.isNext}>
      {props.children}
    </S.IconWrapper>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
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
    appendDots: (dots: any) => <S.Dots>{dots}</S.Dots>,
    customPaging: function () {
      return <FiberManualRecordIcon sx={{ fontSize: 16 }}></FiberManualRecordIcon>;
    },
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  // function getDateText(diffDate: number): string {
  //   if (diffDate === 0) return 'Менее месяца назад';
  //   else if (diffDate === 1) return 'Месяц назад';
  //   else if (diffDate > 1 && diffDate <= 4) return `${diffDate} месяца назад`;
  //   else if (diffDate > 4) return `${diffDate} месяцев назад`;
  //   else return '';
  // }

  return (
    <SectionForSlider ref={ref}>
      <>
        <H2 text={props.title} />

        <CommonS.ListWrapper>
          <S.Performances>
            <Slider {...settings}>
              {performancesStore.performance.map((item) => (
                <S.PerformanceElement key={item.id}>
                  <S.PerformanceImg>
                    <S.ImgWrapper>
                      <img src={item.iconPath} alt=""></img>
                    </S.ImgWrapper>

                    <S.PerformanceIcon>
                      <a href={item.videoLink} target="_blank" rel="noopener noreferrer">
                        <img src="img/PlayIcon.svg" alt="" />
                      </a>
                    </S.PerformanceIcon>
                    {item.videoTime && <S.PerformanceTime>{item.videoTime}</S.PerformanceTime>}
                  </S.PerformanceImg>

                  <S.PerformanceTitle variant="body1">
                    <a href={item.videoLink} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                    {/* <S.PerformanceMonth>{getDateText(item.diffDate)}</S.PerformanceMonth> */}
                  </S.PerformanceTitle>
                </S.PerformanceElement>
              ))}
            </Slider>

            {additionalInformationStore.videoInformation?.videoTitle && additionalInformationStore.videoInformation?.videoLink && (
              <Button
                variant="text"
                endIcon={<img src="img/YouTubeIcon.svg" alt="" />}
                target="_blank"
                disableRipple
                href={additionalInformationStore.videoInformation?.videoLink}>
                {additionalInformationStore.videoInformation?.videoTitle}
              </Button>
            )}
          </S.Performances>
        </CommonS.ListWrapper>
      </>
    </SectionForSlider>
  );
});
PerformancesSection.displayName = 'PerformancesSection';

export default observer(PerformancesSection);
