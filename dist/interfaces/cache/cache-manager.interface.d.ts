import './cache.interface.js';
import { IStore } from './store.interface.js';
import { IRepository } from './repository.interface.js';
import './tagged-cache.interface.js';
import './lock.interface.js';
import './lock-provider.interface.js';

/**
 * Interface for the cache manager
 * The cache manager is responsible for creating and managing cache stores
 * It acts as a factory for cache repositories
 */
interface ICacheManager {
    /**
     * Get the default cache store name
     * @returns The name of the default cache store
     */
    getDefaultInstance(): string;
    /**
     * Set the default cache store name
     * @param name - The store name to set as default
     */
    setDefaultInstance(name: string): void;
    /**
     * Get the cache store configuration
     * @param name - The store name
     * @returns The store configuration object, or null if not found
     */
    getInstanceConfig(name: string): Record<string, any> | null;
    /**
     * Create a new cache repository with the given implementation
     * @param store - The cache store implementation
     * @returns A repository instance wrapping the store
     */
    repository(store: IStore): IRepository;
    /**
     * Get a cache store instance
     * @param name - The store name (optional, uses default if not provided)
     * @returns A repository instance for the requested store
     */
    store(name?: string): IRepository;
    /**
     * Get the default cache driver name
     * This is an alias for getDefaultInstance for compatibility with Laravel-style managers
     * @returns The name of the default cache store
     */
    getDefaultDriver(): string;
    /**
     * Set the default cache driver name
     * This is an alias for setDefaultInstance for compatibility with Laravel-style managers
     * @param name - The driver name to set as default
     */
    setDefaultDriver(name: string): void;
}
/**
 * Namespace containing symbols for dependency injection
 */
declare namespace ICacheManager {
    /**
     * Symbol for injecting the cache manager service
     */
    const $: unique symbol;
}

export { ICacheManager };
