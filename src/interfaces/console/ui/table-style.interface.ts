/**
 * Interface for table style options.
 *
 * Defines the visual appearance of tables using border characters
 * and optional color styles for terminal output.
 */
export interface ITableStyle {
  /**
   * Characters used for rendering table borders.
   * Example: top, bottom, left, right, middle, etc.
   */
  chars?: ITableBorderChars

  /**
   * Style settings for table headers and borders.
   * Typically used for applying ANSI colors.
   */
  style?: ITableStyleColors
}

/**
 * Interface representing characters used for drawing table borders.
 *
 * Defines each possible border and intersection character used
 * to render the table structure in the terminal.
 */
export interface ITableBorderChars {
  /**
   * Character used for the top border
   */
  top?: string

  /**
   * Character used for the intersection of top and mid columns
   */
  'top-mid'?: string

  /**
   * Character used for the top-left corner
   */
  'top-left'?: string

  /**
   * Character used for the top-right corner
   */
  'top-right'?: string

  /**
   * Character used for the bottom border
   */
  bottom?: string

  /**
   * Character used for the intersection of bottom and mid columns
   */
  'bottom-mid'?: string

  /**
   * Character used for the bottom-left corner
   */
  'bottom-left'?: string

  /**
   * Character used for the bottom-right corner
   */
  'bottom-right'?: string

  /**
   * Character used for the left border
   */
  left?: string

  /**
   * Character used for the intersection of left and mid rows
   */
  'left-mid'?: string

  /**
   * Character used for the middle separator between rows
   */
  mid?: string

  /**
   * Character used for the intersection of mid rows and mid columns
   */
  'mid-mid'?: string

  /**
   * Character used for the right border
   */
  right?: string

  /**
   * Character used for the intersection of right and mid rows
   */
  'right-mid'?: string

  /**
   * Character used between columns (vertical separator)
   */
  middle?: string
}

/**
 * Interface representing color styles for table output.
 *
 * Specifies which colors should be applied to table headers and borders.
 */
export interface ITableStyleColors {
  /**
   * Array of colors to apply to table headers
   */
  head?: string[]

  /**
   * Array of colors to apply to table borders
   */
  border?: string[]
}
