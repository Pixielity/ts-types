/**
 * Interface for progress bar
 *
 * Provides methods for displaying progress bars in the console.
 */
export interface IProgressBar {
  /**
   * Updates the progress bar
   *
   * @param {number} value - The current value
   * @param {Record<string, any>} payload - Additional payload data
   */
  update(value: number, payload?: Record<string, any>): void

  /**
   * Increments the progress bar
   *
   * @param {number} value - The value to increment by
   * @param {Record<string, any>} payload - Additional payload data
   */
  increment(value?: number, payload?: Record<string, any>): void

  /**
   * Stops the progress bar
   */
  stop(): void
}

/**
 * Namespace for IProgressBar interface
 *
 * Contains token for dependency injection
 */
export namespace IProgressBar {
  /**
   * Token for the IProgressBar interface
   * Used for dependency injection
   */
  export const $ = Symbol('IProgressBar')
}
