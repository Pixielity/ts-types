import { ICommand } from './command.interface.js';
import { IScheduleExpression } from './schedule-expression.interface.js';
import './ask.interface.js';
import './question.interface.js';
import '../../enums/question-type.enum.js';
import './input.interface.js';
import './output.interface.js';
import './progress-bar-format.interface.js';
import './progress-bar.interface.js';
import './table-output.interface.js';
import './table-style.interface.js';

/**
 * Interface for scheduled task
 *
 * Defines the structure of a scheduled task for the command scheduler.
 */
interface IScheduledTask {
    /**
     * The command to run
     */
    command: ICommand;
    /**
     * The arguments to pass to the command
     */
    args: string[];
    /**
     * The options to pass to the command
     */
    options: Record<string, any>;
    /**
     * The schedule expression
     */
    expression: IScheduleExpression;
    /**
     * The last time the task was run
     */
    lastRun?: Date;
    /**
     * The next time the task will run
     */
    nextRun?: Date;
}

export type { IScheduledTask };
