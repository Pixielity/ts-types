import { IRedisConnection } from './connection.interface.js';

/**
 * Redis connector interface
 * Defines the standard methods that all Redis connectors must implement
 */
interface IRedisConnector {
    /**
     * Create a Redis client connection
     * @param config - The connection configuration
     * @returns A Redis connection instance
     */
    createClient(config: Record<string, any>): IRedisConnection;
    /**
     * Create a Redis cluster connection
     * @param config - The connection configuration
     * @returns A Redis connection instance
     */
    createCluster(config: Record<string, any>): IRedisConnection;
}
/**
 * DI token for IRedisConnector interface
 */
declare namespace IRedisConnector {
    const $: unique symbol;
}

export { IRedisConnector };
