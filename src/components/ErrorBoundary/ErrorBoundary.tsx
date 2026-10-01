import { Component, ErrorInfo, ReactNode } from 'react';
import { toastStore } from 'stores';
import * as S from './styles';
interface IProps {
  children?: ReactNode;
}

interface IState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<IProps, IState> {
  public state: IState = {
    hasError: false,
    error: undefined,
  };

  static getDerivedStateFromError(error: Error) {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return { hasError: true, error: error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
    console.error('Uncaught error:', error, errorInfo);
    toastStore.showError(error.message);
  }

  render() {
    if (this.state.hasError) {
      // Можно отрендерить запасной UI произвольного вида
      return (
        <S.Wrapper>
          <S.div_textWrapper>
            <S.Typography_header>Что-то пошло не так.</S.Typography_header>
            <S.Typography_text>
              Приносим свои изменения. В ближайшее время мы устраним проблему и приведём систему в рабочее состояние.
            </S.Typography_text>
            <S.Typography_text>Вы также можете обратиться в поддержку по адресу hello@example.com.</S.Typography_text>
          </S.div_textWrapper>

          <S.img_robot src="img/robot.svg" alt="" />
        </S.Wrapper>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
