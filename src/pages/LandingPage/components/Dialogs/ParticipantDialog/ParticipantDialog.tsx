import { observer } from 'mobx-react';

import { participantsStore, successDialogsStore } from 'stores';
import { DialogWrapper, SuccessForm } from 'components';

import { ParticipantsFormModes, SuccessDialogKeys } from 'shared/enums';

import RegistrationForm from './components/RegistrationForm/RegistrationForm';

const ParticipantDialog = () => {
  const handleClose = () => {
    participantsStore.closeDialog();
  };

  const success_key = participantsStore.isRubiusSuccess ? SuccessDialogKeys.Rubius_Employee : SuccessDialogKeys.Participant;

  return (
    <DialogWrapper open={participantsStore.isDialogOpen} onClose={handleClose}>
      <>
        {participantsStore.dialogMode === ParticipantsFormModes.Registration && <RegistrationForm />}

        {participantsStore.dialogMode === ParticipantsFormModes.Success && (
          <SuccessForm closeDialogHandle={handleClose} successAttributes={successDialogsStore.successAttributes.find((s) => s.key === success_key)} />
        )}
      </>
    </DialogWrapper>
  );
};

export default observer(ParticipantDialog);
