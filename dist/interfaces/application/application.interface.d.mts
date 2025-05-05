import { interfaces } from 'inversify';
import { ICache } from '../cache/cache.interface.mjs';
import { ServiceIdentifier } from '../../types/service-identifier.type.mjs';
import { a as IContainer } from '../../service-provider.inteface-zpr0Rznj.mjs';
import { IConfigRepository } from '../config/repository.interface.mjs';
import '../cache/lock.interface.mjs';
import '../../types/newable.type.mjs';
import '../abstract.interface.mjs';
import '../config/schema.interface.mjs';
import '../../enums/config-enviroment.enum.mjs';

/**
 * Interface for the application
 */
interface IApplication {
    /**
     * Get the service container instance.
     */
    getContainer(): IContainer;
    /**
     * Register the core service providers.
     */
    registerCoreProviders(): IApplication;
    /**
     * Register a service provider.
     */
    register(provider: any): IApplication;
    /**
     * Boot the application and all service providers.
     */
    boot(): IApplication;
    /**
     * Determine if the application has been bootstrapped.
     */
    isBooted(): boolean;
    /**
     * Resolve a service from the container.
     */
    make<T>(abstract: ServiceIdentifier<T>): T;
    /**
     * Register a binding with the container.
     */
    bind<T>(abstract: ServiceIdentifier<T>, concrete?: any, shared?: boolean): IContainer | interfaces.BindingToSyntax<T>;
    /**
     * Register an existing instance in the container.
     */
    instance<T>(abstract: ServiceIdentifier<T>, instance: T): IContainer;
    /**
     * Get the configuration repository.
     */
    config(): IConfigRepository;
    /**
     * Get the cache manager instance.
     */
    cache(): ICache;
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
