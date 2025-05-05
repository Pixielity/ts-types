/**
 * Interface for cache locks
 * Provides methods for distributed locking to coordinate access to shared resources
 */
interface ILock {
    /**
     * Attempt to acquire the lock
     * If the lock is acquired, the callback is executed and the lock is released afterward
     * If the lock cannot be acquired, an error is thrown
     *
     * @param callback - The callback to execute if the lock is acquired
     * @returns The result of the callback
     * @template T - The type of value returned by the callback
     * @throws Error if the lock cannot be acquired
     */
    get<T>(callback: () => Promise<T> | T): Promise<T>;
    /**
     * Attempt to acquire the lock for the given number of seconds
     * This method will retry acquiring the lock until the timeout is reached
     *
     * @param seconds - The maximum time to wait for the lock in seconds
     * @param callback - The callback to execute if the lock is acquired
     * @returns The result of the callback
     * @template T - The type of value returned by the callback
     * @throws Error if the lock cannot be acquired within the timeout
     */
    block<T>(seconds: number, callback: () => Promise<T> | T): Promise<T>;
    /**
     * Release the lock
     * This will only succeed if the current instance is the owner of the lock
     *
     * @returns True if the lock was released successfully
     */
    release(): Promise<boolean>;
    /**
     * Returns the owner value written to the driver for this lock
     * The owner is a unique identifier for the lock instance
     *
     * @returns The lock owner string
     */
    owner(): string;
    /**
     * Releases this lock in disregard of ownership
     * This is a forceful operation that should be used with caution
     *
     * @returns True if the lock was released successfully
     */
    forceRelease(): Promise<boolean>;
}
/**
 * Namespace containing symbols for dependency injection
 */
declare namespace ILock {
    /**
     * Symbol for injecting the lock service
     */
    const $: unique symbol;
}

export { ILock };
