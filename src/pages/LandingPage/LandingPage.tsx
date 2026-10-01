import { useEffect, useRef } from 'react';
import { observer } from 'mobx-react';
import {
  conferenceStore,
  landingStore,
  navigationsStore,
  successDialogsStore,
  lecturesStore,
  additionalInformationStore,
  galleriesStore,
} from 'stores';
import { MenuKeys } from 'shared/enums/commonEnums';
import {
  AboutUsSection,
  IntroSection,
  KeySpeakersSection,
  ProgramsSection,
  PerformancesSection,
  PartnersSection,
  TariffSection,
  GalleriesSection,
  ConferencesSection,
} from './components';

import * as S from './LandingPage.styles';

interface ILanding {
  key: string;
  content: (title: string) => JSX.Element;
}

const LandingPage = () => {
  const sectionProgramsRef = useRef<HTMLDivElement>(null);
  const sectionGalleriesRef = useRef<HTMLDivElement>(null);
  const sectionPartnersRef = useRef<HTMLDivElement>(null);
  const sectionEventsRef = useRef<HTMLDivElement>(null);
  const sectionTariffRef = useRef<HTMLDivElement>(null);

  const LandingItems: ILanding[] = [
    {
      key: 'Key_Speakers',
      content: (title: string) => <KeySpeakersSection key="Key_Speakers" title={title} />,
    },
    {
      key: 'Conferences',
      content: (title: string) => <ConferencesSection key="Conferences" title={title} />,
    },
    {
      key: 'Program',
      content: (title: string) => <ProgramsSection key="Program" title={title} ref={sectionProgramsRef} />,
    },
    {
      key: MenuKeys.Price,
      content: (title: string) => <TariffSection key="Price" title={title} ref={sectionTariffRef} />,
    },
    {
      key: 'About',
      content: (title: string) => <AboutUsSection key="About" title={title} ref={sectionGalleriesRef} />,
    },
    {
      key: 'Gallery',
      content: (title: string) => <GalleriesSection key="Gallery" title={title} />,
    },
    {
      key: 'Partners',
      content: (title: string) => <PartnersSection key="Partners" title={title} ref={sectionPartnersRef} />,
    },
    {
      key: 'Events',
      content: (title: string) => <PerformancesSection key="Events" title={title} ref={sectionEventsRef} />,
    },
  ];

  useEffect(() => {
    const init = async () => {
      await conferenceStore.getConference();
      navigationsStore.getNavigations();
      successDialogsStore.getAllSuccess();
      lecturesStore.getAllSpeakers();
      additionalInformationStore.getAdditionalInformation();
      galleriesStore.getGalleries();
    };
    init();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    scrollToSection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [landingStore.selectedSection]);

  const handleScroll = () => {
    landingStore.setSelectedSection(null);
  };

  const scrollToSection = () => {
    let currentElement = null;

    switch (landingStore.getCurrentSection()) {
      case MenuKeys.Program: {
        currentElement = sectionProgramsRef?.current;
        break;
      }
      case MenuKeys.About: {
        currentElement = sectionGalleriesRef?.current;
        break;
      }
      case MenuKeys.Partners: {
        currentElement = sectionPartnersRef?.current;
        break;
      }
      case MenuKeys.Events: {
        currentElement = sectionEventsRef?.current;
        break;
      }
      case MenuKeys.Price: {
        currentElement = sectionTariffRef?.current;
        break;
      }
      default: {
        break;
      }
    }

    if (!currentElement) return;

    const diff = window.innerWidth > 768 ? 140 : 70;
    window.scrollTo({
      top: currentElement.offsetTop - diff,
      behavior: 'smooth',
    });
  };

  return (
    <S.MainWrapper>
      {conferenceStore.conference.title && <IntroSection />}
      {navigationsStore.navigations.map((entry) =>
        LandingItems.map((item) => {
          if (entry.key !== item.key) return null;
          return item.content(entry.title);
        })
      )}
    </S.MainWrapper>
  );
};

export default observer(LandingPage);
