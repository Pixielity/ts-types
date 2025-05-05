/**
 * Interface for the configuration cache
 */
interface IConfigCache {
    /**
     * Enable or disable the cache
     *
     * @param enabled - Whether to enable the cache
     */
    setEnabled(enabled: boolean): void;
    /**
     * Set the maximum cache size
     *
     * @param maxSize - The maximum number of items to store in the cache
     */
    setMaxSize(maxSize: number): void;
    /**
     * Set the time to live for cache items
     *
     * @param ttl - The time to live in milliseconds
     */
    setTtl(ttl: number): void;
    /**
     * Get a value from the cache
     *
     * @param key - The cache key
     */
    get<T>(key: string): T | undefined;
    /**
     * Set a value in the cache
     *
     * @param key - The cache key
     * @param value - The value to cache
     */
    set<T>(key: string, value: T): void;
    /**
     * Delete a value from the cache
     *
     * @param key - The cache key
     */
    delete(key: string): void;
    /**
     * Clear the cache
     */
    clear(): void;
    /**
     * Get the number of items in the cache
     */
    size(): number;
    /**
     * Check if a key exists in the cache
     *
     * @param key - The cache key
     */
    has(key: string): boolean;
}
/**
 * Namespace containing symbols for dependency injection
 */
declare namespace IConfigCache {
    /**
     * Symbol for injecting the config cache service
     */
    const $: unique symbol;
}

export { IConfigCache };
