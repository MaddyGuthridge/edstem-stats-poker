/** Constants used for running EdStem Stats Poker backend */

/** EdStem Stats Poker backend version */
export const VERSION = '0.0.1';

/**
 * User agent string, used to identify us when we send requests
 *
 * We want to be polite users of the EdStem API, so we need to identify
 * ourselves properly -- that way the Ed team can send me an angry email if it
 * turns out that this thing sends way too many requests.
 */
export const USER_AGENT = `EdStem-Stats-Poker/${VERSION} (https://github.com/MiguelGuthridge/edstem-stats-poker)`;

export default {
  VERSION,
  USER_AGENT,
};
