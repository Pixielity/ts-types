import type { ReactNode } from 'react'
import type { IContainer } from '../container'

/**
 * Props for the ContainerProvider component
 * Provides the container instance to the React component tree
 */
export interface IContainerProviderProps {
  /**
   * The Container instance to provide
   */
  container: IContainer

  /**
   * The children components
   */
  children: ReactNode

  /**
   * Whether to create a new container scope
   * @default false
   */
  createScope?: boolean
}

/**
 * Namespace containing symbols for dependency injection
 */
export namespace IContainerProviderProps {
  /**
   * Symbol for injecting the container provider props service
   */
  export const $ = Symbol.for('IContainerProviderProps')
}
