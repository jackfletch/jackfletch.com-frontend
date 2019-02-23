import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const PageLayout = styled.div`
  font-size: 1.25rem;
  scroll-behavior: smooth;
`;

const Page = ({baseURL, children}) => (
  <PageLayout className="page">
    <Header baseURL={baseURL} />
    {children}
    <Footer />
    <script
      src={`${baseURL}/static/js/jquery-3.3.1.js`}
      type="text/javascript"
    />
    <script src={`${baseURL}/static/js/bootstrap.js`} type="text/javascript" />
  </PageLayout>
);

Page.propTypes = {
  baseURL: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Page;
