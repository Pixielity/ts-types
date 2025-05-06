/**
 * Serialized job structure
 */
export interface SerializedJob {
  /**
   * The name of the job class
   */
  className: string

  /**
   * The serialized properties of the job
   */
  properties: Record<string, any>
}
