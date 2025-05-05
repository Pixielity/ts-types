import type { IShouldQueue } from "./should-queue.interface"

/**
 * Interface for queueable jobs.
 * Queueable items can be processed asynchronously through a queue.
 */
export interface IQueueable extends IShouldQueue {
  /**
   * Get the middleware the job should pass through.
   *
   * @returns {string[]} Array of middleware names
   */
  middleware?(): string[]

  /**
   * Determine if the job should be encrypted.
   *
   * @returns {boolean} Whether the job should be encrypted
   */
  shouldBeEncrypted?(): boolean

  /**
   * Handle the job.
   * This method is called when the job is processed from the queue.
   *
   * @param {any} data - The job data
   * @returns {Promise<void> | void} - May return a promise for async handling
   */
  handle(data: any): Promise<void> | void

  /**
   * Handle a job failure.
   *
   * @param {Error} error - The error that caused the failure
   * @returns {Promise<void> | void} - May return a promise for async handling
   */
  failed?(error: Error): Promise<void> | void

  /**
   * The number of times the job may be attempted.
   *
   * @returns {number} The number of attempts
   */
  tries?(): number

  /**
   * The number of seconds to wait before retrying a job that has failed.
   *
   * @returns {number} The number of seconds to wait
   */
  backoff?(): number

  /**
   * The maximum number of unhandled exceptions to allow before failing.
   *
   * @returns {number} The number of exceptions allowed
   */
  maxExceptions?(): number

  /**
   * Determine if the job should be released back onto the queue.
   *
   * @param {Error} error - The error that caused the release
   * @returns {boolean} True if the job should be released
   */
  shouldRelease?(error: Error): boolean

  /**
   * Calculate the number of seconds to wait before retrying the job.
   *
   * @param {number} attempt - The number of attempts that have been made
   * @returns {number} The number of seconds to wait
   */
  retryAfter?(attempt: number): number

  /**
   * Get the timeout for the job.
   *
   * @returns {number} The timeout in seconds
   */
  timeout?(): number
}

/**
 * DI token for IQueueable interface
 */
export namespace IQueueable {
  export const $ = Symbol.for("IQueueable")
}
