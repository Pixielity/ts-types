import { IInput } from './input.interface.js';
import { IOutput } from './output.interface.js';

/**
 * Interface for console commands
 *
 * All commands must implement this interface to be registered
 * and executed by the console application.
 */
interface ICommand {
    /**
     * Gets the name of the command
     *
     * @returns {string} The command name
     */
    getName(): string;
    /**
     * Gets the description of the command
     *
     * @returns {string} The command description
     */
    getDescription(): string;
    /**
     * Configures the command with options and arguments
     */
    configure(): void;
    /**
     * Sets the input instance
     *
     * @param {IInput} input - The input instance
     */
    setInput(input: IInput): void;
    /**
     * Gets the input instance
     *
     * @returns {IInput} The input instance
     */
    getInput(): IInput;
    /**
     * Sets the output instance
     *
     * @param {IOutput} output - The output instance
     */
    setOutput(output: IOutput): void;
    /**
     * Gets the output instance
     *
     * @returns {IOutput} The output instance
     */
    getOutput(): IOutput;
    /**
     * Sets the command arguments
     *
     * @param {string[]} args - The command arguments
     */
    setArguments(args: string[]): void;
    /**
     * Sets the command options
     *
     * @param {Record<string, any>} options - The command options
     */
    setOptions(options: Record<string, any>): void;
    /**
     * Executes the command
     *
     * @returns {Promise<number | void>} The exit code or void
     */
    execute(): Promise<number | void>;
    /**
     * Hook that runs before command execution
     *
     * @returns {Promise<boolean>} True if execution should continue, false to abort
     */
    beforeExecute?(): Promise<boolean>;
    /**
     * Hook that runs after command execution
     *
     * @param {number | void} exitCode - The exit code from the command
     * @returns {Promise<void>}
     */
    afterExecute?(exitCode: number | void): Promise<void>;
}
/**
 * Namespace for ICommand interface
 *
 * Contains token for dependency injection
 */
declare namespace ICommand {
    /**
     * Token for the ICommand interface
     * Used for dependency injection
     */
    const $: unique symbol;
}

export { ICommand };
