import { TimeString } from './misc';

/**
 * Abbreviated user type
 */
export type UserShort = {
  avatar: string
  course_role: string
  id: number
  name: string
  role: string
  tutorials: Record<number, string>
}

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
  settings: object

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
