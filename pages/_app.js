// see https://github.com/zeit/next.js/#custom-app
// using the App's one-time load to apply Router event listener.
// for some reason this can't go in _document.js.
import App from 'next/app';
import Router from 'next/router';
import {createGlobalStyle, ThemeProvider} from 'styled-components';
import {normalize} from 'styled-normalize';

import theme from '../data/theme';
import {gtag} from '../lib';
import '../static/css/main.css';
import '../static/css/screen.css';
import '../static/css/highlight.css';

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
