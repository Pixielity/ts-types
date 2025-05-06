import { IConfigRepository } from './repository.interface.js'
import './schema.interface.js'
import '../../enums/config-enviroment.enum.js'

/**
 * Interface for the configuration repository
 */
interface IConfig extends IConfigRepository {}
/**
 * Namespace containing symbols for dependency injection
 */
declare namespace IConfig {
  /**
   * Symbol for injecting the cache manager service
   */
  const $: unique symbol
}

export { IConfig }
