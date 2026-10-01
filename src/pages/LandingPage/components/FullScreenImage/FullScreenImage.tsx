import { useEffect, useRef } from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { observer } from 'mobx-react';

import { galleriesStore, imageSliderStore } from 'stores';

import { NextIcon, PrevIcon } from 'components';
import Slider from 'react-slick';
import { KeyCodes } from 'shared/enums/commonEnums';

import * as S from './FullScreenImage.styles';

const FullScreenImage = () => {
  const sliderRef = useRef<Slider>(null);
  const handleClose = () => {
    imageSliderStore.setIsDialogFullScreenOpen(false);
  };

  const handleKeyUp = (e: any) => {
    if (!sliderRef.current) return;

    if (e.keyCode === KeyCodes.LEFT) sliderRef.current.slickPrev();
    else if (e.keyCode === KeyCodes.RIGHT) sliderRef.current.slickNext();
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const SliderArrow = (props: { onClick: () => void; children: JSX.Element; isNext: boolean }): JSX.Element => (
    <S.IconWrapper onClick={props.onClick} isNext={props.isNext}>
      {props.children}
    </S.IconWrapper>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: imageSliderStore.selectedImageIndex,
    nextArrow: (
      <SliderArrow
        isNext={true}
        onClick={() => {
          return;
        }}>
        <NextIcon />
      </SliderArrow>
    ),
    prevArrow: (
      <SliderArrow
        isNext={false}
        onClick={() => {
          return;
        }}>
        <PrevIcon />
      </SliderArrow>
    ),
    appendDots: (dots: any) => <S.Dots>{dots}</S.Dots>,
    customPaging: function () {
      return <FiberManualRecordIcon sx={{ fontSize: 16 }}></FiberManualRecordIcon>;
    },
  };

  return (
    <S.DialogFullScreen open={imageSliderStore.isDialogFullScreenOpen} onClose={handleClose}>
      <S.Gallery>
        <Slider ref={sliderRef} {...settings}>
          {galleriesStore.galleries.map(
            (item) =>
              item.isVisible && (
                <S.GalleryPhoto key={item.id}>
                  <img src={item.iconPath} alt="" />
                </S.GalleryPhoto>
              )
          )}
        </Slider>
      </S.Gallery>
    </S.DialogFullScreen>
  );
};

export default observer(FullScreenImage);
