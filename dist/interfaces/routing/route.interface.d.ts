import { NextApiRequest, NextApiResponse } from 'next'

/**
 * Interface for route handlers
 * Route handlers process requests and generate responses
 */
interface IRouteHandler {
  /**
   * The route handler function
   *
   * @param req - The Next.js API request
   * @param res - The Next.js API response
   * @param args - Additional arguments provided by parameter decorators
   * @returns The response data or a promise resolving to the response data
   */
  (req: NextApiRequest, res: NextApiResponse, ...args: any[]): Promise<any> | any
}
/**
 * Namespace containing symbols for dependency injection
 */
declare namespace IRouteHandler {
  /**
   * Symbol for injecting the route handler service
   */
  const $: unique symbol
}

export { IRouteHandler }
