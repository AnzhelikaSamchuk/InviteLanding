import { observer } from 'mobx-react';
import { conferenceStore } from 'stores';
import { Section, ProgramConference } from 'components';

const ConferencesSection = (props: { title: string }) => {
  return (
    <Section>
      <>
        <ProgramConference
          title={props.title}
          subtitle={conferenceStore.aboutConference?.subTitle}
          description={conferenceStore.aboutConference?.description}
        />
      </>
    </Section>
  );
};

export default observer(ConferencesSection);
