/**
 * Options for the Config decorator
 * Controls how configuration values are injected into class properties
 */
export interface IConfigOptions {
  /**
   * The configuration key to retrieve
   */
  key: string

  /**
   * The default value to use if the configuration key doesn't exist
   */
  defaultValue?: any

  /**
   * Whether to refresh the value when accessed
   * When true, the value is retrieved from the config repository each time
   * @default false
   */
  refresh?: boolean

  /**
   * Transform function to apply to the value
   * Allows custom formatting or type conversion
   */
  transform?: (value: any) => any

  /**
   * Whether to validate the value against its schema
   * @default true
   */
  validate?: boolean
}

/**
 * Namespace containing symbols for dependency injection
 */
export namespace IConfigOptions {
  /**
   * Symbol for injecting the config options service
   */
  export const $ = Symbol.for("IConfigOptions")
}
