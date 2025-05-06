/**
 * Options for the Queueable decorator.
 */
export interface IQueueableOptions {
  /**
   * The connection to use for the queue.
   */
  connection?: string

  /**
   * The queue to use.
   */
  queue?: string

  /**
   * The delay in seconds before processing.
   */
  delay?: number

  /**
   * The middleware to pass the job through.
   */
  middleware?: string[]

  /**
   * Whether the job should be encrypted.
   */
  encrypted?: boolean
}
