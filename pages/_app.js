// see https://github.com/zeit/next.js/#custom-app
// using the App's one-time load to apply Router event listener.
// for some reason this can't go in _document.js.
import App from 'next/app';
import Router from 'next/router';

import {gtag} from '../lib';
import '../static/css/bootstrap.css';
import '../static/css/main.css';
import '../static/css/screen.css';
import '../static/css/highlight.css';

Router.events.on('routeChangeComplete', url => gtag.trackPageview(url));

export default App;
