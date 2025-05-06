/**
 * Interface for console input
 *
 * Provides methods for accessing command line arguments and options.
 */
interface IInput {
    /**
     * Gets the command name from the input
     *
     * @returns {string | undefined} The command name or undefined if not provided
     */
    getCommandName(): string | undefined;
    /**
     * Gets an argument value by name
     *
     * @param {string} name - The name of the argument
     * @returns {string | undefined} The argument value or undefined if not provided
     */
    getArgument(name: string): string | undefined;
    /**
     * Gets all arguments
     *
     * @returns {Record<string, string>} Map of argument names to values
     */
    getArguments(): Record<string, string>;
    /**
     * Gets an option value by name
     *
     * @param {string} name - The name of the option
     * @returns {string | boolean | undefined} The option value or undefined if not provided
     */
    getOption(name: string): string | boolean | undefined;
    /**
     * Gets all options
     *
     * @returns {Record<string, string | boolean>} Map of option names to values
     */
    getOptions(): Record<string, string | boolean>;
    /**
     * Checks if an option is set
     *
     * @param {string} name - The name of the option
     * @returns {boolean} True if the option is set, false otherwise
     */
    hasOption(name: string): boolean;
}
/**
 * Namespace for IInput interface
 *
 * Contains token for dependency injection
 */
declare namespace IInput {
    /**
     * Token for the IInput interface
     * Used for dependency injection
     */
    const $: unique symbol;
}

export { IInput };
