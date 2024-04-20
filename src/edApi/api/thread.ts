import { EdClient } from '../EdClient';
import { ThreadWithUser } from '../types/thread';

export class EdThread {
  __client: EdClient;

  courseId: number;

  threadId: number;

  constructor (client: EdClient, courseId: number, threadId: number) {
    this.__client = client;
    this.courseId = courseId;
    this.threadId = threadId;
  }

  /**
   * View this thread.
   *
   * GET /courses/{courseId}/threads/{threadId}
   */
  async view(options?: { limit?: number, offset?: number, sort?: string }) {
    return this.__client.__apiRequest(
      'GET',
      `/courses/${this.courseId}/threads/${this.threadId}`,
      {
        qs: options,
      }
    ) as Promise<{ thread: ThreadWithUser }>;
  }
}
