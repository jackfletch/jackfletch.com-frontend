import {withRouter} from 'next/router';
import React from 'react';
import PropTypes from 'prop-types';
import {Hero, Meta, Page} from '../components';
import {getBaseUrl} from '../lib';

class IndexPage extends React.Component {
  static propTypes = {
    router: PropTypes.object.isRequired,
    baseUrl: PropTypes.string.isRequired,
  };

  static async getInitialProps({req}) {
    const baseUrl = getBaseUrl(req);
    return {baseUrl};
  }

  componentWillReceiveProps(nextProps) {
    const {query} = nextProps.router;
    if (query.number) {
      this.setState({currentShow: query.number});
    }
  }

  render() {
    const title = 'Fletcher Labs';
    const {baseUrl} = this.props;

    return (
      <>
        <Meta baseUrl={baseUrl} staticPage={{title}} />
        <Page baseUrl={baseUrl} noHeader>
          <Hero className="hero" />
        </Page>
      </>
    );
  }
}

export default withRouter(IndexPage);
