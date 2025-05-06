import type { Observable } from 'rxjs'
import type { IEvent } from './event.interface'
import type { IEventData } from './event-data.interface'

/**
 * Interface for the event bus
 * The event bus provides a centralized mechanism for dispatching and subscribing to events
 */
export interface IEventBus {
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
   * Dispatch an event through the event bus
   *
   * @param event - The event to dispatch
   * @param payload - Optional payload if event is a string
   * @returns A promise that resolves when the event has been dispatched
   */
  dispatch(event: string | IEvent, payload?: any): Promise<any[]>

  /**
   * Register a callback for a specific event
   *
   * @param eventName - The event name
   * @param callback - The callback function
   * @returns A function to unregister the callback
   */
  subscribe<T = any>(eventName: string, callback: (data: T) => void): () => void

  /**
   * Register a callback for a specific event class
   *
   * @param eventClass - The event class
   * @param callback - The callback function
   * @returns A function to unregister the callback
   */
  subscribeToEvent<T extends IEvent>(
    eventClass: new (...args: any[]) => T,
    callback: (event: T) => void,
  ): () => void
}

/**
 * DI token for IEventBus interface
 */
export namespace IEventBus {
  export const $ = Symbol.for('IEventBus')
}
