/**
 * Interface for service providers.
 * Service providers are responsible for binding services into the container
 * and bootstrapping any dependencies.
 *
 * @example
 * \`\`\`typescript
 * class CacheServiceProvider implements IServiceProvider {
 *   protected app: Container;
 *
 *   constructor(app: Container) {
 *     this.app = app;
 *   }
 *
 *   register(): void {
 *     this.app.singleton('cache', () => {
 *       return new CacheManager(this.app);
 *     });
 *   }
 *
 *   boot(): void {
 *     // Bootstrap the cache service
 *   }
 * }
 * \`\`\`
 */
interface IServiceProvider {
    /**
     * Register any application services.
     * This method is called when the service provider is registered with the container.
     */
    register(): void;
    /**
     * Bootstrap any application services.
     * This method is called after all service providers have been registered.
     * This method is optional and may not be implemented by all service providers.
     */
    boot?(): void;
}
/**
 * Namespace containing symbols for dependency injection
 */
declare namespace IServiceProvider {
    /**
     * Symbol for injecting the service provider
     */
    const $: unique symbol;
}

export { IServiceProvider };
