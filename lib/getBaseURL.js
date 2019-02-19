export default function getBaseURL(req) {
  /* eslint-disable no-nested-ternary */
  const protocol =
    req && req.headers.host.indexOf('jackfletch.com') > -1
      ? 'https'
      : req
        ? req.protocol
        : '';
  /* eslint-enable */
  const baseURL = req
    ? `${protocol}://${req.headers.host}`
    : window.location.origin;
  return baseURL;
}
