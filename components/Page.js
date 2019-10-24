import React from 'react';
import PropTypes from 'prop-types';

import Footer, {FOOTER_HEIGHT_DESKTOP, FOOTER_HEIGHT_MOBILE} from './Footer';
import Header, {HEADER_HEIGHT} from './Header';
import Main from './Main';

const Page = ({children, noHeader}) => {
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

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Page;
