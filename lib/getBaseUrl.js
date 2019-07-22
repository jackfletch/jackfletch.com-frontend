export default function getBaseUrl(req) {
  const onSite =
    req &&
    (req.headers.host.indexOf('jackfletch.com') > -1 ||
      req.headers.host.indexOf('jackfletch.dev') > -1);
  const protocol = onSite ? 'https' : req ? req.protocol : '';
  const baseUrl = req
    ? `${protocol}://${req.headers.host}`
    : window.location.origin;
  return baseUrl;
}
