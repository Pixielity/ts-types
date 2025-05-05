import { IConfigRepository } from './repository.interface'

/**
 * Interface for the configuration repository
 */
export interface IConfig extends IConfigRepository {}

/**
 * Namespace containing symbols for dependency injection
 */
export namespace IConfig {
  /**
   * Symbol for injecting the cache manager service
   */
  export const $ = Symbol.for('IConfig')
}
