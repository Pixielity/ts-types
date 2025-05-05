import type { IConfigSchema } from "./schema.interface"

/**
 * Interface for the configuration validator
 */
export interface IConfigValidator {
  /**
   * Set the configuration schemas
   *
   * @param schemas - The configuration schemas
   */
  setSchemas(schemas: Record<string, IConfigSchema>): void

  /**
   * Add a configuration schema
   *
   * @param key - The schema key
   * @param schema - The schema
   */
  addSchema(key: string, schema: IConfigSchema): void

  /**
   * Validate a configuration value against its schema
   *
   * @param key - The configuration key
   * @param value - The configuration value
   * @returns Whether the value is valid
   * @throws ConfigValidationError if validation fails
   */
  validate(key: string, value: any): boolean
}
