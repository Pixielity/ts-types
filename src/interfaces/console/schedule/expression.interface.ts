/**
 * Interface for schedule expression
 *
 * Defines the structure of a schedule expression for the command scheduler.
 */
export interface IScheduleExpression {
  /**
   * The minute (0-59)
   */
  minute?: number | string

  /**
   * The hour (0-23)
   */
  hour?: number | string

  /**
   * The day of the month (1-31)
   */
  dayOfMonth?: number | string

  /**
   * The month (1-12)
   */
  month?: number | string

  /**
   * The day of the week (0-6, 0 is Sunday)
   */
  dayOfWeek?: number | string
}
