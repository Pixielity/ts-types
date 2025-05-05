import { IRedisConnection } from './connection.interface.mjs';

/**
 * Redis connector interface
 * Responsible for establishing connections to Redis servers and clusters
 */
interface IRedisConnector {
    /**
     * Create a connection to a Redis instance
     * @param config - The connection configuration
     * @param options - Additional connection options
     * @returns A Redis connection instance
     *
     * @example
     * ```typescript
     * const connection = connector.connect({
     *   host: 'localhost',
     *   port: 6379,
     *   password: 'secret'
     * }, {
     *   retryStrategy: (times) => Math.min(times * 50, 2000)
     * });
     * ```
     */
    connect(config: Record<string, any>, options: Record<string, any>): IRedisConnection;
    /**
     * Create a connection to a Redis cluster
     * @param config - The cluster nodes configuration
     * @param clusterOptions - Cluster-specific options
     * @param options - Additional connection options
     * @returns A Redis connection instance
     *
     * @example
     * ```typescript
     * const clusterConnection = connector.connectToCluster([
     *   { host: 'redis-1', port: 6379 },
     *   { host: 'redis-2', port: 6379 },
     *   { host: 'redis-3', port: 6379 }
     * ], {
     *   scaleReads: 'all'
     * }, {
     *   maxRedirections: 16
     * });
     * ```
     */
    connectToCluster(config: Record<string, any>[], clusterOptions: Record<string, any>, options: Record<string, any>): IRedisConnection;
}
/**
 * DI token for IRedisConnector interface
 */
declare namespace IRedisConnector {
    const $: unique symbol;
}

export { IRedisConnector };
