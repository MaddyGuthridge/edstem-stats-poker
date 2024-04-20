import { TimeString } from '../types';

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
