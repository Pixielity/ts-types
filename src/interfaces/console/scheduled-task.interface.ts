import type { ICommand } from './command.interface'
import type { IScheduleExpression } from './schedule-expression.interface'

/**
 * Interface for scheduled task
 *
 * Defines the structure of a scheduled task for the command scheduler.
 */
export interface IScheduledTask {
  /**
   * The command to run
   */
  command: ICommand

  /**
   * The arguments to pass to the command
   */
  args: string[]

  /**
   * The options to pass to the command
   */
  options: Record<string, any>

  /**
   * The schedule expression
   */
  expression: IScheduleExpression

  /**
   * The last time the task was run
   */
  lastRun?: Date

  /**
   * The next time the task will run
   */
  nextRun?: Date
}
