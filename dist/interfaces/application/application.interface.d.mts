import { interfaces } from 'inversify';
import { ServiceIdentifier } from '../../types/service-identifier.type.mjs';
import { a as IContainer } from '../../service-provider.inteface-zpr0Rznj.mjs';
import '../../types/newable.type.mjs';
import '../abstract.interface.mjs';

/**
 * Interface for the application
 */
interface IApplication {
    /**
     * Get the service container.
     */
    getContainer(): IContainer;
    /**
     * Register the core service providers.
     */
    registerCoreProviders(): IApplication;
    /**
     * Register a service provider.
     *
     * @param provider - The service provider to register
     */
    register(provider: any): IApplication;
    /**
     * Boot the application.
     */
    boot(): IApplication;
    /**
     * Determine if the application has been bootstrapped.
     */
    isBooted(): boolean;
    /**
     * Get a service from the container.
     *
     * @param abstract - The abstract type to resolve
     */
    make<T>(abstract: ServiceIdentifier<T>): T;
    /**
     * Register a binding with the container.
     *
     * @param abstract - The abstract type to bind
     * @param concrete - The concrete implementation
     * @param shared - Whether the binding should be shared
     */
    bind<T>(abstract: string | ServiceIdentifier<T>, concrete?: any, shared?: boolean): IContainer | interfaces.BindingToSyntax<T>;
    /**
     * Register an existing instance as shared in the container.
     *
     * @param abstract - The abstract type to bind
     * @param instance - The instance to register
     * @returns The container instance
     */
    instance<T>(abstract: ServiceIdentifier<T>, instance: T): IContainer;
}
/**
 * Namespace containing symbols for dependency injection
 */
declare namespace IApplication {
    /**
     * Symbol for injecting the application service
     */
    const $: unique symbol;
}

export { IApplication };
