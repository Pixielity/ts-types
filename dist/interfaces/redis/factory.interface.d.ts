import { IRedisConnection } from './connection.interface.js'

/**
 * Redis factory interface
 * Responsible for creating and managing Redis connections
 */
interface IRedisFactory {
  /**
   * Get a Redis connection by name
   * @param name - The connection name (optional, uses default if not provided)
   * @returns A Redis connection instance
   *
   * @example
   * ```typescript
   * // Get the default connection
   * const redis = factory.connection();
   *
   * // Get a specific named connection
   * const cache = factory.connection('cache');
   * ```
   */
  connection(name?: string): IRedisConnection
  /**
   * Create a new Redis connection
   * @param config - The connection configuration
   * @returns A Redis connection instance
   */
  make(config: Record<string, any>): IRedisConnection
  /**
   * Get the default connection name
   * @returns The default connection name
   */
  getDefaultConnection(): string
  /**
   * Set the default connection name
   * @param name - The default connection name
   */
  setDefaultConnection(name: string): void
  /**
   * Get all registered connections
   * @returns A record of connection names to connection instances
   */
  getConnections(): Record<string, IRedisConnection>
  /**
   * Check if a connection exists
   * @param name - The connection name
   * @returns True if the connection exists
   */
  hasConnection(name: string): boolean
  /**
   * Add a connection to the factory
   * @param name - The connection name
   * @param connection - The connection instance
   */
  addConnection(name: string, connection: IRedisConnection): void
  /**
   * Remove a connection from the factory
   * @param name - The connection name
   */
  removeConnection(name: string): void
}
/**
 * DI token for IRedisFactory interface
 */
declare namespace IRedisFactory {
  const $: unique symbol
}

export { IRedisFactory }
