import { ICommand } from './command.interface.js';
import '../input.interface.js';
import '../output.interface.js';
import '../ui/ask.interface.js';
import '../ui/question.interface.js';
import '../../../enums/question-type.enum.js';
import '../ui/table-style.interface.js';
import '../ui/progress-bar.interface.js';
import '../ui/table-output.interface.js';
import '../ui/progress-bar-format.interface.js';

/**
 * Interface for command collector
 *
 * Discovers and collects commands from the file system.
 */
interface ICommandCollector {
    /**
     * Discovers commands in the specified directory
     *
     * @param {string} directory - The directory to scan for commands
     * @param {string} pattern - The glob pattern to match command files
     * @returns {Promise<ICommand[]>} The discovered commands
     */
    discoverCommands(directory: string, pattern?: string): Promise<ICommand[]>;
    /**
     * Gets all commands that have been registered with the container
     *
     * @returns {ICommand[]} The registered commands
     */
    getRegisteredCommands(): ICommand[];
    /**
     * Gets command metadata for a command class
     *
     * @param {Function} commandClass - The command class
     * @returns {any} The command metadata
     */
    getCommandMetadata(commandClass: Function): any;
}
/**
 * Namespace for ICommandCollector interface
 *
 * Contains token for dependency injection
 */
declare namespace ICommandCollector {
    /**
     * Token for the ICommandCollector interface
     * Used for dependency injection
     */
    const $: unique symbol;
}

export { ICommandCollector };
