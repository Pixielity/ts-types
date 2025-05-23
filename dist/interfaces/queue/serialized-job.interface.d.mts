/**
 * Serialized job structure
 */
interface ISerializedJob {
    /**
     * The name of the job class
     */
    className: string;
    /**
     * The serialized properties of the job
     */
    properties: Record<string, any>;
}

export type { ISerializedJob };
