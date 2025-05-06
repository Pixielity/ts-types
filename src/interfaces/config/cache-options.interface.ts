/**
 * Configuration cache options
 * Controls how configuration values are cached
 */
export interface IConfigCacheOptions {
  /**
   * Whether the cache is enabled
   * @default true
   */
  enabled?: boolean

  /**
   * The maximum number of items to store in the cache
   * @default 1000
   */
  maxSize?: number

  /**
   * The time to live for cache items in milliseconds
   * @default 0 (no expiration)
   */
  ttl?: number

  /**
   * Whether to use a persistent cache
   * @default false
   */
  persistent?: boolean

  /**
   * The storage key for persistent cache
   * @default "config_cache"
   */
  storageKey?: string
}

/**
 * Namespace containing symbols for dependency injection
 */
export namespace IConfigCacheOptions {
  /**
   * Symbol for injecting the config cache options service
   */
  export const $ = Symbol.for('IConfigCacheOptions')
}
