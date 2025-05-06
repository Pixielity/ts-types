import { ICommand } from './command.interface.mjs';
import { IScheduleExpression } from './schedule-expression.interface.mjs';
import './ask.interface.mjs';
import './question.interface.mjs';
import '../../enums/question-type.enum.mjs';
import './input.interface.mjs';
import './output.interface.mjs';
import './progress-bar-format.interface.mjs';
import './progress-bar.interface.mjs';
import './table-output.interface.mjs';
import './table-style.interface.mjs';

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
