import React, { useEffect } from 'react';

import { observer } from 'mobx-react';
import { landingStore } from 'stores';
import { Section, H2 } from 'components';
import * as CommonS from 'shared/CommonStyles.styles';

import * as S from './OrganizersSection.styles';

const OrganizersSection = () => {
  useEffect(() => {
    landingStore.getOrganizers();
  }, []);

  return (
    <Section>
      <>
        <H2 text="Организаторы" />

        <S.Block>
          <CommonS.ListWrapper isWrap={true}>
            <CommonS.ListBlock justify={'center'}>
              {landingStore.organizers.map((item) => (
                <S.OrganizersLiElements key={item.id}>
                  <S.OrganizersElement>
                    <a href={item.link}>
                      <img src={item.iconSrc} alt="" />
                    </a>
                  </S.OrganizersElement>
                </S.OrganizersLiElements>
              ))}
            </CommonS.ListBlock>
          </CommonS.ListWrapper>
        </S.Block>
      </>
    </Section>
  );
};

export default observer(OrganizersSection);
