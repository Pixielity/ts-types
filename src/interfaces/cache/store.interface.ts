/**
 * Interface for cache store implementations
 * Defines the contract that all cache storage drivers must implement
 */
import type { ILockProvider } from './lock-provider.interface'

export interface IStore {
  /**
   * Retrieve an item from the cache by key
   * @param key - The cache key
   * @returns The cached value or undefined if not found
   * @template T - The type of value to return
   */
  get<T>(key: string): Promise<T | undefined>

  /**
   * Store an item in the cache for a given number of seconds
   * @param key - The cache key
   * @param value - The value to store
   * @param seconds - The time to live in seconds (defaults to 60)
   * @returns True if the value was stored successfully
   * @template T - The type of value being stored
   */
  put<T>(key: string, value: T, seconds?: number): Promise<boolean>

  /**
   * Store an item in the cache indefinitely
   * @param key - The cache key
   * @param value - The value to store
   * @returns True if the value was stored successfully
   * @template T - The type of value being stored
   */
  forever<T>(key: string, value: T): Promise<boolean>

  /**
   * Remove an item from the cache
   * @param key - The cache key
   * @returns True if the value was removed successfully
   */
  forget(key: string): Promise<boolean>

  /**
   * Remove all items from the cache
   * @returns True if the cache was cleared successfully
   */
  flush(): Promise<boolean>

  /**
   * Get the cache key prefix
   * @returns The cache key prefix
   */
  getPrefix(): string

  /**
   * Get multiple items from the cache
   * @param keys - The cache keys
   * @returns An object mapping keys to values
   * @template T - The type of values to return
   */
  many<T>(keys: string[]): Promise<Record<string, T>>

  /**
   * Store multiple items in the cache
   * @param values - The key-value pairs to store
   * @param seconds - The time to live in seconds (defaults to 60)
   * @returns True if the values were stored successfully
   * @template T - The type of values being stored
   */
  putMany<T>(values: Record<string, T>, seconds?: number): Promise<boolean>

  /**
   * Increment the value of an item in the cache
   * @param key - The cache key
   * @param value - The value to increment by (defaults to 1)
   * @returns The new value or false if the operation failed
   */
  increment(key: string, value?: number): Promise<number | boolean>

  /**
   * Decrement the value of an item in the cache
   * @param key - The cache key
   * @param value - The value to decrement by (defaults to 1)
   * @returns The new value or false if the operation failed
   */
  decrement(key: string, value?: number): Promise<number | boolean>

  /**
   * Get the lock provider
   * @returns The lock provider instance
   */
  getLockProvider(): ILockProvider
}

/**
 * Namespace containing symbols for dependency injection
 */
export namespace IStore {
  /**
   * Symbol for injecting the store service
   */
  export const $ = Symbol.for('IStore')

  /**
   * Symbol for injecting the array store
   */
  export const ArrayStore = Symbol.for('ArrayStore')

  /**
   * Symbol for injecting the file store
   */
  export const FileStore = Symbol.for('FileStore')

  /**
   * Symbol for injecting the memcached store
   */
  export const MemcachedStore = Symbol.for('MemcachedStore')

  /**
   * Symbol for injecting the redis store
   */
  export const RedisStore = Symbol.for('RedisStore')

  /**
   * Symbol for injecting the dynamodb store
   */
  export const DynamoDbStore = Symbol.for('DynamoDbStore')

  /**
   * Symbol for injecting the database store
   */
  export const DatabaseStore = Symbol.for('DatabaseStore')

  /**
   * Symbol for injecting the null store
   */
  export const NullStore = Symbol.for('NullStore')
}
