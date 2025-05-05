import { IRouteDefinition } from './route-definition.interface.js';
import '../../types/http-method.type.js';
import './param-metadata.interface.js';
import '../../enums/param-type.enum.js';

/**
 * Interface for controller definitions
 * Contains all metadata needed to register and handle a controller
 */
interface IControllerDefinition {
    /**
     * The controller constructor
     */
    controller: any;
    /**
     * The route prefix for all routes in this controller
     */
    prefix: string;
    /**
     * The controller-level middleware (applied to all routes)
     */
    middleware: any[];
    /**
     * The controller-level guards (applied to all routes)
     */
    guards: any[];
    /**
     * The controller routes
     */
    routes: IRouteDefinition[];
    /**
     * Additional metadata for custom extensions
     */
    metadata: Record<string, any>;
}
/**
 * Namespace containing symbols for dependency injection
 */
declare namespace IControllerDefinition {
    /**
     * Symbol for injecting the controller definition service
     */
    const $: unique symbol;
}

export { IControllerDefinition };
