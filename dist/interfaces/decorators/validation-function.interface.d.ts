import { ValidationArguments } from 'class-validator'

/**
 * Interface for validation function
 * Used for custom validation rules
 */
interface IValidationFunction {
  /**
   * Validate a value
   *
   * @param value - The value to validate
   * @param args - The validation arguments
   * @returns Whether the value is valid or a promise that resolves to whether the value is valid
   */
  (value: any, args: ValidationArguments): boolean | Promise<boolean>
}
/**
 * Namespace containing symbols for dependency injection
 */
declare namespace IValidationFunction {
  /**
   * Symbol for injecting the validation function service
   */
  const $: unique symbol
}

export { IValidationFunction }
