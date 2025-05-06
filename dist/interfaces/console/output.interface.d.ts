/**
 * Interface for console output
 *
 * Provides methods for writing to the console.
 */
interface IOutput {
    /**
     * Writes a message to the output
     *
     * @param {string} message - The message to write
     */
    write(message: string): void;
    /**
     * Writes a message to the output followed by a newline
     *
     * @param {string} message - The message to write
     */
    writeln(message: string): void;
    /**
     * Writes an error message to the output
     *
     * @param {string} message - The error message to write
     */
    error(message: string): void;
    /**
     * Writes a success message to the output
     *
     * @param {string} message - The success message to write
     */
    success(message: string): void;
    /**
     * Writes an info message to the output
     *
     * @param {string} message - The info message to write
     */
    info(message: string): void;
    /**
     * Writes a warning message to the output
     *
     * @param {string} message - The warning message to write
     */
    warning(message: string): void;
    /**
     * Writes a comment message to the output
     *
     * @param {string} message - The comment message to write
     */
    comment(message: string): void;
}
/**
 * Namespace for IOutput interface
 *
 * Contains token for dependency injection
 */
declare namespace IOutput {
    /**
     * Token for the IOutput interface
     * Used for dependency injection
     */
    const $: unique symbol;
}

export { IOutput };
