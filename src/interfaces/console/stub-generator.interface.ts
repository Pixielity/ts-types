/**
 * Interface for the stub generator
 *
 * Handles the generation of files from stub templates.
 */
export interface IStubGenerator {
  /**
   * Generates a file from a stub template
   *
   * @param {string} stubName - The name of the stub template
   * @param {string} outputPath - The path where the generated file will be saved
   * @param {Record<string, string>} replacements - Map of placeholders to their replacements
   * @returns {boolean} True if the file was generated successfully, false otherwise
   */
  generate(stubName: string, outputPath: string, replacements: Record<string, string>): boolean

  /**
   * Gets the list of available stub templates
   *
   * @returns {string[]} Array of stub template names
   */
  getAvailableStubs(): string[]
}

/**
 * Namespace for IStubGenerator interface
 *
 * Contains token for dependency injection
 */
export namespace IStubGenerator {
  /**
   * Token for the IStubGenerator interface
   * Used for dependency injection
   */
  export const $ = Symbol('IStubGenerator')
}
