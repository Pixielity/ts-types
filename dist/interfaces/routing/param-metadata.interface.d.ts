import { ParamType } from '../../enums/param-type.enum.js';

/**
 * Interface for parameter metadata
 * Describes how controller method parameters should be resolved
 */
interface IParamMetadata {
    /**
     * The parameter index in the method signature
     */
    index: number;
    /**
     * The parameter type (e.g., PARAM, QUERY, BODY)
     */
    type: ParamType;
    /**
     * The parameter name to extract from the request
     * If null, the entire object of the specified type is passed
     */
    name: string | null;
}
/**
 * Namespace containing symbols for dependency injection
 */
declare namespace IParamMetadata {
    /**
     * Symbol for injecting the param metadata service
     */
    const $: unique symbol;
}

export { IParamMetadata };
