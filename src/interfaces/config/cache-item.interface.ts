/**
 * Cache item interface
 * Represents a single cached configuration value
 */
export interface ICacheItem<T> {
  /**
   * The cached value
   */
  value: T

  /**
   * The expiration timestamp (milliseconds since epoch)
   * If undefined, the item never expires
   */
  expires?: number

  /**
   * When the item was created (milliseconds since epoch)
   */
  created: number

  /**
   * When the item was last accessed (milliseconds since epoch)
   */
  lastAccessed?: number
}

/**
 * Namespace containing symbols for dependency injection
 */
export namespace ICacheItem {
  /**
   * Symbol for injecting the cache item service
   */
  export const $ = Symbol.for("ICacheItem")
}
