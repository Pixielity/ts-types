import { ICache } from './cache.interface.mjs';
import './lock.interface.mjs';

/**
 * Interface for tagged cache
 * Tagged caches allow grouping cache items and invalidating them together
 * This is useful for cache invalidation strategies where multiple related
 * cache entries need to be invalidated at once
 */
interface ITaggedCache extends ICache {
    /**
     * Get the tag names
     * Returns the array of tags associated with this cache instance
     *
     * @returns The array of tag names
     */
    getTags(): string[];
    /**
     * Reset all tags
     * This generates new tag IDs for all tags, effectively invalidating
     * all cache entries associated with these tags
     */
    resetTags(): void;
}
/**
 * Namespace containing symbols for dependency injection
 */
declare namespace ITaggedCache {
    /**
     * Symbol for injecting the tagged cache service
     */
    const $: unique symbol;
}

export { ITaggedCache };
