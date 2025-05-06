/**
 * Options for the Config decorator
 * Controls how configuration values are injected into class properties
 */
interface IConfigOptions {
    /**
     * The configuration key to retrieve
     */
    key: string;
    /**
     * The default value to use if the configuration key doesn't exist
     */
    defaultValue?: any;
    /**
     * The enviroment variables
     */
    env?: string;
    /**
     * Whether to refresh the value when accessed
     * When true, the value is retrieved from the config repository each time
     * @default false
     */
    refresh?: boolean;
    /**
     * Transform function to apply to the value
     * Allows custom formatting or type conversion
     */
    transform?: (value: any) => any;
    /**
     * Whether to validate the value against its schema
     * @default true
     */
    validate?: boolean;
}
/**
 * Namespace containing symbols for dependency injection
 */
declare namespace IConfigOptions {
    /**
     * Symbol for injecting the config options service
     */
    const $: unique symbol;
}

export { IConfigOptions };
