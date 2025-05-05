import { NextApiRequest, NextApiResponse } from 'next';

/**
 * Interface for route guards
 * Guards determine whether a route handler should be executed
 * They are typically used for authentication and authorization
 */
interface IGuard {
    /**
     * Check if the request is allowed to proceed to the route handler
     *
     * @param req - The Next.js API request
     * @param res - The Next.js API response
     * @returns A boolean or promise resolving to a boolean indicating whether the request should proceed
     */
    canActivate(req: NextApiRequest, res: NextApiResponse): Promise<boolean> | boolean;
}
/**
 * Namespace containing symbols for dependency injection
 */
declare namespace IGuard {
    /**
     * Symbol for injecting the guard service
     */
    const $: unique symbol;
}

export { IGuard };
