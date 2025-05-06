import { ReactNode } from 'react';
import { IApplication } from '../application/application.interface.js';
import 'inversify';
import '../cache/cache.interface.js';
import '../cache/lock.interface.js';
import '../../types/service-identifier.type.js';
import '../../types/newable.type.js';
import '../abstract.interface.js';
import '../../service-provider.inteface-C8J1v-i3.js';
import '../config/repository.interface.js';
import '../config/schema.interface.js';
import '../../enums/config-enviroment.enum.js';

/**
 * Props for the AppProvider component
 * Provides the application instance to the React component tree
 */
interface IAppProviderProps {
    /**
     * The Application instance to provide
     */
    app: IApplication;
    /**
     * The children components
     */
    children: ReactNode;
    /**
     * Whether to create a new container scope
     * @default false
     */
    createScope?: boolean;
}
/**
 * Namespace containing symbols for dependency injection
 */
declare namespace IAppProviderProps {
    /**
     * Symbol for injecting the app provider props service
     */
    const $: unique symbol;
}

export { IAppProviderProps };
