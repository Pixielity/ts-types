/**
 * Interface for objects that can be queued.
 * Implementing this interface indicates that the object should be processed asynchronously.
 */
export interface IShouldQueue {
  /**
   * Determine if the object should be queued.
   *
   * @returns {boolean} True if the object should be queued
   */
  shouldQueue(): boolean

  /**
   * Get the connection the job should be sent to.
   *
   * @returns {string|null} The connection name or null for the default
   */
  connection?(): string | null

  /**
   * Get the queue the job should be sent to.
   *
   * @returns {string|null} The queue name or null for the default
   */
  queue?(): string | null

  /**
   * Get the delay (in seconds) before the job should be processed.
   *
   * @returns {number} The number of seconds to delay
   */
  delay?(): number
}

/**
 * DI token for IShouldQueue interface
 */
export namespace IShouldQueue {
  export const $ = Symbol.for('IShouldQueue')
}
