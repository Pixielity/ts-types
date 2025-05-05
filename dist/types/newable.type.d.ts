/**
 * Newable type
 */
type Newable<T> = new (...args: any[]) => T;

export type { Newable };
