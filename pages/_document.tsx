import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

/**
 * A custom {@link Document} that collects styled-components styles during SSR.
 *
 * Without this, styled-components styles are only injected client-side,
 * causing a Flash of Unstyled Content (FOUC) on first load.
 *
 * Note: `compiler: { styledComponents: true }` in next.config.mjs is the SWC
 * build-time transform (display names, minification). It does not handle SSR
 * style extraction; that requires {@link ServerStyleSheet} at request time.
 *
 * @see https://styled-components.com/docs/advanced#server-side-rendering
 * @see https://nextjs.org/docs/pages/building-your-application/styling/css-in-js#styled-components
 */
export default class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
