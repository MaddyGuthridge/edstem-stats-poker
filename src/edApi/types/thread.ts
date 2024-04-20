import { ThreadComment } from './comment';
import { ContentString } from './misc';
import { UserShort } from './user';

export type Thread = {
  id: number // global post number
  user_id: number // user who created the post
  course_id: number
  editor_id: number
  accepted_id: number | null
  duplicate_id: number | null
  number: number // post number relative to the course
  type: string
  title: string
  content: ContentString
  document: string // rendered version of content
  category: string
  subcategory: string
  subsubcategory: string
  flag_count: number
  star_count: number
  view_count: number
  unique_view_count: number
  vote_count: number
  reply_count: number
  unresolved_count: number
  is_locked: boolean
  is_pinned: boolean
  is_private: boolean
  is_endorsed: boolean
  is_answered: boolean
  is_student_answered: boolean
  is_staff_answered: boolean
  is_archived: boolean
  is_anonymous: boolean
  is_megathread: boolean
  anonymous_comments: boolean
  approved_status: string
  created_at: string
  updated_at: string
  deleted_at: string | null
  pinned_at: string | null
  anonymous_id: number
  vote: number
  is_seen: boolean
  is_starred: boolean
  is_watched: boolean
  glanced_at: string
  new_reply_count: number
  duplicate_title: string | null
}

export type ThreadWithUser = Thread & { user: UserShort };

export type ThreadWithComments = Thread & { answers: ThreadComment[], comments: ThreadComment[] };
