// see https://github.com/zeit/next.js/#custom-app
// using the App's one-time load to apply Router event listener.
// for some reason this can't go in _document.js.
import App from 'next/app';
import Router from 'next/router';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {normalize} from 'styled-normalize';

import theme from '../data/theme';
import {gtag} from '../lib';
import '../public/css/main.css';
import '../public/css/highlight.css';

Router.events.on('routeChangeComplete', url => gtag.trackPageview(url));

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-family: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.text.header};
    font-weight: 500;
    margin: 1.618em 0 0.7em 0;
  }
  h1 {
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: -0.05em;
    line-height: 1.1;
    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
      font-size: 5rem;
    }
  }
  h2 {
    font-size: 1.5rem;
    letter-spacing: -0.019em;
    font-weight: 700;
    line-height: 1.35;
    margin-left: -0.5px;
  }
  h3 {
    font-size: 1.375rem;
    letter-spacing: -0.011em;
    font-weight: 700;
    line-height: 1.35;
  }
  h4 {
    font-size: 1.25rem;
    letter-spacing: -0.014em;
    line-height: 1.35;
  }
  h5, h6 {
    font-size: 1rem;
    letter-spacing: -0.014em;
    margin: 1em 0 -0.2em 0;
  }

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text.prose};
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: rgba(3, 102, 214, 1);
  }

  a:hover {
    text-decoration: underline rgba(3, 102, 214, 0.6);
  }

  a[href^='#']:hover {
    text-decoration-style: dashed;
  }

  p,
  ul,
  ol,
  li ol,
  pre,
  blockquote,
  hr,
  object {
    margin: 1rem 0;
  }

  pre,
  code,
  kbd,
  samp,
  tt {
    font-family: SFMono-Regular, Menlo, Monaco, monospace;
  }

  pre {
    line-height: 1.4;
    overflow-x: auto;
    color: ${props => props.theme.colors.blacks[1]};
    padding: 1rem;

    @media screen and (max-width: ${props => props.theme.breakpoints[0]}) {
      margin: 0 -1rem;
      border-radius: 0;
    }
  }

  code {
    padding: 3px 6px;
    font-size: 0.875em;
  }

  pre,
  code {
    background-color: rgba(0, 0, 0, 0.04);
    border-radius: 3px;
  }

  pre > code {
    color: inherit;
    word-break: normal;
    border-radius: 0;
    background-color: transparent;
    padding: 0;
  }

  img {
    border: none;
    vertical-align: middle;
  }

  hr {
    background-color: ${props => props.theme.colors.grays[1]};
    border: none;
    height: 1px;
  }

  div.post ul > li {
    margin-left: 1.4em;
  }

  div.post li {
    margin-left: 2em;
    margin-bottom: 0.2em;
  }
`;

class CustomApp extends App {
  render() {
    const {Component, pageProps} = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default CustomApp;
