import Head from 'next/head';
import PropTypes from 'prop-types';
import {withRouter} from 'next/router';
import config from '../config/website';
import {GA_TRACKING_ID} from '../config/env';
import {stripUrlParams} from '../lib';

function setGoogleTags() {
  return {
    __html: `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}');`,
  };
}

const Meta = ({
  description = config.description,
  image,
  router,
  schema,
  title = config.title,
  type = 'website',
}) => (
  <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="theme-color" content="#665500" />

    {/* open graph */}
    <meta property="og:title" content={title} />
    <meta property="og:site_name" content={config.title} />
    <meta property="og:type" content={type} />
    <meta
      property="og:url"
      content={`${config.url}${stripUrlParams(router.asPath)}`}
    />
    <meta property="og:description" content={description} />
    {image && <meta property="og:image" content={`${config.url}${image}`} />}

    {/* twitter */}
    <meta name="twitter:site" content={`@${config.author.contacts.twitter}`} />
    <meta
      name="twitter:creator"
      content={`@${config.author.contacts.twitter}`}
    />
    <meta name="twitter:card" content="summary_large_image" />

    {/* favicons */}
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="256x256" href="/img/icon-256x256.png" />

    {/* schema.org schema */}
    {schema && (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}
      />
    )}

    {/* RSS feed */}
    <link rel="alternate" type="application/rss+xml" href="/rss.xml" />

    {/* scripts */}
    {/* Global Site Tag (gtag.js) - Google Analytics */}
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
    />
    <script dangerouslySetInnerHTML={setGoogleTags()} />
  </Head>
);

Meta.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  schema: PropTypes.object,
  title: PropTypes.string,
  type: PropTypes.string,
};

export default withRouter(Meta);
