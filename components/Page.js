import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const PageLayout = styled.div`
  scroll-behavior: smooth;
`;

const Page = ({baseUrl, children, noHeader}) => (
  <PageLayout className="page">
    {noHeader ? null : <Header baseUrl={baseUrl} />}
    {children}
    <Footer />
    <script
      src={`${baseUrl}/static/js/jquery-3.3.1.js`}
      type="text/javascript"
    />
    <script src={`${baseUrl}/static/js/bootstrap.js`} type="text/javascript" />
    <script async src={`${baseUrl}/static/js/highlight.js`} />
  </PageLayout>
);

Page.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Page;
