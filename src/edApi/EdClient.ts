import consts from '../consts';
import ApiError from './ApiError';
import { fetchUserInfo } from './api/user';
import { HttpVerb, TRegion } from './types';

/** URLs used when accessing EdStem */
type EdUrls = {
  apiUrl: string
  staticUrl: string
  tokenSettingsUrl: string
}

/**
 * Mapping from region code to API base URL.
 *
 * TODO: Add more regions if I feel like it.
 */
const regionUrl: Record<TRegion, EdUrls> = {
  /** Australia */
  au: {
    apiUrl: 'https://edstem.org/api',
    staticUrl: 'https://static.au.edusercontent.com',
    tokenSettingsUrl: 'https://edstem.org/au/settings/api-tokens',
  },
  /** United States of America */
  us: {
    apiUrl: 'https://us.edstem.org/api',
    staticUrl: 'https://static.us.edusercontent.com',
    tokenSettingsUrl: 'https://edstem.org/us/settings/api-tokens',
  },
};

/**
 * EdStem client
 */
export class EdClient {
  /**
   * Region within which we want to perform requests.
   */
  region: TRegion;

  /**
   * API key, used to perform requests.
   *
   * This is used as the 'Authorization' property in request headers.
   */
  apiKey: string;

  constructor (region: TRegion, apiKey: string) {
    this.apiKey = apiKey;
    this.region = region;
  }

  /**
   * Fetch user info
   */
  async userInfo() {
    return fetchUserInfo(this);
  }

  /**
   * Request to the EdStem API
   *
   * This is a simple wrapper around the `fetch` API.
   *
   * ## Usage
   *
   * ```ts
   * await request(
   *   'GET',
   *   // Make sure to use a leading /
   *   '/user',
   *   // Query string and body are optional
   *   { qs: { foo: 'bar' } },
   * )
   * ```
   */
  async _apiRequest(
    method: HttpVerb,
    path: string,
    options?: {qs?: Record<string, string>, body?: object},
  ) {
    const opts = options || {};

    // JSON string for request body
    const body = opts.body ? JSON.stringify(opts.body) : undefined;
    // Query string
    const qs = opts.qs ? new URLSearchParams(opts.qs).toString() : '';

    const headers = new Headers({
      Authorization: `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json',
      'User-Agent': consts.USER_AGENT,
    });

    const url = `${regionUrl[this.region].apiUrl}${path}?${qs}`;

    // Now send the request
    let res: Response;
    try {
      res = await fetch(url, {
        method,
        body,
        headers,
      });
    } catch (err) {
      // Likely a network issue
      if (err instanceof Error) {
        throw new ApiError(null, err.message);
      } else {
        throw new ApiError(null, `Unknown request error ${err}`);
      }
    }

    // Decode the error
    let json: object;
    try {
      json = await res.json();
    } catch (err) {
      // JSON parse error
      if (err instanceof Error) {
        throw new ApiError(null, err.message);
      } else {
        throw new ApiError(null, `Unknown JSON error ${err}`);
      }
    }

    // Error status codes
    if (res.status >= 400) {
      throw new ApiError(res.status, json);
    }

    // Got valid data
    return Object.assign({}, json);
  }
}

/**
 * Create a new EdClient object in order to communicate with EdStem.
 */
export function edClient(region: TRegion, apiKey: string): EdClient {
  return new EdClient(region, apiKey);
}
