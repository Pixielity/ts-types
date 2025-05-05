/**
 * Interface for router configuration
 * Defines global settings for the router
 */
export interface IRouterConfig {
  /**
   * The base path for all routes
   * @default "/api"
   */
  basePath?: string

  /**
   * Whether to automatically register controllers
   * When true, controllers are discovered and registered at startup
   * @default true
   */
  autoRegister?: boolean

  /**
   * Default middleware for all routes
   * These are executed before controller and route middleware
   */
  globalMiddleware?: any[]

  /**
   * Default guards for all routes
   * These are executed before controller and route guards
   */
  globalGuards?: any[]

  /**
   * Whether to enable versioning for API routes
   * @default false
   */
  enableVersioning?: boolean

  /**
   * The versioning strategy to use
   * @default "uri"
   */
  versioningStrategy?: "uri" | "header" | "query"
}

/**
 * Namespace containing symbols for dependency injection
 */
export namespace IRouterConfig {
  /**
   * Symbol for injecting the router config service
   */
  export const $ = Symbol.for("IRouterConfig")
}
