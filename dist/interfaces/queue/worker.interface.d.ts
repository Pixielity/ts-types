/**
 * Interface for queue workers.
 * Workers are responsible for processing jobs from a queue.
 */
interface IWorker {
    /**
     * Start the worker.
     *
     * @returns {Promise<void>}
     */
    start(): Promise<void>;
    /**
     * Stop the worker.
     *
     * @returns {Promise<void>}
     */
    stop(): Promise<void>;
    /**
     * Process the next job on the queue.
     *
     * @param {string} [queue] - The queue to process
     * @returns {Promise<boolean>} True if a job was processed
     */
    processNext(queue?: string): Promise<boolean>;
    /**
     * Get the current status of the worker.
     *
     * @returns {string} The worker status
     */
    getStatus(): string;
    /**
     * Set the maximum number of attempts for failed jobs.
     *
     * @param {number} maxAttempts - The maximum number of attempts
     */
    setMaxAttempts(maxAttempts: number): void;
    /**
     * Set the timeout for jobs.
     *
     * @param {number} timeout - The timeout in seconds
     */
    setTimeout(timeout: number): void;
    /**
     * Set the sleep time between polling the queue.
     *
     * @param {number} sleep - The sleep time in seconds
     */
    setSleep(sleep: number): void;
    /**
     * Get the worker ID.
     *
     * @returns {string} The worker ID
     */
    getId(): string;
    /**
     * Get the number of jobs processed by this worker.
     *
     * @returns {number} The number of jobs processed
     */
    getProcessedCount(): number;
    /**
     * Get the number of failed jobs.
     *
     * @returns {number} The number of failed jobs
     */
    getFailedCount(): number;
    /**
     * Register an event handler for worker events.
     *
     * @param {string} event - The event name
     * @param {Function} handler - The event handler
     * @returns {() => void} A function to remove the event handler
     */
    on(event: string, handler: Function): () => void;
}
/**
 * DI token for IWorker interface
 */
declare namespace IWorker {
    const $: unique symbol;
}

export { IWorker };
