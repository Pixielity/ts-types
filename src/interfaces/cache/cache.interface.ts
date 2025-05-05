import type { ILock } from "./lock.interface"

/**
 * Interface for the main cache service
 * Provides methods for storing, retrieving, and managing cached data
 */
export interface ICache {
  /**
   * Get a value from the cache
   * @param key - The cache key
   * @param defaultValue - Default value or callback to return if key doesn't exist
   * @returns The cached value, the default value, or undefined if not found
   * @template T - The type of value to return
   */
  get<T>(key: string, defaultValue?: T): Promise<T | undefined>

  /**
   * Store a value in the cache
   * @param key - The cache key
   * @param value - The value to store
   * @param ttl - Time to live in seconds (defaults to 60 if not specified)
   * @returns True if the value was stored successfully
   * @template T - The type of value being stored
   */
  put<T>(key: string, value: T, ttl?: number): Promise<boolean>

  /**
   * Store a value in the cache indefinitely
   * @param key - The cache key
   * @param value - The value to store
   * @returns True if the value was stored successfully
   * @template T - The type of value being stored
   */
  forever<T>(key: string, value: T): Promise<boolean>

  /**
   * Remove a value from the cache
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
   * Get an item from the cache, or store the default value
   * @param key - The cache key
   * @param ttl - Time to live in seconds
   * @param callback - Function that returns the default value
   * @returns The cached value or the computed default value
   * @template T - The type of value to return
   */
  remember<T>(key: string, ttl: number, callback: () => Promise<T> | T): Promise<T>

  /**
   * Get an item from the cache, or store the default value forever
   * @param key - The cache key
   * @param callback - Function that returns the default value
   * @returns The cached value or the computed default value
   * @template T - The type of value to return
   */
  rememberForever<T>(key: string, callback: () => Promise<T> | T): Promise<T>

  /**
   * Increment a value in the cache
   * @param key - The cache key
   * @param value - The value to increment by (defaults to 1)
   * @returns The new value or false if the operation failed
   */
  increment(key: string, value?: number): Promise<number | boolean>

  /**
   * Decrement a value in the cache
   * @param key - The cache key
   * @param value - The value to decrement by (defaults to 1)
   * @returns The new value or false if the operation failed
   */
  decrement(key: string, value?: number): Promise<number | boolean>

  /**
   * Get a lock instance
   * @param name - The lock name
   * @param seconds - The lock timeout in seconds (defaults to 60)
   * @param owner - The lock owner (generated if not provided)
   * @returns A lock instance
   */
  lock(name: string, seconds?: number, owner?: string): ILock

  /**
   * Get a lock instance without blocking
   * @param name - The lock name
   * @param owner - The lock owner
   * @returns A lock instance
   */
  restoreLock(name: string, owner: string): ILock

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
   * @param ttl - Time to live in seconds (defaults to 60)
   * @returns True if the values were stored successfully
   * @template T - The type of values being stored
   */
  putMany<T>(values: Record<string, T>, ttl?: number): Promise<boolean>

  /**
   * Get the cache key prefix
   * @returns The cache key prefix
   */
  getPrefix(): string
}

/**
 * Namespace containing symbols for dependency injection
 */
export namespace ICache {
  /**
   * Symbol for injecting the cache service
   */
  export const $ = Symbol.for("ICache")
}
