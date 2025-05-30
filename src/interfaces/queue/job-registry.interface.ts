import type { IQueueable } from './queueable.interface'

/**
 * Interface for job registry
 * The job registry is responsible for registering and resolving job classes
 */
export interface IJobRegistry {
  /**
   * Register a job class.
   *
   * @param name - The name of the job class
   * @param jobClass - The job class constructor
   */
  register(name: string, jobClass: new (...args: any[]) => IQueueable): void

  /**
   * Register multiple job classes.
   *
   * @param jobClasses - Map of job class names to constructors
   */
  registerMany(jobClasses: Map<string, new (...args: any[]) => IQueueable>): void

  /**
   * Check if a job class is registered.
   *
   * @param name - The name of the job class
   * @returns True if the job class is registered
   */
  has(name: string): boolean

  /**
   * Get a job class by name.
   *
   * @param name - The name of the job class
   * @returns The job class constructor
   */
  get(name: string): new (...args: any[]) => IQueueable

  /**
   * Create a new instance of a job class.
   *
   * @param name - The name of the job class
   * @param args - Arguments to pass to the constructor
   * @returns A new instance of the job class
   */
  make(name: string, ...args: any[]): IQueueable

  /**
   * Get all registered job classes.
   *
   * @returns Map of job class names to constructors
   */
  all(): Map<string, new (...args: any[]) => IQueueable>
}

/**
 * DI token for IJobRegistry interface
 */
export namespace IJobRegistry {
  export const $ = Symbol.for('IJobRegistry')
}
