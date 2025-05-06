/**
 * Worker status enum
 * Represents the possible states of a queue worker
 */
export enum WorkerStatus {
  /**
   * Worker is idle and ready to process jobs
   */
  IDLE = 'idle',

  /**
   * Worker is currently processing jobs
   */
  RUNNING = 'running',

  /**
   * Worker is paused and not processing jobs
   */
  PAUSED = 'paused',

  /**
   * Worker has been stopped
   */
  STOPPED = 'stopped',
}
