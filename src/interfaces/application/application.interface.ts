import type { IContainer } from "../container"

/**
 * Interface for the application
 */
export interface IApplication {
  /**
   * Get the service container.
   */
  getContainer(): IContainer

  /**
   * Register the core service providers.
   */
  registerCoreProviders(): IApplication

  /**
   * Register a service provider.
   *
   * @param provider - The service provider to register
   */
  register(provider: any): IApplication

  /**
   * Boot the application.
   */
  boot(): IApplication

  /**
   * Determine if the application has been bootstrapped.
   */
  isBooted(): boolean

  /**
   * Get a service from the container.
   *
   * @param abstract - The abstract type to resolve
   */
  make<T>(abstract: string): T
}

/**
 * Namespace containing symbols for dependency injection
 */
export namespace IApplication {
  /**
   * Symbol for injecting the application service
   */
  export const $ = Symbol.for("IApplication")
}
