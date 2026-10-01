import { observer } from 'mobx-react';
import { preSpeakerStore, successDialogsStore } from 'stores';
import { SuccessForm, DialogWrapper } from 'components';

import { PreSpeakerFormModes, SuccessDialogKeys } from 'shared/enums';
import RegistrationForm from './RegistrationForm';

const SpeakerDialog = () => {
  const handleClose = () => {
    preSpeakerStore.setIsDialogOpen(false);
  };

  return (
    <DialogWrapper open={preSpeakerStore.isDialogOpen} onClose={handleClose}>
      <>
        {preSpeakerStore.dialogMode === PreSpeakerFormModes.Registration && <RegistrationForm />}

        {preSpeakerStore.dialogMode === PreSpeakerFormModes.Success && (
          <SuccessForm
            closeDialogHandle={handleClose}
            successAttributes={successDialogsStore.successAttributes.find((s) => s.key === SuccessDialogKeys.Speaker)}
          />
        )}
      </>
    </DialogWrapper>
  );
};

export default observer(SpeakerDialog);
