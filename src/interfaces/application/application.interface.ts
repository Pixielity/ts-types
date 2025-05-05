import type { interfaces } from 'inversify'

import { ServiceIdentifier } from '../../types'
import type { IContainer } from '../container'

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
  make<T>(abstract: ServiceIdentifier<T>): T

  /**
   * Register a binding with the container.
   *
   * @param abstract - The abstract type to bind
   * @param concrete - The concrete implementation
   * @param shared - Whether the binding should be shared
   */
  bind<T>(
    abstract: string | ServiceIdentifier<T>,
    concrete?: any,
    shared?: boolean,
  ): IContainer | interfaces.BindingToSyntax<T>

  /**
   * Register an existing instance as shared in the container.
   *
   * @param abstract - The abstract type to bind
   * @param instance - The instance to register
   * @returns The container instance
   */
  instance<T>(abstract: ServiceIdentifier<T>, instance: T): IContainer
}

/**
 * Namespace containing symbols for dependency injection
 */
export namespace IApplication {
  /**
   * Symbol for injecting the application service
   */
  export const $ = Symbol.for('IApplication')
}
