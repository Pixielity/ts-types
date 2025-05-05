/**
 * Interface for table style options
 *
 * Defines the styling options for tables.
 */
interface ITableStyle {
    /**
     * The border characters
     */
    chars?: {
        top?: string;
        "top-mid"?: string;
        "top-left"?: string;
        "top-right"?: string;
        bottom?: string;
        "bottom-mid"?: string;
        "bottom-left"?: string;
        "bottom-right"?: string;
        left?: string;
        "left-mid"?: string;
        mid?: string;
        "mid-mid"?: string;
        right?: string;
        "right-mid"?: string;
        middle?: string;
    };
    /**
     * The table style (head, border)
     */
    style?: {
        head?: string[];
        border?: string[];
    };
}

export type { ITableStyle };
