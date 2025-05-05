import type { IEvent } from "./event.interface"

/**
 * Interface for all event listeners in the system.
 * Listeners are responsible for handling events when they are dispatched.
 */
export interface IListener<E extends IEvent = IEvent> {
  /**
   * Handle the event.
   * This method is called when the event is dispatched.
   *
   * @param {E} event - The event object
   * @returns {Promise<void> | void} - May return a promise for async handling
   */
  handle(event: E): Promise<void> | void
}

/**
 * DI token for IListener interface
 */
export namespace IListener {
  export const $ = Symbol.for("IListener")
}
