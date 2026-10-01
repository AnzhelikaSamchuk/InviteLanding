import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { partnersStore } from 'stores';
import { Section, H2 } from 'components';

import * as S from './PartnersSection.styles';

export interface IProps {
  title: string;
}

const PartnersSection = React.forwardRef<HTMLDivElement, IProps>((props, ref) => {
  useEffect(() => {
    partnersStore.getPartners();
  }, []);

  return (
    <Section ref={ref}>
      <>
        <H2 text={props.title} />

        <S.Block>
          {partnersStore.partners.map((item) => (
            <S.PerformanceElement key={item.id}>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.iconPath} alt=""></img>
                </a>
              ) : (
                <img src={item.iconPath} alt=""></img>
              )}
            </S.PerformanceElement>
          ))}
        </S.Block>
      </>
    </Section>
  );
});
PartnersSection.displayName = 'PartnersSection';

export default observer(PartnersSection);
