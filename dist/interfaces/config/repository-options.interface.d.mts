import { IConfigSchema } from './schema.interface.mjs';
import { IConfigCacheOptions } from './cache-options.interface.mjs';

/**
 * Configuration repository options
 * Controls the behavior of the configuration repository
 */
interface IConfigRepositoryOptions {
    /**
     * Initial configuration items
     */
    items?: Record<string, any>;
    /**
     * Environment variable prefix
     * @default "APP_"
     */
    envPrefix?: string;
    /**
     * Cache options
     * @default { enabled: true }
     */
    cache?: boolean | IConfigCacheOptions;
    /**
     * Configuration schemas for validation
     */
    schemas?: Record<string, IConfigSchema>;
    /**
     * Whether to validate configuration values
     * @default false
     */
    validate?: boolean;
    /**
     * Configuration sources to load from
     * Can be file paths, URLs, or other source identifiers
     */
    sources?: string[];
    /**
     * Whether to watch for changes in configuration sources
     * @default false
     */
    watch?: boolean;
}
/**
 * Namespace containing symbols for dependency injection
 */
declare namespace IConfigRepositoryOptions {
    /**
     * Symbol for injecting the config repository options service
     */
    const $: unique symbol;
}

export { IConfigRepositoryOptions };
