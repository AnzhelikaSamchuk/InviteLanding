import React from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { observer } from 'mobx-react';
import { galleriesStore, preSpeakerStore } from 'stores';
import { Section, H2 } from 'components';
import { Button } from '@mui/material';

import * as CommonS from 'shared/CommonStyles.styles';

import * as S from './AboutUsSection.styles';

export interface IProps {
  title: string;
}

const AboutUsSection = React.forwardRef<HTMLDivElement, IProps>((props, ref) => {
  const handleClickOpenModalParticipate = () => {
    preSpeakerStore.setIsDialogOpen(true);
  };

  return (
    <Section ref={ref}>
      <>
        <S.Title>
          <H2 text={props.title} />
        </S.Title>

        <CommonS.ListWrapper>
          <S.Container>
            <S.About>
              <S.Content1280px>
                <S.Desc>
                  <H2 text={props.title} />
                  <MarkdownPreview source={galleriesStore.aboutUs?.description} />
                </S.Desc>

                <S.LogoFor1280>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <img src="img/demo/about-conference.jpg" alt="Зал конференции" />
                  </a>
                </S.LogoFor1280>
              </S.Content1280px>

              <S.Content>
                <S.Logo>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <img src="img/Logo.svg" alt="" />
                  </a>
                </S.Logo>

                <S.LogoFor1280>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <img src="img/demo/about-conference.jpg" alt="Зал конференции" />
                  </a>
                </S.LogoFor1280>

                <S.Desc>
                  <MarkdownPreview source={galleriesStore.aboutUs?.description} />
                </S.Desc>
              </S.Content>

              <S.InformationWrapper>
                <S.Information>
                  <Button variant="contained" disableRipple onClick={handleClickOpenModalParticipate}>
                    Хочу выступить
                  </Button>

                  {galleriesStore.aboutUs?.forSpeakersTitle && galleriesStore.aboutUs?.forSpeakersLink && (
                    <S.InformationLink>
                      <Button variant="text" target="_blank" disableRipple href={galleriesStore.aboutUs?.forSpeakersLink}>
                        {galleriesStore.aboutUs?.forSpeakersTitle}
                      </Button>
                    </S.InformationLink>
                  )}
                </S.Information>
              </S.InformationWrapper>
            </S.About>
          </S.Container>
        </CommonS.ListWrapper>
      </>
    </Section>
  );
});
AboutUsSection.displayName = 'AboutUsSection';

export default observer(AboutUsSection);
