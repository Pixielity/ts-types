import type { IQueueConnection } from './queue-connection.interface'
import type { IQueueable } from './queueable.interface'

/**
 * Interface for the queue manager.
 * The queue manager is responsible for managing queue connections and dispatching jobs.
 */
export interface IQueueManager {
  /**
   * Add a queue connection.
   *
   * @param {string} name - The connection name
   * @param {IQueueConnection} connection - The queue connection
   */
  addConnection(name: string, connection: IQueueConnection): void

  /**
   * Get a queue connection by name.
   *
   * @param {string} [name] - The connection name (or default if not provided)
   * @returns {IQueueConnection} The queue connection
   */
  connection(name?: string): IQueueConnection

  /**
   * Set the default connection name.
   *
   * @param {string} name - The default connection name
   */
  setDefaultConnection(name: string): void

  /**
   * Push a new job onto the queue.
   *
   * @param {IQueueable} job - The job to queue
   * @param {any} data - Additional data for the job
   * @param {string} [connectionName] - The connection name
   * @param {string} [queue] - The queue name
   * @returns {Promise<void>}
   */
  push(
    job: IQueueable,
    data: any,
    connectionName?: string | null,
    queue?: string | null,
  ): Promise<void>

  /**
   * Push a new job onto the queue after a delay.
   *
   * @param {number} delay - The delay in seconds
   * @param {IQueueable} job - The job to queue
   * @param {any} data - Additional data for the job
   * @param {string} [connectionName] - The connection name
   * @param {string} [queue] - The queue name
   * @returns {Promise<void>}
   */
  later(
    delay: number,
    job: IQueueable,
    data: any,
    connectionName?: string | null,
    queue?: string | null,
  ): Promise<void>

  /**
   * Push an array of jobs onto the queue.
   *
   * @param {IQueueable[]} jobs - The jobs to queue
   * @param {any} data - Additional data for the jobs
   * @param {string} [connectionName] - The connection name
   * @param {string} [queue] - The queue name
   * @returns {Promise<void>}
   */
  bulk(
    jobs: IQueueable[],
    data: any,
    connectionName?: string | null,
    queue?: string | null,
  ): Promise<void>

  /**
   * Release a job back onto the queue.
   *
   * @param {IQueueable} job - The job to release
   * @param {any} data - The job data
   * @param {number} [delay=0] - The delay in seconds
   * @param {string} [connectionName] - The connection name
   * @param {string} [queue] - The queue name
   * @returns {Promise<void>}
   */
  release(
    job: IQueueable,
    data: any,
    delay?: number,
    connectionName?: string | null,
    queue?: string | null,
  ): Promise<void>

  /**
   * Move a job to the failed queue.
   *
   * @param {IQueueable} job - The failed job
   * @param {any} data - The job data
   * @param {Error} error - The error that caused the failure
   * @param {string} [connectionName] - The connection name
   * @returns {Promise<void>}
   */
  failed(job: IQueueable, data: any, error: Error, connectionName?: string | null): Promise<void>

  /**
   * Get the default connection name.
   *
   * @returns {string} The default connection name
   */
  getDefaultConnection(): string

  /**
   * Get all registered connections.
   *
   * @returns {Record<string, IQueueConnection>} The registered connections
   */
  getConnections(): Record<string, IQueueConnection>
}

/**
 * DI token for IQueueManager interface
 */
export namespace IQueueManager {
  export const $ = Symbol.for('IQueueManager')
}
