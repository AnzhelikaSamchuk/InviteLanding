import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { observer } from 'mobx-react';
import { additionalInformationStore, galleriesStore, imageSliderStore } from 'stores';
import { SectionForSlider, H2 } from 'components';
import { Button } from '@mui/material';

import Slider from 'react-slick';
import * as CommonS from 'shared/CommonStyles.styles';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import * as S from './GalleriesSection.styles';

const GalleriesSection = (props: { title: string }) => {
  const SliderArrow = (props: { onClick: () => void; children: JSX.Element; isNext: boolean }): JSX.Element => (
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
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleOpenFullScreen = (selectedIndex: number) => {
    imageSliderStore.setIsDialogFullScreenOpen(true);
    imageSliderStore.setSelectedImage(selectedIndex);
  };

  return (
    <SectionForSlider>
      <>
        <H2 text={props.title} />

        <CommonS.ListWrapper>
          <S.Container>
            <S.Gallery>
              <Slider {...settings}>
                {galleriesStore.galleries.map(
                  (item) =>
                    item.isVisible && (
                      <S.GalleryElement key={item.id} onClick={() => handleOpenFullScreen(item.order)}>
                        <S.GalleryPhoto>
                          <img src={item.iconPath} alt="" />
                        </S.GalleryPhoto>
                      </S.GalleryElement>
                    )
                )}
              </Slider>

              {additionalInformationStore.photoInformation?.photoTitle && additionalInformationStore.photoInformation?.photoLink && (
                <S.GalleryLink>
                  <Button
                    variant="text"
                    endIcon={<img src="img/VkIcon.svg" alt="" />}
                    target="_blank"
                    disableRipple
                    href={additionalInformationStore.photoInformation?.photoLink}>
                    {additionalInformationStore.photoInformation?.photoTitle}
                  </Button>
                </S.GalleryLink>
              )}
            </S.Gallery>
          </S.Container>
        </CommonS.ListWrapper>
      </>
    </SectionForSlider>
  );
};

export default observer(GalleriesSection);
