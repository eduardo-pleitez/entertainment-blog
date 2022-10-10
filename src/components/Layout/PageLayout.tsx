import React from 'react';
import Footer from './Footer';
import Header from './Header';

type Props = {
  children: JSX.Element;
};
export default function PageLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
