/**
 * Normalise a page path to the public URL form used on the site:
 * "/about-5.html" -> "/about-5", "/index.html" -> "/", "/team-3/" -> "/team-3".
 * (Pages are built as .html files but served without the extension.)
 */
export function cleanPath(pathname: string): string {
  const path = pathname
    .replace(/\.html$/, '')
    .replace(/(^|\/)index$/, '/')
    .replace(/\/+$/, '');
  return path || '/';
}
