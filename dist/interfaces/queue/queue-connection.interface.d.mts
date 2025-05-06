import { IQueueable } from './queueable.interface.mjs';
import './should-queue.interface.mjs';

/**
 * Interface for queue connections.
 * Queue connections are responsible for processing queueable jobs.
 */
interface IQueueConnection {
    /**
     * Set the key prefix for queue items.
     *
     * @param prefix - The prefix to use
     */
    setKeyPrefix(prefix: string): void;
    /**
     * Push a new job onto the queue.
     *
     * @param job - The job to queue
     * @param data - Additional data for the job
     * @param queue - The queue to push to
     * @returns Promise resolving when the job is pushed
     */
    push(job: IQueueable, data: any, queue?: string): Promise<void>;
    /**
     * Push a new job onto the queue after a delay.
     *
     * @param delay - The delay in seconds
     * @param job - The job to queue
     * @param data - Additional data for the job
     * @param queue - The queue to push to
     * @returns Promise resolving when the job is pushed
     */
    later(delay: number, job: IQueueable, data: any, queue?: string): Promise<void>;
    /**
     * Push an array of jobs onto the queue.
     *
     * @param jobs - The jobs to queue
     * @param data - Additional data for the jobs
     * @param queue - The queue to push to
     * @returns Promise resolving when all jobs are pushed
     */
    bulk(jobs: IQueueable[], data: any, queue?: string): Promise<void>;
    /**
     * Process jobs in a queue.
     *
     * @param queue - The queue to process
     * @param count - The number of jobs to process
     * @returns The number of jobs processed
     */
    process(queue?: string, count?: number): Promise<number>;
    /**
     * Get the number of jobs in a queue.
     *
     * @param queue - The queue name
     * @returns The number of jobs
     */
    size(queue?: string): Promise<number>;
    /**
     * Get the number of delayed jobs in a queue.
     *
     * @param queue - The queue name
     * @returns The number of delayed jobs
     */
    delayedSize(queue?: string): Promise<number>;
    /**
     * Clear all jobs in a queue.
     *
     * @param queue - The queue to clear
     * @returns Promise resolving when the queue is cleared
     */
    clear(queue?: string): Promise<void>;
    /**
     * Clear all queues.
     *
     * @returns Promise resolving when all queues are cleared
     */
    clearAll(): Promise<void>;
    /**
     * Release a job back onto the queue.
     *
     * @param job - The job to release
     * @param data - The job data
     * @param delay - The delay in seconds
     * @param queue - The queue to release to
     * @returns Promise resolving when the job is released
     */
    release(job: IQueueable, data: any, delay?: number, queue?: string): Promise<void>;
    /**
     * Move a job to the failed queue.
     *
     * @param job - The failed job
     * @param data - The job data
     * @param error - The error that caused the failure
     * @returns Promise resolving when the job is moved
     */
    failed(job: IQueueable, data: any, error: Error): Promise<void>;
    /**
     * Report progress for a job.
     *
     * @param job - The job to report progress for
     * @param data - The job data
     * @param progress - The progress percentage (0-100)
     * @param progressData - Additional progress data
     * @returns Promise resolving when the progress is reported
     */
    reportProgress?(job: IQueueable, data: any, progress: number, progressData?: any): Promise<void>;
    /**
     * Listen for job events.
     *
     * @param event - The event name
     * @param callback - The callback function
     * @returns A function to remove the listener
     */
    on?(event: string, callback: (data: any) => void): () => void;
    /**
     * Get all queues.
     *
     * @returns Promise resolving with an array of queue names
     */
    getQueues(): Promise<string[]>;
    /**
     * Get all jobs in a queue.
     *
     * @param queue - The queue name
     * @returns Promise resolving with an array of jobs
     */
    getJobs(queue?: string): Promise<Array<{
        id: string;
        job: IQueueable;
        data: any;
        executeAt: number;
        attempts: number;
    }>>;
    /**
     * Get all failed jobs.
     *
     * @returns Promise resolving with an array of failed jobs
     */
    getFailedJobs(): Promise<Array<{
        id: string;
        job: IQueueable;
        data: any;
        error: Error;
        failedAt: number;
    }>>;
    /**
     * Retry a failed job.
     *
     * @param id - The ID of the failed job
     * @returns Promise resolving when the job is retried
     */
    retryFailed(id: string): Promise<void>;
    /**
     * Retry all failed jobs.
     *
     * @returns Promise resolving with the number of jobs retried
     */
    retryAllFailed(): Promise<number>;
    /**
     * Delete a failed job.
     *
     * @param id - The ID of the failed job
     * @returns Promise resolving when the job is deleted
     */
    forgetFailed(id: string): Promise<void>;
    /**
     * Delete all failed jobs.
     *
     * @returns Promise resolving when all failed jobs are deleted
     */
    flushFailed(): Promise<void>;
    /**
     * Store a restart signal.
     *
     * @returns Promise resolving when the signal is stored
     */
    storeRestartSignal(): Promise<void>;
    /**
     * Store a stop signal.
     *
     * @returns Promise resolving when the signal is stored
     */
    storeStopSignal(): Promise<void>;
    /**
     * Check if a restart signal exists.
     *
     * @returns Promise resolving with true if a restart signal exists
     */
    shouldRestart(): Promise<boolean>;
    /**
     * Check if a stop signal exists.
     *
     * @returns Promise resolving with true if a stop signal exists
     */
    shouldStop(): Promise<boolean>;
}
/**
 * DI token for IQueueConnection interface
 */
declare namespace IQueueConnection {
    const $: unique symbol;
}

export { IQueueConnection };
