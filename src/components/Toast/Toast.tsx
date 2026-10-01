import { observer } from 'mobx-react';
import { toastStore } from 'stores';
import { Alert, Snackbar } from '@mui/material';

const Toast = () => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={toastStore.isOpen}
      autoHideDuration={toastStore.duration}
      onClose={toastStore.onClose}>
      <Alert variant="filled" onClose={toastStore.onClose} severity={toastStore.messageType}>
        {toastStore.message}
      </Alert>
    </Snackbar>
  );
};

export default observer(Toast);
