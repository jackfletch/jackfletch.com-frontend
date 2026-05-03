export default function getBaseUrl(req) {
  const onSite =
    req &&
    (req.headers.host.indexOf('jackfletch.com') > -1 ||
      req.headers.host.indexOf('jackfletch.dev') > -1);
  const localhost = req && req.headers.host.indexOf('localhost') > -1;
  let protocol = '';
  if (localhost) {
    protocol = 'http';
  } else if (onSite) {
    protocol = 'https';
  } else if (req) {
    protocol = req.protocol;
  }
  const baseUrl = req ? `${protocol}://${req.headers.host}` : '';
  return baseUrl;
}
