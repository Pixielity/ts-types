/**
 * Newable type
 */
export type Newable<T> = new (...args: any[]) => T
