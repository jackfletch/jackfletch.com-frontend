import Head from 'next/head';
import PropTypes from 'prop-types';
import {description} from '../package.json';
import {GA_TRACKING_ID} from '../config/env';

function setGoogleTags() {
  return {
    __html: `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}');`,
  };
}

const Meta = ({staticPage}) => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description} />
    <meta name="theme-color" content="#665500" />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="/static/img/jf.png" />
    <link rel="shortcut icon" href="/static/favicon.ico" />
    <link
      rel="apple-touch-icon"
      sizes="256x256"
      href="/static/img/icon-256x256.png"
    />
    <script defer src="/static/js/highlight.js" />
    <title>{staticPage && staticPage.title && `${staticPage.title}`}</title>
    <link rel="alternate" type="application/rss+xml" href="/static/rss.xml" />
    {/* Global Site Tag (gtag.js) - Google Analytics */}
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
    />
    <script dangerouslySetInnerHTML={setGoogleTags()} />
  </Head>
);

Meta.propTypes = {
  staticPage: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
};

export default Meta;
