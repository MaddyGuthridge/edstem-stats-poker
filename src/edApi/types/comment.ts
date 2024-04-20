import { ContentString } from './misc';

/**
 * A comment or answer on a thread
 */
export type ThreadComment = {
  id: number
  user_id: number
  course_id: number
  thread_id: number
  parent_id: number | null
  editor_id: number | null
  number: number
  type: string // only seen comment
  kind: string // only seen normal
  content: ContentString
  /** Rendered version of content */
  document: string
  flag_count: number
  vote_count: number
  is_endorsed: boolean
  is_anonymous: boolean
  /** Only visible to staff members */
  is_private: boolean
  is_resolved: boolean
  created_at: string
  updated_at: string | null
  deleted_at: string | null
  anonymous_id: number
  vote: number
  /** Recursive replies to this thread */
  comments: ThreadComment[]
}
