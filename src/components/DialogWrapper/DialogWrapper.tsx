import React from 'react';
import CloseMobileIcon from 'components/CloseMobileIcon/CloseMobileIcon';
import { IconButton } from '@mui/material';
import * as S from './DialogWrapper.styles';

interface IDialogWrapperProps {
  open: boolean;
  children: JSX.Element;
  onClose?: () => void;
}

const DialogWrapper: React.FC<IDialogWrapperProps> = (props) => {
  const { open, children, onClose } = props;

  return (
    <>
      <S.CustomDialog open={open} onClose={onClose} scroll="body">
        <S.DialogCloseIconWrapper>
          <IconButton disableRipple onClick={onClose}>
            <S.Close>
              <img src="img/CloseDialog.svg" alt="" />
            </S.Close>

            <S.CloseMobile>
              <CloseMobileIcon color="white" />
            </S.CloseMobile>
          </IconButton>
        </S.DialogCloseIconWrapper>
        {children}
      </S.CustomDialog>
    </>
  );
};

export default DialogWrapper;
