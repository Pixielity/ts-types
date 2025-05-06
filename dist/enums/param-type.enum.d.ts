/**
 * Parameter type enum
 */
declare enum ParamType {
  /**
   * Route parameter
   */
  PARAM = 'param',
  /**
   * Query parameter
   */
  QUERY = 'query',
  /**
   * Request body
   */
  BODY = 'body',
  /**
   * Request object
   */
  REQUEST = 'request',
  /**
   * Response object
   */
  RESPONSE = 'response',
}

export { ParamType }
