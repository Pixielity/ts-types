import { ReactNode } from 'react';
import { I as IContainer } from '../../index-BPvk6K5t.mjs';
import 'inversify';
import '../application/service-provider.inteface.mjs';
import '../../types/service-identifier.type.mjs';
import '../../types/newable.type.mjs';
import '../abstract.interface.mjs';

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
