import { Container, interfaces } from 'inversify';
import { IServiceProvider } from './interfaces/application/service-provider.inteface.js';

/**
 * Interface for the contextual binding implementation builder
 * Represents the "give" part of the contextual binding chain
 */
interface IContextualBindingImplementationBuilder {
    /**
     * Define the implementation to use for the contextual binding
     *
     * @param implementation - The implementation to use
     * @returns The container instance
     *
     * @example
     * \`\`\`typescript
     * // Bind a concrete implementation for a specific context
     * container.when('photoController').needs('filesystem').give(new LocalFilesystem());
     *
     * // Bind a factory function for a specific context
     * container.when('videoController').needs('filesystem').give(() => new CloudFilesystem());
     * \`\`\`
     */
    give(implementation: any): IContainer;
}
/**
 * Namespace containing symbols for dependency injection
 */
declare namespace IContextualBindingImplementationBuilder {
    /**
     * Symbol for injecting the contextual binding implementation builder service
     */
    const $: unique symbol;
}

/**
 * Interface for the contextual binding builder
 * Represents the "needs" part of the contextual binding chain
 */
interface IContextualBindingBuilder {
    /**
     * Define the abstract type that the contextual binding is for
     *
     * @param abstract - The abstract type that the concrete implementation needs
     * @returns A builder for defining the implementation
     *
     * @example
     * \`\`\`typescript
     * // Define what the PhotoController needs
     * container.when('photoController').needs('filesystem');
     *
     * // Define what the UserService needs
     * container.when(UserService).needs('repository');
     * \`\`\`
     */
    needs(abstract: string | Function): IContextualBindingImplementationBuilder;
}
/**
 * Namespace containing symbols for dependency injection
 */
declare namespace IContextualBindingBuilder {
    /**
     * Symbol for injecting the contextual binding builder service
     */
    const $: unique symbol;
}
/**
 * Factory function to create a contextual binding builder
 *
 * @param container - The container instance
 * @param concrete - The concrete implementation that needs a dependency
 * @returns A new contextual binding builder instance
 */
interface IContextualBindingBuilderFactory {
    make(container: IContainer, concrete: string | Function): IContextualBindingBuilder;
}
/**
 * Namespace containing symbols for dependency injection
 */
declare namespace IContextualBindingBuilderFactory {
    /**
     * Symbol for injecting the contextual binding builder factory service
     */
    const $: unique symbol;
}

/**
 * Interface for the service container.
 */
