import type { Observable } from 'rxjs'
import type { IEvent } from './event.interface'
import type { IListener } from './listener.interface'
import type { ISubscriber } from './subscriber.interface'
import type { IEventData } from './event-data.interface'

/**
 * Interface for the event dispatcher.
 * The dispatcher is responsible for registering listeners and dispatching events.
 */
export interface IEventDispatcher {
  /**
   * Register an event listener with the dispatcher.
   *
   * @param {string} event - The event name
   * @param {IListener | Function} listener - The listener function or object
   * @returns {() => void} A function to remove the listener
   */
  listen(event: string, listener: IListener | Function): () => void

  /**
   * Determine if a given event has listeners.
   *
   * @param {string} eventName - The event name
   * @returns {boolean} True if the event has listeners
   */
  hasListeners(eventName: string): boolean

  /**
   * Register an event subscriber with the dispatcher.
   *
   * @param {ISubscriber} subscriber - The subscriber to register
   */
  subscribe(subscriber: ISubscriber): void

  /**
   * Dispatch an event and call the listeners.
   *
   * @param {string | IEvent} event - The event name or object
   * @param {any} [payload] - The event payload (if event is a string)
   * @returns {Promise<any[]>} Array of results from the listeners
   */
  dispatch(event: string | IEvent, payload?: any): Promise<any[]>

  /**
   * Dispatch an event and halt when the first listener returns a non-null response.
   *
   * @param {string | IEvent} event - The event name or object
   * @param {any} [payload] - The event payload (if event is a string)
   * @returns {Promise<any>} The first non-null response or null
   */
  until(event: string | IEvent, payload?: any): Promise<any>

  /**
   * Remove a set of listeners from the dispatcher.
   *
   * @param {string} event - The event name
   */
  forget(event: string): void

  /**
   * Remove all listeners from the dispatcher.
   */
  forgetAll(): void

  /**
   * Get an observable of all events
   *
   * @returns An observable of all events
   */
  events(): Observable<IEventData>

  /**
   * Get an observable of events with a specific name
   *
   * @param eventName - The event name
   * @returns An observable of events with the specified name
   */
  ofType(eventName: string): Observable<IEventData>

  /**
   * Get an observable of events of a specific class
   *
   * @param eventClass - The event class
   * @returns An observable of events of the specified class
   */
  ofClass<T extends IEvent>(eventClass: new (...args: any[]) => T): Observable<IEventData<T>>

  /**
   * Get an observable of event payloads with a specific name
   *
   * @param eventName - The event name
   * @returns An observable of event payloads with the specified name
   */
  on<T = any>(eventName: string): Observable<T>

  /**
   * Get an observable of event payloads of a specific class
   *
   * @param eventClass - The event class
   * @returns An observable of event payloads of the specified class
   */
  onEvent<T extends IEvent>(eventClass: new (...args: any[]) => T): Observable<T>

  /**
   * Get the number of listeners for a specific event
   *
   * @param eventName - The event name
   * @returns The number of listeners
   */
  listenerCount(eventName: string): number
}

/**
 * DI token for IEventDispatcher interface
 */
export namespace IEventDispatcher {
  export const $ = Symbol.for('IEventDispatcher')
}
