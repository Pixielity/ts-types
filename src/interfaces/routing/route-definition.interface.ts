import type { HttpMethod } from '../../types'
import type { IParamMetadata } from './param-metadata.interface'

/**
 * Interface for route definitions
 * Contains all metadata needed to register and handle a route
 */
export interface IRouteDefinition {
  /**
   * The HTTP method for the route (GET, POST, etc.)
   */
  method: HttpMethod

  /**
   * The route path relative to the controller prefix
   */
  path: string

  /**
   * The handler method name in the controller class
   */
  handlerName: string | symbol

  /**
   * The route-specific middleware (executed after controller middleware)
   */
  middleware: any[]

  /**
   * The route-specific guards (executed after controller guards)
   */
  guards: any[]

  /**
   * The parameter metadata for dependency injection
   */
  params: IParamMetadata[]

  /**
   * Additional metadata for custom extensions
   */
  metadata: Record<string, any>
}

/**
 * Namespace containing symbols for dependency injection
 */
export namespace IRouteDefinition {
  /**
   * Symbol for injecting the route definition service
   */
  export const $ = Symbol.for('IRouteDefinition')
}
