import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const PageLayout = styled.div`
  font-size: 1.25rem;
  scroll-behavior: smooth;
`;

export default class Page extends React.Component {
  static propTypes = {
    baseURL: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };

  render() {
    return (
      <PageLayout className="page">
        <Header baseURL={this.props.baseURL} />
        {this.props.children}
        <Footer />
        <script src={`${this.props.baseURL}/static/js/jquery-3.3.1.js`} type="text/javascript" />
        <script src={`${this.props.baseURL}/static/js/bootstrap.js`} type="text/javascript" />
      </PageLayout>
    );
  }
}
