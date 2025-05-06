import { IQueueConnection } from './queue-connection.interface.js';
import { IQueueable } from './queueable.interface.js';
import { IWorker } from './worker.interface.js';
import './should-queue.interface.js';
import '../../enums/worker-status.enum.js';

/**
 * Interface for the queue manager.
 * The queue manager is responsible for managing queue connections and dispatching jobs.
 */
interface IQueueManager {
    /**
     * Add a queue connection.
     *
     * @param name - The connection name
     * @param connection - The queue connection
     */
    addConnection(name: string, connection: IQueueConnection): void;
    /**
     * Get a queue connection by name.
     *
     * @param name - The connection name (or default if not provided)
     * @returns The queue connection
     */
    connection(name?: string): IQueueConnection;
    /**
     * Set the default connection name.
     *
     * @param name - The default connection name
     */
    setDefaultConnection(name: string): void;
    /**
     * Create a worker for a connection and queue.
     *
     * @param connectionName - The connection name
     * @param queue - The queue name
     * @returns The worker
     */
    createWorker(connectionName?: string, queue?: string): IWorker;
    /**
     * Push a new job onto the queue.
     *
     * @param job - The job to queue
     * @param data - Additional data for the job
     * @param connectionName - The connection name
     * @param queue - The queue name
     * @returns Promise resolving when the job is pushed
     */
    push(job: IQueueable, data: any, connectionName?: string | null, queue?: string | null): Promise<void>;
    /**
     * Push a new job onto the queue after a delay.
     *
     * @param delay - The delay in seconds
     * @param job - The job to queue
     * @param data - Additional data for the job
     * @param connectionName - The connection name
     * @param queue - The queue name
     * @returns Promise resolving when the job is pushed
     */
    later(delay: number, job: IQueueable, data: any, connectionName?: string | null, queue?: string | null): Promise<void>;
    /**
     * Push an array of jobs onto the queue.
     *
     * @param jobs - The jobs to queue
     * @param data - Additional data for the jobs
     * @param connectionName - The connection name
     * @param queue - The queue name
     * @returns Promise resolving when all jobs are pushed
     */
    bulk(jobs: IQueueable[], data: any, connectionName?: string | null, queue?: string | null): Promise<void>;
    /**
     * Release a job back onto the queue.
     *
     * @param job - The job to release
     * @param data - The job data
     * @param delay - The delay in seconds
     * @param connectionName - The connection name
     * @param queue - The queue name
     * @returns Promise resolving when the job is released
     */
    release(job: IQueueable, data: any, delay?: number, connectionName?: string | null, queue?: string | null): Promise<void>;
    /**
     * Move a job to the failed queue.
     *
     * @param job - The failed job
     * @param data - The job data
     * @param error - The error that caused the failure
     * @param connectionName - The connection name
     * @returns Promise resolving when the job is moved
     */
    failed(job: IQueueable, data: any, error: Error, connectionName?: string | null): Promise<void>;
    /**
     * Report progress for a job.
     *
     * @param job - The job to report progress for
     * @param data - The job data
     * @param progress - The progress percentage (0-100)
     * @param progressData - Additional progress data
     * @param connectionName - The connection name
     * @returns Promise resolving when the progress is reported
     */
    reportProgress(job: IQueueable, data: any, progress: number, progressData?: any, connectionName?: string | null): Promise<void>;
    /**
     * Listen for job events.
     *
     * @param event - The event name
     * @param callback - The callback function
     * @param connectionName - The connection name
     * @returns A function to remove the listener
     */
    on(event: string, callback: (data: any) => void, connectionName?: string | null): () => void;
}
/**
 * DI token for IQueueManager interface
 */
declare namespace IQueueManager {
    const $: unique symbol;
}

export { IQueueManager };
