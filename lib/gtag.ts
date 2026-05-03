import {getCurrentFullUrl, getFullPath} from '../lib';
import {GA_TRACKING_ID} from '../config/env';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export const trackPageview = () => {
  const fullPath = getFullPath();
  const fullUrl = getCurrentFullUrl();
  pageview({
    url: fullUrl,
    path: fullPath,
    title: '',
  });
};

const pageview = ({url, path, title}: {url: string; path: string; title: string}) => {
  try {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
      page_path: path,
      page_title: title,
    });
  } catch (error) {}
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value: number;
}) => {
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
