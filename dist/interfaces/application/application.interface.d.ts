import { I as IContainer } from '../../index-Dys3vr3F.js';
import './service-provider.inteface.js';
import 'inversify';

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
    make<T>(abstract: string): T;
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
