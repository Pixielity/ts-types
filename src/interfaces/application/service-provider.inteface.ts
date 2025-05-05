import { IContainer } from '../container'

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
 */ export interface IServiceProvider {
  /**
   * The application container instance.
   */
  readonly app: IContainer

  /**
   * Register any application services.
   */
  register(): void

  /**
   * Bootstrap any application services (optional).
   */
  boot?(): void

  /**
   * Clean up services before shutdown (optional).
   */
  terminate?(): void

  /**
   * Publish files or configurations (optional).
   */
  publish?(): void
}

/**
 * Namespace containing symbols for dependency injection
 */
export namespace IServiceProvider {
  /**
   * Symbol for injecting the service provider
   */
  export const $ = Symbol.for('IServiceProvider')
}
