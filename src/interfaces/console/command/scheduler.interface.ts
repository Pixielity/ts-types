import type { IScheduledTask } from '../schedule/task.interface'
import type { IScheduleExpression } from '../schedule/expression.interface'

/**
 * Interface for the command scheduler
 *
 * Schedules commands to run at specific intervals.
 */
export interface ICommandScheduler {
  /**
   * Schedules a command to run at a specific interval
   *
   * @param {string} commandName - The name of the command
   * @param {IScheduleExpression} expression - The schedule expression
   * @param {string[]} args - The arguments to pass to the command
   * @param {Record<string, any>} options - The options to pass to the command
   * @returns {ICommandScheduler} The scheduler instance for chaining
   */
  schedule(
    commandName: string,
    expression: IScheduleExpression,
    args?: string[],
    options?: Record<string, any>,
  ): ICommandScheduler

  /**
   * Starts the scheduler
   *
   * @param {number} interval - The interval in milliseconds to check for tasks to run
   * @returns {ICommandScheduler} The scheduler instance for chaining
   */
  start(interval?: number): ICommandScheduler

  /**
   * Stops the scheduler
   *
   * @returns {ICommandScheduler} The scheduler instance for chaining
   */
  stop(): ICommandScheduler

  /**
   * Gets all scheduled tasks
   *
   * @returns {IScheduledTask[]} The scheduled tasks
   */
  getTasks(): IScheduledTask[]

  /**
   * Clears all scheduled tasks
   *
   * @returns {ICommandScheduler} The scheduler instance for chaining
   */
  clearTasks(): ICommandScheduler
}

/**
 * Namespace for ICommandScheduler interface
 *
 * Contains token for dependency injection
 */
export namespace ICommandScheduler {
  /**
   * Token for the ICommandScheduler interface
   * Used for dependency injection
   */
  export const $ = Symbol('ICommandScheduler')
}
