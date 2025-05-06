import type { ICommand } from './command.interface'

/**
 * Interface for the console application
 *
 * Manages the console commands and their execution.
 */
export interface IApplication {
  /**
   * Registers a command with the application
   *
   * @param {ICommand} command - The command to register
   * @returns {IApplication} - The application instance for chaining
   */
  register(command: ICommand): IApplication

  /**
   * Registers multiple commands with the application
   *
   * @param {ICommand[]} commands - The commands to register
   * @returns {IApplication} - The application instance for chaining
   */
  registerCommands(commands: ICommand[]): IApplication

  /**
   * Discovers and registers commands from a directory
   *
   * @param {string} directory - The directory to scan for commands
   * @param {string} pattern - The glob pattern to match command files
   * @returns {Promise<IApplication>} - The application instance for chaining
   */
  discoverCommands(directory: string, pattern?: string): Promise<IApplication>

  /**
   * Runs the application with the given arguments
   *
   * @param {string[]} argv - The command line arguments
   * @returns {Promise<void>}
   */
  run(argv?: string[]): Promise<void>
}

/**
 * Namespace for IApplication interface
 *
 * Contains token for dependency injection
 */
export namespace IApplication {
  /**
   * Token for the IApplication interface
   * Used for dependency injection
   */
  export const $ = Symbol('IApplication')
}
