import { Newable } from './newable.type.mjs';
import { Abstract } from '../interfaces/abstract.interface.mjs';

/**
 * Service Identifier type
 */
type ServiceIdentifier<T = unknown> = string | symbol | Newable<T> | Abstract<T>;

export type { ServiceIdentifier };
