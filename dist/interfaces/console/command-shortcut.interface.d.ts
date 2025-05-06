/**
 * Command shortcut interface
 */
interface ICommandShortcut {
    /**
     * The shortcut flag (e.g., "-l, --list")
     */
    flag: string;
    /**
     * The description of the shortcut
     */
    description: string;
    /**
     * Default value for the shortcut (if applicable)
     */
    defaultValue?: any;
}

export type { ICommandShortcut };
