import { NextApiRequest, NextApiResponse } from 'next';

/**
 * Interface for route middleware
 * Middleware intercepts requests before they reach the route handler
 * and can modify the request/response or terminate the request early
 */
interface IMiddleware {
    /**
     * Middleware handler function
     *
     * @param req - The Next.js API request
     * @param res - The Next.js API response
     * @param next - The next function to call to continue the middleware chain
     * @returns A promise that resolves when the middleware has completed
     */
    (req: NextApiRequest, res: NextApiResponse, next: () => Promise<void>): Promise<void>;
}
/**
 * Namespace containing symbols for dependency injection
 */
declare namespace IMiddleware {
    /**
     * Symbol for injecting the middleware service
     */
    const $: unique symbol;
}

export { IMiddleware };
