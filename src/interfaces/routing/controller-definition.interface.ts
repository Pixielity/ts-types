import type { IRouteDefinition } from "./route-definition.interface"

/**
 * Interface for controller definitions
 * Contains all metadata needed to register and handle a controller
 */
export interface IControllerDefinition {
  /**
   * The controller constructor
   */
  controller: any

  /**
   * The route prefix for all routes in this controller
   */
  prefix: string

  /**
   * The controller-level middleware (applied to all routes)
   */
  middleware: any[]

  /**
   * The controller-level guards (applied to all routes)
   */
  guards: any[]

  /**
   * The controller routes
   */
  routes: IRouteDefinition[]

  /**
   * Additional metadata for custom extensions
   */
  metadata: Record<string, any>
}

/**
 * Namespace containing symbols for dependency injection
 */
export namespace IControllerDefinition {
  /**
   * Symbol for injecting the controller definition service
   */
  export const $ = Symbol.for("IControllerDefinition")
}
