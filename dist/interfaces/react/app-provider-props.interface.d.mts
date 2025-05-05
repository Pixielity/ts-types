import { ReactNode } from 'react';
import { IApplication } from '../application/application.interface.mjs';
import '../../index-CeVQL4G4.mjs';
import 'inversify';
import '../application/service-provider.inteface.mjs';

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
