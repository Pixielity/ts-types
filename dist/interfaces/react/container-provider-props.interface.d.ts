import { ReactNode } from 'react';
import { I as IContainer } from '../../index-Dys3vr3F.js';
import 'inversify';
import '../application/service-provider.inteface.js';

/**
 * Props for the ContainerProvider component
 * Provides the container instance to the React component tree
 */
interface IContainerProviderProps {
    /**
     * The Container instance to provide
     */
    container: IContainer;
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
declare namespace IContainerProviderProps {
    /**
     * Symbol for injecting the container provider props service
     */
    const $: unique symbol;
}

export { IContainerProviderProps };
