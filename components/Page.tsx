import React from 'react';

import Footer, {FOOTER_HEIGHT_DESKTOP, FOOTER_HEIGHT_MOBILE} from './Footer';
import Header, {HEADER_HEIGHT} from './Header';
import Main from './Main';

interface PageProps {
  children: React.ReactNode;
  noHeader?: boolean;
}

const Page = ({children, noHeader}: PageProps) => {
  const headerHeight = noHeader ? 0 : HEADER_HEIGHT;

  return (
    <>
      {noHeader ? null : <Header />}
      <Main
        desktopHeightOffset={headerHeight + FOOTER_HEIGHT_DESKTOP}
        mobileHeightOffset={headerHeight + FOOTER_HEIGHT_MOBILE}
      >
        {children}
      </Main>
      <Footer />
    </>
  );
};

export default Page;
