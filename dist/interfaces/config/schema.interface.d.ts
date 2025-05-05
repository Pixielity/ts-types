/**
 * Configuration schema for validation
 * Based on JSON Schema structure
 */
interface IConfigSchema {
    /**
     * The expected type of the configuration value
     */
    type?: "string" | "number" | "integer" | "boolean" | "array" | "object" | "null";
    /**
     * Whether the value is required
     * @default false
     */
    required?: boolean;
    /**
     * The allowed values (enumeration)
     */
    enum?: any[];
    /**
     * The minimum value (for numbers)
     */
    minimum?: number;
    /**
     * The maximum value (for numbers)
     */
    maximum?: number;
    /**
     * The minimum length (for strings and arrays)
     */
    minLength?: number;
    /**
     * The maximum length (for strings and arrays)
     */
    maxLength?: number;
    /**
     * The pattern to match (for strings)
     */
    pattern?: string;
    /**
     * The properties (for objects)
     */
    properties?: Record<string, IConfigSchema>;
    /**
     * The items schema (for arrays)
     */
    items?: IConfigSchema;
    /**
     * Default value if not specified
     */
    default?: any;
    /**
     * Description of the configuration value
     */
    description?: string;
    /**
     * Additional properties (for objects)
     */
    [key: string]: any;
}

export type { IConfigSchema };