interface IContainer {
    /**
     * Get the underlying Inversify container.
     */
    getInversifyContainer(): Container;
    /**
     * Determine if the given abstract type has been bound.
     *
     * @param abstract - The abstract type to check
     */
    has(abstract: string): boolean;
    /**
     * Load container modules.
     *
     * @param modules - The container modules to load
     */
    load(...modules: interfaces.ContainerModule[]): IContainer;
    /**
     * Load container modules asynchronously.
     *
     * @param modules - The container modules to load
     */
    loadAsync(...modules: interfaces.AsyncContainerModule[]): Promise<IContainer>;
    /**
     * Unload container modules.
     *
     * @param modules - The container modules to unload
     */
    unload(...modules: interfaces.ContainerModuleBase[]): IContainer;
    /**
     * Unload container modules asynchronously.
     *
     * @param modules - The container modules to unload
     */
    unloadAsync(...modules: interfaces.ContainerModuleBase[]): Promise<IContainer>;
    /**
     * Register a binding with the container.
     *
     * @param abstract - The abstract type to bind
     * @param concrete - The concrete implementation
     * @param shared - Whether the binding should be shared
     */
    bind<T>(abstract: string | interfaces.ServiceIdentifier<T>, concrete?: any, shared?: boolean): IContainer | interfaces.BindingToSyntax<T>;
    /**
     * Rebind a service identifier.
     *
     * @param serviceIdentifier - The service identifier to rebind
     */
    rebind<T>(serviceIdentifier: interfaces.ServiceIdentifier<T>): interfaces.BindingToSyntax<T>;
    /**
     * Rebind a service identifier asynchronously.
     *
     * @param serviceIdentifier - The service identifier to rebind
     */
    rebindAsync<T>(serviceIdentifier: interfaces.ServiceIdentifier<T>): Promise<interfaces.BindingToSyntax<T>>;
    /**
     * Unbind a service identifier.
     *
     * @param serviceIdentifier - The service identifier to unbind
     */
    unbind(serviceIdentifier: interfaces.ServiceIdentifier<any>): void;
    /**
     * Unbind a service identifier asynchronously.
     *
     * @param serviceIdentifier - The service identifier to unbind
     */
    unbindAsync(serviceIdentifier: interfaces.ServiceIdentifier<any>): Promise<void>;
    /**
     * Unbind all bindings.
     */
    unbindAll(): void;
    /**
     * Unbind all bindings asynchronously.
     */
    unbindAllAsync(): Promise<void>;
    /**
     * Register a binding with a tag.
     *
     * @param abstract - The abstract type to bind
     * @param concrete - The concrete implementation
     * @param tag - The tag name
     * @param value - The tag value
     * @param shared - Whether the binding should be shared
     */
    bindTagged(abstract: string, concrete: any, tag: string, value: any, shared?: boolean): IContainer;
    /**
     * Register a shared binding in the container.
     *
     * @param abstract - The abstract type to bind
     * @param concrete - The concrete implementation
     */
    singleton(abstract: string, concrete: any): IContainer;
    /**
     * Register an existing instance as shared in the container.
     *
     * @param abstract - The abstract type to bind
     * @param instance - The instance to register
     */
    instance(abstract: string, instance: any): IContainer;
    /**
     * Alias a type to a different name.
     *
     * @param abstract - The abstract type to alias
     * @param alias - The alias name
     */
    alias(abstract: string, alias: string): IContainer;
    /**
     * Apply middleware to the container.
     *
     * @param middlewares - The middleware to apply
     */
    applyMiddleware(...middlewares: interfaces.Middleware[]): IContainer;
    /**
     * Apply a custom metadata reader to the container.
     *
     * @param metadataReader - The metadata reader to apply
     */
    applyCustomMetadataReader(metadataReader: interfaces.MetadataReader): IContainer;
    /**
     * Define a contextual binding.
     *
     * @param concrete - The concrete implementation that needs a dependency
     */
    when(concrete: string | Function): IContextualBindingBuilder;
    /**
     * Register an activation handler for a service.
     *
     * @param serviceIdentifier - The service identifier
     * @param onActivation - The activation handler
     */
    onActivation<T>(serviceIdentifier: interfaces.ServiceIdentifier<T>, onActivation: interfaces.BindingActivation<T>): void;
    /**
     * Register a deactivation handler for a service.
     *
     * @param serviceIdentifier - The service identifier
     * @param onDeactivation - The deactivation handler
     */
    onDeactivation<T>(serviceIdentifier: interfaces.ServiceIdentifier<T>, onDeactivation: interfaces.BindingDeactivation<T>): void;
    /**
     * Check if a service identifier is bound.
     *
     * @param serviceIdentifier - The service identifier to check
     */
    isBound(serviceIdentifier: interfaces.ServiceIdentifier<unknown>): boolean;
    /**
     * Check if a service identifier is bound in the current container (not in ancestors).
     *
     * @param serviceIdentifier - The service identifier to check
     */
    isCurrentBound<T>(serviceIdentifier: interfaces.ServiceIdentifier<T>): boolean;
    /**
     * Check if a named binding is bound.
     *
     * @param serviceIdentifier - The service identifier to check
     * @param named - The name to check
     */
    isBoundNamed(serviceIdentifier: interfaces.ServiceIdentifier<any>, named: string | number | symbol): boolean;
    /**
     * Check if a tagged binding is bound.
     *
     * @param serviceIdentifier - The service identifier to check
     * @param key - The tag key
     * @param value - The tag value
     */
    isBoundTagged(serviceIdentifier: interfaces.ServiceIdentifier<any>, key: string | number | symbol, value: unknown): boolean;
    /**
     * Create a snapshot of the container's state.
     */
    snapshot(): void;
    /**
     * Restore the container's state from a snapshot.
     */
    restore(): void;
    /**
     * Create a child container.
     *
     * @param containerOptions - The container options
     */
    createChild(containerOptions?: interfaces.ContainerOptions): IContainer;
    /**
     * Resolve the given type from the container.
     *
     * @param abstract - The abstract type to resolve
     * @param parameters - Optional parameters to pass to the constructor
     */
    make<T>(abstract: string, parameters?: any[]): T;
    /**
     * Resolve the given type from the container asynchronously.
     *
     * @param abstract - The abstract type to resolve
     */
    makeAsync<T>(abstract: string): Promise<T>;
    /**
     * Resolve a tagged binding from the container.
     *
     * @param abstract - The abstract type to resolve
     * @param tag - The tag name
     * @param value - The tag value
     */
    makeTagged<T>(abstract: string, tag: string, value: any): T;
    /**
     * Resolve a tagged binding from the container asynchronously.
     *
     * @param abstract - The abstract type to resolve
     * @param tag - The tag name
     * @param value - The tag value
     */
    makeTaggedAsync<T>(abstract: string, tag: string, value: any): Promise<T>;
    /**
     * Resolve a named binding from the container.
     *
     * @param abstract - The abstract type to resolve
     * @param named - The name
     */
    makeNamed<T>(abstract: string, named: string | number | symbol): T;
    /**
     * Resolve a named binding from the container asynchronously.
     *
     * @param abstract - The abstract type to resolve
     * @param named - The name
     */
    makeNamedAsync<T>(abstract: string, named: string | number | symbol): Promise<T>;
    /**
     * Resolve all bindings for a service identifier.
     *
     * @param abstract - The abstract type to resolve
     */
    makeAll<T>(abstract: string): T[];
    /**
     * Resolve all bindings for a service identifier asynchronously.
     *
     * @param abstract - The abstract type to resolve
     */
    makeAllAsync<T>(abstract: string): Promise<T[]>;
    /**
     * Resolve all tagged bindings for a service identifier.
     *
     * @param abstract - The abstract type to resolve
     * @param tag - The tag name
     * @param value - The tag value
     */
    makeAllTagged<T>(abstract: string, tag: string, value: any): T[];
    /**
     * Resolve all tagged bindings for a service identifier asynchronously.
     *
     * @param abstract - The abstract type to resolve
     * @param tag - The tag name
     * @param value - The tag value
     */
    makeAllTaggedAsync<T>(abstract: string, tag: string, value: any): Promise<T[]>;
    /**
     * Resolve all named bindings for a service identifier.
     *
     * @param abstract - The abstract type to resolve
     * @param named - The name
     */
    makeAllNamed<T>(abstract: string, named: string | number | symbol): T[];
    /**
     * Resolve all named bindings for a service identifier asynchronously.
     *
     * @param abstract - The abstract type to resolve
     * @param named - The name
     */
    makeAllNamedAsync<T>(abstract: string, named: string | number | symbol): Promise<T[]>;
    /**
     * Resolve a class constructor.
     *
     * @param constructorFunction - The constructor function to resolve
     */
    resolve<T>(constructorFunction: interfaces.Newable<T>): T;
    /**
     * Register a service provider with the container.
     *
     * @param provider - The service provider to register
     */
    register(provider: IServiceProvider): IContainer;
    /**
     * Boot the registered service providers.
     */
    boot(): IContainer;
    /**
     * Call the given callback with the container instance.
     *
     * @param callback - The callback to call
     */
    call<T>(callback: (container: IContainer) => T): T;
}
/**
 * Namespace containing symbols for dependency injection
 */
declare namespace IContainer {
    /**
     * Symbol for injecting the container service
     */
    const $: unique symbol;
}

export { IContainer as I, IContextualBindingImplementationBuilder as a, IContextualBindingBuilder as b, IContextualBindingBuilderFactory as c };
