import { HttpMethod } from '../../types/http-method.type.js'
import { IParamMetadata } from './param-metadata.interface.js'
import '../../enums/param-type.enum.js'

/**
 * Interface for route definitions
 * Contains all metadata needed to register and handle a route
 */
interface IRouteDefinition {
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
declare namespace IRouteDefinition {
  /**
   * Symbol for injecting the route definition service
   */
  const $: unique symbol
}

export { IRouteDefinition }
