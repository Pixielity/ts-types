/**
 * Options for creating a class decorator
 * Controls how the decorator modifies the target class
 */
export interface IClassDecoratorOptions {
  /**
   * Whether to copy prototype properties
   * @default true
   */
  copyPrototype?: boolean

  /**
   * Whether to copy static properties
   * @default true
   */
  copyStatic?: boolean

  /**
   * Whether to copy metadata
   * @default true
   */
  copyMetadata?: boolean

  /**
   * A function to run before the constructor is called
   * Can be used to prepare the environment or validate arguments
   */
  beforeConstructor?: (target: any, args: any[]) => void

  /**
   * A function to run after the constructor is called
   * Can be used to modify the created instance
   */
  afterConstructor?: (instance: any, target: any, args: any[]) => void

  /**
   * A function to transform the instance after creation
   * Can return a completely different object
   */
  transformInstance?: (instance: any, target: any, args: any[]) => any

  /**
   * Whether to inherit parent class decorators
   * @default true
   */
  inheritDecorators?: boolean

  /**
   * Whether to seal the resulting class
   * @default false
   */
  seal?: boolean
}

/**
 * Namespace containing symbols for dependency injection
 */
export namespace IClassDecoratorOptions {
  /**
   * Symbol for injecting the class decorator options service
   */
  export const $ = Symbol.for('IClassDecoratorOptions')
}
