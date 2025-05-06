/**
 * Interface for rate limiter.
 */
export interface IRateLimiter {
  /**
   * Check if a key is rate limited.
   *
   * @param key - The key to check
   * @param maxAttempts - The maximum number of attempts
   * @param decaySeconds - The decay time in seconds
   * @returns True if the key is rate limited
   */
  tooManyAttempts(key: string, maxAttempts: number, decaySeconds: number): Promise<boolean>

  /**
   * Increment the attempts for a key.
   *
   * @param key - The key to increment
   * @param decaySeconds - The decay time in seconds
   * @returns The current number of attempts
   */
  increment(key: string, decaySeconds: number): Promise<number>

  /**
   * Reset the attempts for a key.
   *
   * @param key - The key to reset
   * @returns Promise resolving when the key is reset
   */
  reset(key: string): Promise<void>

  /**
   * Get the number of attempts for a key.
   *
   * @param key - The key to check
   * @returns The number of attempts
   */
  attempts(key: string): Promise<number>

  /**
   * Get the number of remaining attempts for a key.
   *
   * @param key - The key to check
   * @param maxAttempts - The maximum number of attempts
   * @returns The number of remaining attempts
   */
  remaining(key: string, maxAttempts: number): Promise<number>

  /**
   * Get the time until the rate limit is reset.
   *
   * @param key - The key to check
   * @returns The time in seconds until the rate limit is reset
   */
  availableIn(key: string): Promise<number>
}

/**
 * DI token for IRateLimiter interface
 */
export namespace IRateLimiter {
  export const $ = Symbol.for('IRateLimiter')
}
