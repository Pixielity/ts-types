import { ICommandShortcut } from './command-shortcut.interface.mjs';

/**
 * Command options interface
 */
interface ICommandOptions {
    /**
     * The name of the command
     */
    name: string;
    /**
     * The description of the command
     */
    description?: string;
    /**
     * Whether the command is hidden from the command list
     * Default is false
     */
    hidden?: boolean;
    /**
     * Aliases for the command
     */
    aliases?: string[];
    /**
     * Shortcuts for the command (e.g., "-l, --list")
     */
    shortcuts?: ICommandShortcut[];
    /**
     * Whether to inject the command into the container
     * Default is true
     */
    injectable?: boolean;
}

export type { ICommandOptions };
