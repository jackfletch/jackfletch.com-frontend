const getCurrentFullUrl = (req?: {protocol: string; get: (key: string) => string; url: string}) =>
  req ? `${req.protocol}://${req.get('host')}${req.url}` : window.location.href;

export default getCurrentFullUrl;
