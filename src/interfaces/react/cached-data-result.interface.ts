/**
 * Result of the useCachedData hook
 * Provides access to data that is cached with automatic fetching
 */
export interface ICachedDataResult<T> {
  /**
   * The cached data
   * Null if not loaded yet or if an error occurred
   */
  data: T | null

  /**
   * Whether the data is currently loading
   */
  loading: boolean

  /**
   * Any error that occurred during loading
   */
  error: Error | null

  /**
   * Function to refresh the data
   * Fetches fresh data from the source and updates the cache
   *
   * @returns A promise that resolves when the refresh is complete
   */
  refresh: () => Promise<void>

  /**
   * Function to invalidate the cache
   * Marks the current data as invalid, triggering a refresh on next access
   *
   * @returns A promise that resolves when the invalidation is complete
   */
  invalidate: () => Promise<void>

  /**
   * The timestamp when the data was last updated
   */
  lastUpdated: Date | null
}

/**
 * Namespace containing symbols for dependency injection
 */
export namespace ICachedDataResult {
  /**
   * Symbol for injecting the cached data result service
   */
  export const $ = Symbol.for('ICachedDataResult')
}
