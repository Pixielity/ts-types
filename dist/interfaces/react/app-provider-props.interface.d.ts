import { ReactNode } from 'react';
import { IApplication } from '../application/application.interface.js';
import '../../index-BKV0HewX.js';
import 'inversify';
import '../application/service-provider.inteface.js';
import '../../types/service-identifier.type.js';
import '../../types/newable.type.js';
import '../abstract.interface.js';

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
