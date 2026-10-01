import { TelegramIcon } from 'components';
import { Button } from '@mui/material';
import { ISuccessAttributeDto } from 'shared/interfaces';
import * as S from './styles';

interface ISuccessForm {
  successAttributes: ISuccessAttributeDto | undefined;
  closeDialogHandle: () => void;
  children?: JSX.Element;
}

const SuccessForm: React.FC<ISuccessForm> = (props) => {
  const { successAttributes, closeDialogHandle, children } = props;

  const handleOk = () => {
    closeDialogHandle();
  };

  return (
    <S.SuccessWrapper>
      <S.SuccessIconWrapper>
        <img src="img/SuccessIcon.svg" alt="" />
      </S.SuccessIconWrapper>

      <>
        <S.Title variant="h3">{successAttributes?.title ?? 'Операция выполнена успешно'}</S.Title>

        {!!successAttributes?.subtitle && <S.Subtitle variant="body1">{successAttributes?.subtitle}</S.Subtitle>}

        {!!successAttributes?.link && (
          <Button variant="text" startIcon={<TelegramIcon />} target="_blank" disableRipple href={successAttributes?.link}>
            {successAttributes?.channelName ?? 'Канал'}
          </Button>
        )}

        {successAttributes?.buttonText && (
          <S.Button_finish variant="contained" disableRipple onClick={handleOk}>
            {successAttributes.buttonText}
          </S.Button_finish>
        )}
      </>

      {children}
    </S.SuccessWrapper>
  );
};

export default SuccessForm;
