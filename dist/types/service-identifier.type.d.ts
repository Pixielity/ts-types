import { Newable } from './newable.type.js'
import { Abstract } from '../interfaces/abstract.interface.js'

/**
 * Service Identifier type
 */
type ServiceIdentifier<T = unknown> = string | symbol | Newable<T> | Abstract<T>

export type { ServiceIdentifier }
