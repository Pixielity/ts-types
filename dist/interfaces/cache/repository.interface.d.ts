import { ICache } from './cache.interface.js'
import { ITaggedCache } from './tagged-cache.interface.js'
import './lock.interface.js'

/**
 * Interface for the cache repository
 * Extends the ICache interface with tagging capabilities
 * The repository acts as a higher-level abstraction over the cache store
 */
interface IRepository extends ICache {
  /**
   * Get a tagged cache instance
   * Tagged caches allow grouping cache items and invalidating them together
   *
   * @param tags - The cache tags (single tag or array of tags)
   * @returns A tagged cache instance
   */
  tags(tags: string | string[]): ITaggedCache
  /**
   * Get the underlying cache store
   * Provides access to the store implementation for advanced operations
   *
   * @returns The cache store implementation
   */
  getStore(): any
}
/**
 * Namespace containing symbols for dependency injection
 */
declare namespace IRepository {
  /**
   * Symbol for injecting the repository service
   */
  const $: unique symbol
}

export { IRepository }
