import type { ReactNode } from "react"
import type { IApplication } from "../application"

/**
 * Props for the AppProvider component
 * Provides the application instance to the React component tree
 */
export interface IAppProviderProps {
  /**
   * The Application instance to provide
   */
  app: IApplication

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
export namespace IAppProviderProps {
  /**
   * Symbol for injecting the app provider props service
   */
  export const $ = Symbol.for("IAppProviderProps")
}
