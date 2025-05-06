/**
 * Options for the Controller decorator
 * Configures controller-specific behavior
 */
interface IControllerOptions {
  /**
   * Controller-specific middleware
   * These are executed for all routes in the controller
   */
  middleware?: any[]
  /**
   * Controller-specific guards
   * These are executed for all routes in the controller
   */
  guards?: any[]
  /**
   * The API version this controller belongs to
   * Used when versioning is enabled in router configuration
   */
  version?: string
  /**
   * Additional metadata for the controller
   * Can be used for documentation, validation, or custom extensions
   */
  metadata?: Record<string, any>
  /**
   * Controller description for documentation
   */
  description?: string
  /**
   * Whether the controller is deprecated
   * @default false
   */
  deprecated?: boolean
}
/**
 * Namespace containing symbols for dependency injection
 */
declare namespace IControllerOptions {
  /**
   * Symbol for injecting the controller options service
   */
  const $: unique symbol
}

export { IControllerOptions }
