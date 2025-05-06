/**
 * Log decorator options
 * Controls how method calls are logged
 */
export interface ILogOptions {
  /**
   * The log level
   * @default "info"
   */
  level?: 'debug' | 'info' | 'warn' | 'error'

  /**
   * Whether to log method arguments
   * @default true
   */
  logArgs?: boolean

  /**
   * Whether to log method return values
   * @default true
   */
  logReturn?: boolean

  /**
   * Whether to log execution time
   * @default true
   */
  logTime?: boolean

  /**
   * Custom logger to use
   * If not provided, console is used
   */
  logger?: any

  /**
   * Whether to log errors
   * @default true
   */
  logErrors?: boolean

  /**
   * Custom message format
   * Available placeholders: {className}, {methodName}, {args}, {result}, {time}
   */
  format?: string
}

/**
 * Namespace containing symbols for dependency injection
 */
export namespace ILogOptions {
  /**
   * Symbol for injecting the log options service
   */
  export const $ = Symbol.for('ILogOptions')
}
