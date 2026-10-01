import { forwardRef, useEffect } from 'react';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { observer } from 'mobx-react';
import { tariffStore, participantsStore, conferenceStore, corporateStore } from 'stores';
import { Section, H2 } from 'components';
import { Button } from '@mui/material';

import { TARIFF_KEYS } from 'shared/constants';
import { TariffModel } from 'shared/models';
import * as S from './TariffSection.styles';

export interface IProps {
  title: string;
}

const TariffSection = forwardRef<HTMLDivElement, IProps>((props, ref) => {
  const freeModel = tariffStore.freeConferenceModel;

  useEffect(() => {
    tariffStore.getTariffs();
  }, []);

  const handleClickOpenParticipant = () => {
    participantsStore.openDialog();
  };

  const container = (item: TariffModel) => {
    const handleParticipantFormOpen = () => {
      if (item.key === TARIFF_KEYS.CORPORATE) corporateStore.openDialog();
      else {
        // проверяем, если выбран базовый тариф (онлайн - офлайн)
        if (item.key === TARIFF_KEYS.BASE) participantsStore.openDialog(undefined, item.types[0]);
        else participantsStore.openDialog([item], item.types[0]);
      }
    };

    return (
      <S.PriceContainer>
        <S.Information>
          <S.PriceIconWrapper>
            <S.PriceIcon>
              <img src={item.iconPath} alt=""></img>
            </S.PriceIcon>
          </S.PriceIconWrapper>

          <S.PriceTitle variant="h3">{item.title}</S.PriceTitle>

          <S.InfoFeature>
            <MarkdownPreview source={item.features} />
          </S.InfoFeature>
        </S.Information>

        <S.PriceInfoWrapper>
          <S.PriceAction>
            {item.types.length === 2 ? (
              /* Для случая, когда в карточке две цены online и оффлайн */
              <S.PriceWrapper2>
                {item.types.map((type, index) => {
                  return (
                    <S.PriceContent2 key={index}>
                      <S.PriceTitle2 variant="body1">{type.attributes.title}</S.PriceTitle2>
                      {type.attributes.price === 0 ? (
                        <S.Price2 variant="h4">FREE</S.Price2>
                      ) : (
                        <S.Price2 variant="h4">{item.types[1]?.attributes.price} &#8381;</S.Price2>
                      )}
                    </S.PriceContent2>
                  );
                })}
              </S.PriceWrapper2>
            ) : item.types[0]?.attributes.price === 0 ? (
              <S.Price variant="h3">FREE</S.Price>
            ) : (
              <S.Price variant="h3">{item.types[0]?.attributes.price} &#8381;</S.Price>
            )}

            {conferenceStore.conference.isRegistration && (
              <Button variant="contained" disableRipple onClick={handleParticipantFormOpen}>
                Участвовать
              </Button>
            )}
          </S.PriceAction>
        </S.PriceInfoWrapper>
      </S.PriceContainer>
    );
  };

  return (
    <Section ref={ref}>
      <>
        {!freeModel && <H2 text={props.title} />}

        {!!freeModel ? (
          <S.Wrapper key={freeModel.id} imgPath={freeModel.iconPath}>
            <S.Content>
              <S.Title variant="h2">{freeModel.title}</S.Title>
              <S.DescriptionContent>
                <S.Desc variant="body1">{freeModel.subTitle}</S.Desc>
                {conferenceStore.conference.isRegistration && (
                  <Button variant="contained" disableRipple onClick={handleClickOpenParticipant}>
                    Участвовать
                  </Button>
                )}
              </S.DescriptionContent>
            </S.Content>
          </S.Wrapper>
        ) : (
          <S.ElementsWrapper>
            {tariffStore.tariffs.map((item) => (
              <S.PriceElementWrapper key={item.id}>{item.types?.length > 0 ? container(item) : null}</S.PriceElementWrapper>
            ))}
          </S.ElementsWrapper>
        )}
      </>
    </Section>
  );
});
TariffSection.displayName = 'TariffSection';

export default observer(TariffSection);
