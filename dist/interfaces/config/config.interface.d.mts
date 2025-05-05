import { IConfigRepository } from './repository.interface.mjs';
import './schema.interface.mjs';
import '../../enums/config-enviroment.enum.mjs';

/**
 * Interface for the configuration repository
 */
interface IConfig extends IConfigRepository {
}
/**
 * Namespace containing symbols for dependency injection
 */
declare namespace IConfig {
    /**
     * Symbol for injecting the cache manager service
     */
    const $: unique symbol;
}

export { IConfig };
