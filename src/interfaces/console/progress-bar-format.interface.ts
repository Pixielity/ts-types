/**
 * Interface for progress bar format options
 *
 * Defines the formatting options for progress bars.
 */
export interface IProgressBarFormat {
  /**
   * The format string
   */
  format?: string

  /**
   * The bar completion character
   */
  barCompleteChar?: string

  /**
   * The bar incomplete character
   */
  barIncompleteChar?: string
}
