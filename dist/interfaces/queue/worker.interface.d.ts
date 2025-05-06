import { WorkerStatus } from '../../enums/worker-status.enum.js';

/**
 * Interface for queue workers.
 * Workers are responsible for processing jobs from a queue.
 */
interface IWorker {
    /**
     * Start the worker.
     *
     * @returns Promise resolving when the worker is started
     */
    start(): Promise<void>;
    /**
     * Stop the worker.
     *
     * @returns Promise resolving when the worker is stopped
     */
    stop(): Promise<void>;
    /**
     * Process the next job on the queue.
     *
     * @param queue - The queue to process
     * @returns Promise resolving to true if a job was processed
     */
    processNext(queue?: string): Promise<boolean>;
    /**
     * Get the current status of the worker.
     *
     * @returns The worker status
     */
    getStatus(): WorkerStatus;
    /**
     * Set the maximum number of attempts for failed jobs.
     *
     * @param maxAttempts - The maximum number of attempts
     */
    setMaxAttempts(maxAttempts: number): void;
    /**
     * Set the timeout for jobs.
     *
     * @param timeout - The timeout in seconds
     */
    setTimeout(timeout: number): void;
    /**
     * Set the sleep time between polling the queue.
     *
     * @param sleep - The sleep time in seconds
     */
    setSleep(sleep: number): void;
    /**
     * Set the concurrency level.
     *
     * @param concurrency - The number of jobs to process concurrently
     */
    setConcurrency(concurrency: number): void;
    /**
     * Listen for worker events.
     *
     * @param event - The event name
     * @param callback - The callback function
     * @returns A function to remove the listener
     */
    on(event: string, callback: (data: any) => void): () => void;
}
/**
 * DI token for IWorker interface
 */
declare namespace IWorker {
    const $: unique symbol;
}

export { IWorker };
