import type { IConfigSchema } from "./schema.interface"
import type { ConfigEnvironment } from "../../enums/config-enviroment.enum"

/**
 * Interface for the configuration repository
 */
export interface IConfigRepository {
  /**
   * Get the current environment.
   */
  getEnvironment(): ConfigEnvironment

  /**
   * Set the configuration validator schemas.
   *
   * @param schemas - The configuration schemas
   */
  setSchemas(schemas: Record<string, IConfigSchema>): void

  /**
   * Enable or disable validation.
   *
   * @param enable - Whether to enable validation
   */
  setValidation(enable: boolean): void

  /**
   * Enable or disable caching.
   *
   * @param enable - Whether to enable caching
   */
  setCaching(enable: boolean): void

  /**
   * Clear the configuration cache.
   */
  clearCache(): void

  /**
   * Determine if the given configuration value exists.
   *
   * @param key - The configuration key
   */
  has(key: string): boolean

  /**
   * Get the specified configuration value.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   */
  get<T>(key: string, defaultValue?: T): T

  /**
   * Get a string value from the configuration.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   */
  getString(key: string, defaultValue?: string): string

  /**
   * Get a number value from the configuration.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   */
  getNumber(key: string, defaultValue?: number): number

  /**
   * Get an integer value from the configuration.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   */
  getInt(key: string, defaultValue?: number): number

  /**
   * Get a float value from the configuration.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   */
  getFloat(key: string, defaultValue?: number): number

  /**
   * Get a boolean value from the configuration.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   */
  getBoolean(key: string, defaultValue?: boolean): boolean

  /**
   * Get an array value from the configuration.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   */
  getArray<T = any>(key: string, defaultValue?: T[]): T[]

  /**
   * Get an object value from the configuration.
   *
   * @param key - The configuration key
   * @param defaultValue - The default value to return if the key doesn't exist
   */
  getObject<T = Record<string, any>>(key: string, defaultValue?: T): T

  /**
   * Set a given configuration value.
   *
   * @param key - The configuration key
   * @param value - The configuration value
   */
  set(key: string, value: any): void

  /**
   * Get all of the configuration items.
   */
  all(): Record<string, any>

  /**
   * Merge configuration items.
   *
   * @param items - The items to merge
   */
  merge(items: Record<string, any>): void
}
