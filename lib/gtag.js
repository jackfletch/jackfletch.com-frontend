import {getCurrentFullUrl, getFullPath} from '../lib';

import {GA_TRACKING_ID} from '../config/env';

export const trackPageview = () => {
  const fullPath = getFullPath();
  const fullUrl = getCurrentFullUrl();
  pageview({
    url: fullUrl,
    path: fullPath,
    title: '',
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = ({url, path, title}) => {
  try {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
      page_path: path,
      page_title: title,
    });
  } catch (error) {}
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({action, category, label, value}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

const gtag = {
  trackPageview,
  pageview,
  event,
};

export default gtag;
