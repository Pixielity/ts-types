import { ICommand } from '../command/command.interface.mjs';
import { IScheduleExpression } from './expression.interface.mjs';
import '../input.interface.mjs';
import '../output.interface.mjs';
import '../ui/ask.interface.mjs';
import '../ui/question.interface.mjs';
import '../../../enums/question-type.enum.mjs';
import '../ui/table-style.interface.mjs';
import '../ui/progress-bar.interface.mjs';
import '../ui/table-output.interface.mjs';
import '../ui/progress-bar-format.interface.mjs';

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
