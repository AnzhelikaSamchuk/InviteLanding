import { observer } from 'mobx-react';
import { corporateStore, successDialogsStore } from 'stores';
import { DialogWrapper, SuccessForm } from 'components';
import { CorporateFormModes, SuccessDialogKeys } from 'shared/enums';
import CorporateRegistration from './components/CorporateRegistration';

const CorporateDialog = () => {
  const handleClose = () => {
    corporateStore.closeDialog();
  };

  return (
    <>
      <DialogWrapper open={corporateStore.isDialogOpen} onClose={handleClose}>
        {/* 
          Переключение на ввод реквизитов и выставление счёта временно отключено, так как счёт выставляется вручную. 
          Чтобы не вводить пользователя в заблуждения, когда он всё ввёл, а счёт не выставился. Сейчас Рита сама связывается с корп участинками 
          {corporateStore.corporateMode === CorporateFormModes.Registration ? <CorporateRegistration /> : <CorporateDetails />} 
        */}
        {corporateStore.corporateMode === CorporateFormModes.Registration ? (
          <CorporateRegistration />
        ) : (
          <SuccessForm
            closeDialogHandle={handleClose}
            successAttributes={successDialogsStore.successAttributes.find((s) => s.key === SuccessDialogKeys.Corporate)}
          />
        )}
      </DialogWrapper>
    </>
  );
};

export default observer(CorporateDialog);
