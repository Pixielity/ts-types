import type { IContainer } from "./container.interface"
import type { IContextualBindingImplementationBuilder } from "./contextual-binding-implementation-builder.interface"

/**
 * Interface for the contextual binding builder
 * Represents the "needs" part of the contextual binding chain
 */
export interface IContextualBindingBuilder {
  /**
   * Define the abstract type that the contextual binding is for
   *
   * @param abstract - The abstract type that the concrete implementation needs
   * @returns A builder for defining the implementation
   *
   * @example
   * \`\`\`typescript
   * // Define what the PhotoController needs
   * container.when('photoController').needs('filesystem');
   *
   * // Define what the UserService needs
   * container.when(UserService).needs('repository');
   * \`\`\`
   */
  needs(abstract: string | Function): IContextualBindingImplementationBuilder
}

/**
 * Factory function to create a contextual binding builder
 *
 * @param container - The container instance
 * @param concrete - The concrete implementation that needs a dependency
 * @returns A new contextual binding builder instance
 */
export interface IContextualBindingBuilderFactory {
  make(container: IContainer, concrete: string | Function): IContextualBindingBuilder
}

/**
 * Namespace containing symbols for dependency injection
 */
export namespace IContextualBindingBuilder {
  /**
   * Symbol for injecting the contextual binding builder service
   */
  export const $ = Symbol.for("IContextualBindingBuilder")
}

/**
 * Namespace containing symbols for dependency injection
 */
export namespace IContextualBindingBuilderFactory {
  /**
   * Symbol for injecting the contextual binding builder factory service
   */
  export const $ = Symbol.for("IContextualBindingBuilderFactory")
}
