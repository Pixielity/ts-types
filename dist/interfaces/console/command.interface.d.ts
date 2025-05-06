import { IAsk } from './ask.interface.js';
import { IInput } from './input.interface.js';
import { IOutput } from './output.interface.js';
import { IProgressBarFormat } from './progress-bar-format.interface.js';
import { IProgressBar } from './progress-bar.interface.js';
import { ITableOutput } from './table-output.interface.js';
import { ITableStyle } from './table-style.interface.js';
import './question.interface.js';
import '../../enums/question-type.enum.js';

/**
 * Interface for console command classes.
 *
 * Defines the structure and lifecycle of a command,
 * including argument/option handling and execution hooks.
 */
interface ICommand {
    /**
     * Gets the name of the command.
     *
     * @returns The command name.
     */
    getName(): string;
    /**
     * Gets the description of the command.
     *
     * @returns The command description.
     */
    getDescription(): string;
    /**
     * Sets the input instance for the command.
     *
     * @param input - The input instance to set.
     */
    setInput(input: IInput): void;
    /**
     * Gets the current input instance.
     *
     * @returns The input instance.
     */
    getInput(): IInput;
    /**
     * Sets the output instance for the command.
     *
     * @param output - The output instance to set.
     */
    setOutput(output: IOutput): void;
    /**
     * Gets the current output instance.
     *
     * @returns The output instance.
     */
    getOutput(): IOutput;
    /**
     * Sets multiple arguments by index or name.
     *
     * @param args - Array of positional arguments.
     */
    setArguments(args: string[]): void;
    /**
     * Sets a single named argument.
     *
     * @param key - Argument key.
     * @param value - Argument value.
     */
    setArgument(key: string, value: any): void;
    /**
     * Gets all arguments.
     *
     * @returns A key-value map of arguments.
     */
    getArguments(): Record<string, any>;
    /**
     * Gets a single argument by name.
     *
     * @param key - Argument name.
     * @returns The value or undefined.
     */
    getArgument(key: string): any;
    /**
     * Sets multiple options by key.
     *
     * @param options - Key-value map of options.
     */
    setOptions(options: Record<string, any>): void;
    /**
     * Sets a single option.
     *
     * @param key - Option key.
     * @param value - Option value.
     */
    setOption(key: string, value: any): void;
    /**
     * Gets all options.
     *
     * @returns A key-value map of options.
     */
    getOptions(): Record<string, any>;
    /**
     * Gets a single option by key.
     *
     * @param key - Option name.
     * @returns The value or undefined.
     */
    getOption(key: string): any;
    /**
     * Allows a command to define its expected arguments and options.
     * Called before execution.
     */
    configure(): void;
    /**
     * Main execution logic of the command.
     * Must return a status code (or void).
     *
     * @returns Promise resolving to exit code or void.
     */
    execute(): Promise<number | void>;
    /**
     * Hook called before command execution.
     * Return false to cancel execution.
     *
     * @returns Whether to continue execution.
     */
    beforeExecute(): Promise<boolean>;
    /**
     * Hook called after command execution.
     *
     * @param exitCode - The result from execute().
     */
    afterExecute(exitCode: number | void): Promise<void>;
    /**
     * Ask utility class
     *
     * @returns Ask utility class
     */
    ask(): IAsk;
    /**
     * Creates a new ProgressBar instance
     *
     * @param {number} total - The total value
     * @param {IProgressBarFormat} format - The format options
     */
    progress(total: number, format?: IProgressBarFormat): IProgressBar;
    /**
     * Creates a new TableOutput instance
     *
     * @param {string[]} headers - The table headers
     * @param {ITableStyle} style - The table style
     */
    table(headers: string[], style?: ITableStyle): ITableOutput;
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
