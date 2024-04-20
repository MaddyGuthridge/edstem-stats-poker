import { EdClient } from '../EdClient';
import { TimeString } from '../types';
import { CourseInformation } from './course';
import { RealmInfo } from './realm';

/**
 * Full user type
 */
export type UserInfo = {
  /** User ID */
  id: number

  role: string

  /** Email address */
  email: string

  username: string | null

  avatar: string | null

  /** Unsure */
  features: any

  /** TODO */
  settings: any

  activated: boolean

  created_at: TimeString

  course_role: string | null

  secondary_emails: string[]

  has_password: boolean

  is_lti: boolean

  /** This user uses SSO to sign in */
  is_sso: boolean

  /** User has permission to change their display name */
  can_change_name: boolean

  /**
   * Whether the user is a catgirl???
   */
  has_pats: boolean

  realm_id: number | null
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
export type UserMainInfo = {
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

/** Request user info */
export async function fetchUserInfo(client: EdClient) {
  return client._apiRequest(
    'GET',
    '/user',
  ) as Promise<UserMainInfo>;
}
