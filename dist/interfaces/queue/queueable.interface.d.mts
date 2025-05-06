import { IShouldQueue } from './should-queue.interface.mjs';

/**
 * Interface for queueable jobs.
 * Queueable items can be processed asynchronously through a queue.
 */
interface IQueueable extends IShouldQueue {
    /**
     * Handle the job.
     *
     * @param data - The job data
     * @returns Promise resolving when the job is complete
     */
    handle(data: any): Promise<void>;
    /**
     * Get the middleware the job should pass through.
     *
     * @returns Array of middleware names
     */
    middleware?(): string[];
    /**
     * Determine if the job should be encrypted.
     *
     * @returns True if the job should be encrypted
     */
    shouldBeEncrypted?(): boolean;
    /**
     * The number of times the job may be attempted.
     *
     * @returns The maximum number of attempts
     */
    tries?(): number;
    /**
     * The number of seconds the job can run before timing out.
     *
     * @returns The timeout in seconds
     */
    timeout?(): number;
    /**
     * Calculate the number of seconds to wait before retrying the job.
     *
     * @param attempt - The current attempt number
     * @returns The number of seconds to wait
     */
    retryAfter?(attempt: number): number;
    /**
     * Determine if the job should be released back onto the queue.
     *
     * @param error - The error that caused the job to fail
     * @returns True if the job should be released
     */
    shouldRelease?(error: Error): boolean;
    /**
     * Handle a job failure.
     *
     * @param error - The error that caused the job to fail
     * @returns Promise resolving when the failure is handled
     */
    failed?(error: Error): Promise<void>;
    /**
     * Report progress of the job.
     *
     * @param progress - The progress percentage (0-100)
     * @param data - Additional progress data
     */
    reportProgress?(progress: number, data?: any): Promise<void>;
}
/**
 * DI token for IQueueable interface
 */
declare namespace IQueueable {
    const $: unique symbol;
}

export { IQueueable };
