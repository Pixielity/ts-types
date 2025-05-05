import { ILock } from './lock.interface.mjs';

/**
 * Interface for lock providers
 * Lock providers are responsible for creating lock instances
 * Each cache store has its own lock provider implementation
 */
interface ILockProvider {
    /**
     * Get a lock instance
     * Creates a new lock with the specified name, timeout, and owner
     *
     * @param name - The lock name (unique identifier for the resource being locked)
     * @param seconds - The lock timeout in seconds (defaults to 60)
     * @param owner - The lock owner (generated if not provided)
     * @returns A lock instance
     */
    lock(name: string, seconds?: number, owner?: string): ILock;
    /**
     * Restore a lock instance
     * Creates a lock instance with a specific owner, used to manage an existing lock
     *
     * @param name - The lock name
     * @param owner - The lock owner
     * @returns A lock instance
     */
    restoreLock(name: string, owner: string): ILock;
}
/**
 * Namespace containing symbols for dependency injection
 */
declare namespace ILockProvider {
    /**
     * Symbol for injecting the lock provider service
     */
    const $: unique symbol;
}

export { ILockProvider };
