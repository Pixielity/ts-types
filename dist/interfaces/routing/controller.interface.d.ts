/**
 * Interface for route controllers
 * Defines the contract that all controller classes must implement
 */
interface IController {
  /**
   * The constructor of the controller
   * Controllers should be instantiable with dependency injection
   */
  new (...args: any[]): any
}
/**
 * Namespace containing symbols for dependency injection
 */
declare namespace IController {
  /**
   * Symbol for injecting the controller service
   */
  const $: unique symbol
}

export { IController }
