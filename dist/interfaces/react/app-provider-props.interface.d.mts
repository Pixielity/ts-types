import { ReactNode } from 'react';
import { IApplication } from '../application/application.interface.mjs';
import 'inversify';
import '../cache/cache.interface.mjs';
import '../cache/lock.interface.mjs';
import '../../types/service-identifier.type.mjs';
import '../../types/newable.type.mjs';
import '../abstract.interface.mjs';
import '../../service-provider.inteface-zpr0Rznj.mjs';
import '../config/repository.interface.mjs';
import '../config/schema.interface.mjs';
import '../../enums/config-enviroment.enum.mjs';

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
