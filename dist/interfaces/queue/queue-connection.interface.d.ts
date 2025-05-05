import { IQueueable } from './queueable.interface.js';
import './should-queue.interface.js';

/**
 * Interface for queue connections.
 * Queue connections are responsible for processing queueable jobs.
 */
interface IQueueConnection {
    /**
     * Push a new job onto the queue.
     *
     * @param {IQueueable} job - The job to queue
     * @param {any} data - Additional data for the job
     * @param {string} [queue] - The queue to push to
     * @returns {Promise<void>}
     */
    push(job: IQueueable, data: any, queue?: string): Promise<void>;
    /**
     * Push a new job onto the queue after a delay.
     *
     * @param {number} delay - The delay in seconds
     * @param {IQueueable} job - The job to queue
     * @param {any} data - Additional data for the job
     * @param {string} [queue] - The queue to push to
     * @returns {Promise<void>}
     */
    later(delay: number, job: IQueueable, data: any, queue?: string): Promise<void>;
    /**
     * Push an array of jobs onto the queue.
     *
     * @param {IQueueable[]} jobs - The jobs to queue
     * @param {any} data - Additional data for the jobs
     * @param {string} [queue] - The queue to push to
     * @returns {Promise<void>}
     */
    bulk(jobs: IQueueable[], data: any, queue?: string): Promise<void>;
    /**
     * Process jobs in a queue.
     *
     * @param {string} [queue] - The queue to process
     * @param {number} [count=1] - The number of jobs to process
     * @returns {Promise<number>} The number of jobs processed
     */
    process(queue?: string, count?: number): Promise<number>;
    /**
     * Get the number of jobs in a queue.
     *
     * @param {string} [queue] - The queue name
     * @returns {Promise<number>} The number of jobs
     */
    size(queue?: string): Promise<number>;
    /**
     * Get the number of delayed jobs in a queue.
     *
     * @param {string} [queue] - The queue name
     * @returns {Promise<number>} The number of delayed jobs
     */
    delayedSize(queue?: string): Promise<number>;
    /**
     * Clear all jobs in a queue.
     *
     * @param {string} [queue] - The queue to clear
     * @returns {Promise<void>}
     */
    clear(queue?: string): Promise<void>;
    /**
     * Clear all queues.
     *
     * @returns {Promise<void>}
     */
    clearAll(): Promise<void>;
    /**
     * Release a job back onto the queue.
     *
     * @param {IQueueable} job - The job to release
     * @param {any} data - The job data
     * @param {number} [delay=0] - The delay in seconds
     * @param {string} [queue] - The queue to release to
     * @returns {Promise<void>}
     */
    release(job: IQueueable, data: any, delay?: number, queue?: string): Promise<void>;
    /**
     * Move a job to the failed queue.
     *
     * @param {IQueueable} job - The failed job
     * @param {any} data - The job data
     * @param {Error} error - The error that caused the failure
     * @returns {Promise<void>}
     */
    failed(job: IQueueable, data: any, error: Error): Promise<void>;
    /**
     * Get the name of the connection.
     *
     * @returns {string} The connection name
     */
    getName(): string;
    /**
     * Get the default queue for the connection.
     *
     * @returns {string} The default queue name
     */
    getDefaultQueue(): string;
    /**
     * Set the default queue for the connection.
     *
     * @param {string} queue - The default queue name
     */
    setDefaultQueue(queue: string): void;
}
/**
 * DI token for IQueueConnection interface
 */
declare namespace IQueueConnection {
    const $: unique symbol;
}

export { IQueueConnection };
