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
