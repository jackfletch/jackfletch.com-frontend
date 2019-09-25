/**
 * Removes all URL parameters, including `?`, `#`, and `&`, from a URL.
 *
 * @param {string} url - A string param representing a URL.
 * @return {string} The input URL without any of its appended URL parameters.
 *
 * @example
 *
 *     stripUrlParams('https://jackfletch.com/blog/hello-world#fn-test')
 *
 */
export default function stripUrlParams(url) {
  return url.split(/[?&#]/)[0];
}
