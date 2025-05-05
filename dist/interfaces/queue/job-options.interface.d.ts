/**
 * Options for job processing.
 */
interface IJobOptions {
    /**
     * The queue to push the job to.
     */
    queue?: string;
    /**
     * The connection to use for the job.
     */
    connection?: string;
    /**
     * The delay in seconds before the job should be processed.
     */
    delay?: number;
    /**
     * The maximum number of attempts for the job.
     */
    tries?: number;
    /**
     * The timeout for the job in seconds.
     */
    timeout?: number;
    /**
     * The number of seconds to wait before retrying a job that has failed.
     * Can be a single number or an array of numbers for different retry intervals.
     */
    backoff?: number | number[];
    /**
     * The maximum number of unhandled exceptions to allow before failing.
     */
    maxExceptions?: number;
    /**
     * Whether the job should be encrypted.
     */
    encrypted?: boolean;
    /**
     * The middleware the job should pass through.
     */
    middleware?: string[];
    /**
     * Custom tags for the job for tracking and monitoring.
     */
    tags?: string[];
    /**
     * Job priority (lower number means higher priority).
     */
    priority?: number;
}

export type { IJobOptions };
