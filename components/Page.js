import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const PageLayout = styled.div`
  scroll-behavior: smooth;
`;

const Page = ({children, noHeader}) => (
  <PageLayout className="page">
    {noHeader ? null : <Header />}
    {children}
    <Footer />
  </PageLayout>
);

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Page;
