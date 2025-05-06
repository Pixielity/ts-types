/**
 * Interface for all events in the system.
 * Events are objects that represent something that has happened in the application.
 * They can be dispatched and listened to by event listeners.
 */
interface IEvent {
  /**
   * Optional method to get the event name.
   * If not provided, the class name will be used.
   */
  getEventName?(): string
  /**
   * Optional method to determine if the event should be broadcast.
   * @returns {boolean} Whether the event should be broadcast
   */
  shouldBroadcast?(): boolean
  /**
   * Optional method to get the channels the event should broadcast on.
   * @returns {string[]} Array of channel names
   */
  broadcastOn?(): string[]
  /**
   * Optional method to get the broadcast data.
   * @returns {Record<string, any>} Data to broadcast
   */
  broadcastWith?(): Record<string, any>
}
/**
 * DI token for IEvent interface
 */
declare namespace IEvent {
  const $: unique symbol
}

export { IEvent }
