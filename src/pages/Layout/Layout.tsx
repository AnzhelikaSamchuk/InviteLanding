import React from 'react';
import { Menu, Footer } from 'components';
import * as S from './Layout.styles';

interface ILayoutProps {
  children: JSX.Element;
}

const Layout: React.FC<ILayoutProps> = (props) => {
  const { children } = props;

  return (
    <S.LayoutWrapper>
      <Menu />
      <S.LayoutContent>{children}</S.LayoutContent>
      <Footer />
    </S.LayoutWrapper>
  );
};

export default Layout;
