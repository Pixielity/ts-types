/**
 * Configuration loader interface
 * Responsible for loading configuration from various sources
 */
interface IConfigLoader {
    /**
     * Load configuration from a source
     *
     * @param source - The source to load from (file path, URL, etc.)
     * @returns A promise resolving to the loaded configuration
     */
    load(source: string): Promise<Record<string, any>>;
    /**
     * Check if the loader can load from a source
     *
     * @param source - The source to check
     * @returns Whether the loader can load from the source
     */
    canLoad(source: string): boolean;
}
/**
 * Namespace containing symbols for dependency injection
 */
declare namespace IConfigLoader {
    /**
     * Symbol for injecting the config loader service
     */
    const $: unique symbol;
}

export { IConfigLoader };
