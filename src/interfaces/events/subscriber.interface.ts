import type { IEventDispatcher } from "./dispatcher.interface"

/**
 * Interface for event subscribers.
 * Subscribers can listen to multiple events and register multiple listeners.
 */
export interface ISubscriber {
  /**
   * Register the listeners for the subscriber.
   * This method is called when the subscriber is registered with the dispatcher.
   *
   * @param {IEventDispatcher} dispatcher - The event dispatcher
   */
  subscribe(dispatcher: IEventDispatcher): void
}

/**
 * DI token for ISubscriber interface
 */
export namespace ISubscriber {
  export const $ = Symbol.for("ISubscriber")
}
