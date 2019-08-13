import Head from 'next/head';
import PropTypes from 'prop-types';
// import slug from 'speakingurl';
import {description} from '../package.json';
import {GA_TRACKING_ID} from '../constants/env';

function setGoogleTags() {
  return {
    __html: `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}');`,
  };
}

const Meta = ({staticPage, baseUrl}) => (
  <Head>
    <meta charSet="utf-8" />
    <html lang="en" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description} />
    <meta name="theme-color" content="#665500" />
    {/* {show && (
      <>
        <meta property="og:audio" content={show.url} />
        <meta property="og:audio:secure_url" content={show.url} />
        <meta property="og:audio:type" content="audio/mp3" />
        <meta property="og:type" content="music.song" />
        <meta
          property="og:title"
          content={`${show.title} — Syntax Podcast ${show.displayNumber}`}
        />
        <meta
          property="og:url"
          content={`${baseUrl}/show/${show.displayNumber}/${slug(
            show.title
          )}`}
        />
      </>
    )} */}
    <meta property="og:description" content={description} />
    <meta property="og:image" content={`${baseUrl}/static/img/jf.png`} />
    <link rel="shortcut icon" href={`${baseUrl}/static/favicon.ico`} />
    {/* <link rel="stylesheet" href={`${baseUrl}/static/css/bootstrap-reboot.css`} />
    <link rel="stylesheet" href={`${baseUrl}/static/css/bootstrap-grid.css`} /> */}
    <link rel="stylesheet" href={`${baseUrl}/static/css/bootstrap.css`} />
    <link rel="stylesheet" href={`${baseUrl}/static/css/main.css`} />
    <link rel="stylesheet" href={`${baseUrl}/static/css/highlight.css`} />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto"
      rel="stylesheet"
    />
    <title>{staticPage && staticPage.title && `${staticPage.title}`}</title>
    {/* <style
      dangerouslySetInnerHTML={{__html: stylesheet.replace(/\n/g, '')}}
    /> */}
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
  baseUrl: PropTypes.string.isRequired,
};

export default Meta;
