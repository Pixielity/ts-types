/**
 * Interface for table output
 *
 * Provides methods for displaying tables in the console.
 */
interface ITableOutput {
  /**
   * Adds a row to the table
   *
   * @param {any[]} row - The row data
   * @returns {ITableOutput} The table instance for chaining
   */
  addRow(row: any[]): ITableOutput
  /**
   * Adds multiple rows to the table
   *
   * @param {any[][]} rows - The rows data
   * @returns {ITableOutput} The table instance for chaining
   */
  addRows(rows: any[][]): ITableOutput
  /**
   * Renders the table to a string
   *
   * @returns {string} The rendered table
   */
  toString(): string
  /**
   * Renders the table to the console
   */
  render(): void
}
/**
 * Namespace for ITableOutput interface
 *
 * Contains token for dependency injection
 */
declare namespace ITableOutput {
  /**
   * Token for the ITableOutput interface
   * Used for dependency injection
   */
  const $: unique symbol
}

export { ITableOutput }
