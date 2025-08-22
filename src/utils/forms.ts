import { getRelativeLocaleUrl } from "astro:i18n";
import { getSafeCurrentLocale } from "./i18n";

export const CONTACT_FORM_URL = "https://submit-form.com/BLVOfRwps";
export const SUBSCRIBE_FORM_URL = "https://submit-form.com/lhAxTrYll";

export function getRedirectUrl(opts: {
  path: string;
  url: URL;
  site?: URL;
  currentLocale?: string;
}) {
  const { url, site, currentLocale, path } = opts;

  const formRedirectBaseURL = import.meta.env.DEV
    ? url.origin // localhost
    : site?.toString();

  const safeCurrentLocale = getSafeCurrentLocale(currentLocale);

  return new URL(
    getRelativeLocaleUrl(safeCurrentLocale, path),
    formRedirectBaseURL,
  ).toString();
}
