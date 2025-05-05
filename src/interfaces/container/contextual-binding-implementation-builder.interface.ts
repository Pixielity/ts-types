import type { IContainer } from "./container.interface"

/**
 * Interface for the contextual binding implementation builder
 * Represents the "give" part of the contextual binding chain
 */
export interface IContextualBindingImplementationBuilder {
  /**
   * Define the implementation to use for the contextual binding
   *
   * @param implementation - The implementation to use
   * @returns The container instance
   *
   * @example
   * \`\`\`typescript
   * // Bind a concrete implementation for a specific context
   * container.when('photoController').needs('filesystem').give(new LocalFilesystem());
   *
   * // Bind a factory function for a specific context
   * container.when('videoController').needs('filesystem').give(() => new CloudFilesystem());
   * \`\`\`
   */
  give(implementation: any): IContainer
}

/**
 * Namespace containing symbols for dependency injection
 */
export namespace IContextualBindingImplementationBuilder {
  /**
   * Symbol for injecting the contextual binding implementation builder service
   */
  export const $ = Symbol.for("IContextualBindingImplementationBuilder")
}
