import { ReactNode } from 'react';
import { a as IContainer } from '../../service-provider.inteface-Csla60x6.mjs';
import 'inversify';
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
