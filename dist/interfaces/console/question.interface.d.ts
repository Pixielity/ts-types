import { QuestionType } from '../../enums/question-type.enum.js';

/**
 * Interface for question
 *
 * Defines the structure of a question to be asked.
 */
interface IQuestion {
    /**
     * The type of the question
     */
    type: QuestionType;
    /**
     * The name of the question (used as the property name in the answers object)
     */
    name: string;
    /**
     * The message to display
     */
    message: string;
    /**
     * The default value
     */
    default?: any;
    /**
     * The choices for list and checkbox questions
     */
    choices?: string[] | {
        name: string;
        value: any;
    }[];
    /**
     * Validation function
     */
    validate?: (input: any) => boolean | string | Promise<boolean | string>;
    /**
     * Filter function
     */
    filter?: (input: any) => any;
    /**
     * Whether the question should be asked
     */
    when?: boolean | ((answers: Record<string, any>) => boolean);
}

export type { IQuestion };
