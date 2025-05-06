/**
 * Enum for question types
 *
 * Defines the types of questions that can be asked.
 */
declare enum QuestionType {
  /**
   * Text input
   */
  Input = 'input',
  /**
   * Password input (masked)
   */
  Password = 'password',
  /**
   * Yes/no confirmation
   */
  Confirm = 'confirm',
  /**
   * Single selection from a list
   */
  List = 'list',
  /**
   * Multiple selection from a list
   */
  Checkbox = 'checkbox',
  /**
   * Numeric input
   */
  Number = 'number',
  /**
   * Multi-line text editor
   */
  Editor = 'editor',
}

export { QuestionType }
