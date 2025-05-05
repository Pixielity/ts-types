/**
 * Options for the Route decorator
 * Configures route-specific behavior
 */
export interface IRouteOptions {
  /**
   * Route-specific middleware
   * These are executed after controller middleware but before the route handler
   */
  middleware?: any[]

  /**
   * Route-specific guards
   * These are executed after controller guards but before the route handler
   */
  guards?: any[]

  /**
   * Additional metadata for the route
   * Can be used for documentation, validation, or custom extensions
   */
  metadata?: Record<string, any>

  /**
   * Whether the route is deprecated
   * @default false
   */
  deprecated?: boolean

  /**
   * Route description for documentation
   */
  description?: string
}

/**
 * Namespace containing symbols for dependency injection
 */
export namespace IRouteOptions {
  /**
   * Symbol for injecting the route options service
   */
  export const $ = Symbol.for("IRouteOptions")
}
