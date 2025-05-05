import { Newable } from './newable.type'
import { Abstract } from '../interfaces'

/**
 * Service Identifier type
 */
export type ServiceIdentifier<T = unknown> = string | symbol | Newable<T> | Abstract<T>
