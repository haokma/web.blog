import Footer from '../commons/Footer/footer';
import Header from '../commons/Header/header';
import React from 'react';
type PROPS = {
  children: React.ReactNode;
};

export const Layout = (props: PROPS) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
