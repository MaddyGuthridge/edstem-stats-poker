import { EdClient } from '../EdClient';
import { TimeString } from '../types/misc';
import { UserInfo } from '../types/user';

export type CourseInformation = {
  id: number
  realm_id: number
  code: string
  name: string
  year: string
  session: string
  status: 'active' | 'archived'
  features: object
  settings: object
  created_at: TimeString
  is_lab_regex_active: boolean
};

/**
 * A realm represents a university or other institution that uses EdStem to
 * host their course forums.
 */
export type RealmInfo = {
  /** Realm ID number */
  id: number

  /** Name of realm */
  name: string

  /** Type of realm */
  type: string

  /** Home domain of realm (eg for UNSW it is unsw.edu.au) */
  domain: string

  /** ??? (it is an empty string for me) */
  associated_domains: string

  /** ??? (it is empty for me) */
  features: object

  /** TODO */
  settings: object
}

export type CourseRoleInfo = {
  user_id: number
  course_id: number
  lab_id: number | null
  role: string
  /** Unsure what it is for */
  tutorial: any | null
  digest: boolean
  settings: {
    /** Interval in minutes */
    digest_interval: number | null
    email_announcements: boolean | null
  }
  created_at: TimeString
  deleted_at: TimeString | null
}

/**
 * User information returned by the `/user` route
 */
export type DashboardInfo = {
  courses: {
    course: CourseInformation
    role: object
    /** Not used by UNSW? */
    lab: any
    /** Time last active in the course */
    last_active: TimeString
  }[]
  realms: RealmInfo[]
  user: UserInfo
}

/**
 * Request user info, as shown on the dashboard.
 *
 * GET /user
 */
export async function fetchDashboardInfo(client: EdClient) {
  return client.__apiRequest(
    'GET',
    '/user',
  ) as Promise<DashboardInfo>;
}
