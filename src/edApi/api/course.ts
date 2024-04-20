import { EdClient } from '../EdClient';
import { ThreadWithUser } from '../types/thread';
import { EdThread } from './thread';

export class EdCourse {
  __client: EdClient;

  courseId: number;

  constructor (client: EdClient, courseId: number) {
    this.__client = client;
    this.courseId = courseId;
  }

  /**
   * List threads within the course.
   *
   * GET /courses/{courseId}/threads
   */
  async threads(options?: { limit?: number, offset?: number, sort?: string }) {
    return this.__client.__apiRequest(
      'GET',
      `/courses/${this.courseId}/threads`,
      {
        qs: options,
      }
    ) as Promise<{ threads: ThreadWithUser[] }>;
  }

  /**
   * Make a thread object to access details of a thread
   */
  thread(threadId: number) {
    return new EdThread(this.__client, this.courseId, threadId);
  }
}
