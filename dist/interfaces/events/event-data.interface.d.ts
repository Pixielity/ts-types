/**
 * Event data structure for the event stream
 */
interface IEventData<T = any> {
  /**
   * The name of the event
   */
  name: string
  /**
   * The event payload
   */
  payload: T
  /**
   * The timestamp when the event was dispatched
   */
  timestamp: number
  /**
   * Optional metadata associated with the event
   */
  metadata?: Record<string, any>
  /**
   * Optional source of the event (e.g., service name, component)
   */
  source?: string
}

export type { IEventData }
