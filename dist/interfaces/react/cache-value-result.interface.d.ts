/**
 * Result of the useCacheValue hook
 * Provides access to and control over a cached value
 */
interface ICacheValueResult<T> {
    /**
     * The cached value
     * Null if the value doesn't exist, undefined if it's still loading
     */
    value: T | null | undefined;
    /**
     * Function to set the value in the cache
     *
     * @param newValue - The new value to cache
     * @param ttl - Optional time-to-live in seconds
     * @returns A promise resolving to whether the operation succeeded
     */
    setValue: (newValue: T, ttl?: number) => Promise<boolean>;
    /**
     * Function to remove the value from the cache
     *
     * @returns A promise resolving to whether the operation succeeded
     */
    removeValue: () => Promise<boolean>;
    /**
     * Whether the value is currently loading
     */
    loading: boolean;
    /**
     * Function to refresh the value from the cache
     *
     * @returns A promise that resolves when the refresh is complete
     */
    refresh: () => Promise<void>;
    /**
     * Any error that occurred during loading or operations
     */
    error: Error | null;
}
/**
 * Namespace containing symbols for dependency injection
 */
declare namespace ICacheValueResult {
    /**
     * Symbol for injecting the cache value result service
     */
    const $: unique symbol;
}

export { ICacheValueResult };
