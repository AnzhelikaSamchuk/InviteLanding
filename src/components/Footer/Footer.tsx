import { useEffect } from 'react';
import Divider from '@mui/material/Divider';
import { observer } from 'mobx-react';
import { footersStore } from 'stores';
import { ARCHIVE } from 'shared/constants/common';

import * as S from './Footer.styles';

const Footer = () => {
  useEffect(() => {
    footersStore.getFooters();
  }, []);

  const getYear = new Date().getFullYear();

  const lastYears = [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2021];

  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <S.IconContent>
          <S.FooterIcon>
            <a href="/" rel="noopener noreferrer">
              <img src="img/logo-footer.svg" alt="" />
            </a>
          </S.FooterIcon>

          <S.MediaContent>
            <S.MediaText>Follow our news</S.MediaText>

            <S.Media>
              {footersStore.footers.map(
                (item) =>
                  item.isVisible && (
                    <S.MediaIcon key={item.id}>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <img src={item.iconPath} alt="" />
                      </a>
                    </S.MediaIcon>
                  )
              )}
            </S.Media>
          </S.MediaContent>
        </S.IconContent>

        <S.Archive>
          {lastYears.map((item) => (
            <S.ArchiveText variant="body1" key={item}>
              <a href={`${ARCHIVE.ARCHIVEPERFORMANCES}${item}`} target="_blank" rel="noopener noreferrer">
                {item}
              </a>
            </S.ArchiveText>
          ))}
        </S.Archive>

        <Divider
          sx={{ bgcolor: (theme) => theme.palette.grey[100] }}
          style={{
            margin: 0,
          }}
          variant="middle"
        />

        <S.TextContent>
          <S.Normative>
            <S.Date>© Summit, {getYear}</S.Date>

            <S.FooterInfoInNormative>
              <S.Contact>
                <S.Link>
                  <a href="mailto:hello@example.com">hello@example.com</a>
                </S.Link>

                <S.Phone>
                  <a href="tel:+70000000000">+7 (000) 000-00-00</a>
                </S.Phone>
              </S.Contact>

              <S.Information>This site is subject to Google&rsquo;s Privacy Policy, Terms of Service and reCAPTCHA Protection</S.Information>
            </S.FooterInfoInNormative>

            <a href="/docs/demo.html" target="_blank" rel="noopener noreferrer">
              Договор оферты
            </a>
            <br />
            <a href="/docs/demo.html" target="_blank" rel="noopener noreferrer">
              Политика конфиденциальности
            </a>
            <br />
            <a href="/docs/demo.html" target="_blank" rel="noopener noreferrer">
              Согласие на обработку персональных данных
            </a>
          </S.Normative>

          <S.FooterInfo>
            <S.Contact>
              <S.Link>
                <a href="mailto:hello@example.com">hello@example.com</a>
              </S.Link>

              <S.Phone>
                <a href="tel:+70000000000">+7 (000) 000-00-00</a>
              </S.Phone>
            </S.Contact>

            <S.Information>This site is subject to Google&rsquo;s Privacy Policy, Terms of Service and reCAPTCHA Protection</S.Information>
          </S.FooterInfo>
        </S.TextContent>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
};

export default observer(Footer);
