/**
 * Interface for route controllers
 * Defines the contract that all controller classes must implement
 */
export interface IController {
  /**
   * The constructor of the controller
   * Controllers should be instantiable with dependency injection
   */
  new (...args: any[]): any
}

/**
 * Namespace containing symbols for dependency injection
 */
export namespace IController {
  /**
   * Symbol for injecting the controller service
   */
  export const $ = Symbol.for('IController')
}
