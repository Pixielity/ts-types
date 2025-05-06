import { ReactNode } from 'react';
import { a as IContainer } from '../../service-provider.inteface-C8J1v-i3.js';
import 'inversify';
import '../../types/service-identifier.type.js';
import '../../types/newable.type.js';
import '../abstract.interface.js';

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
