import { IEvent } from './event.interface.mjs';

/**
 * Interface for all event listeners in the system.
 * Listeners are responsible for handling events when they are dispatched.
 */
interface IListener<E extends IEvent = IEvent> {
    /**
     * Handle the event.
     * This method is called when the event is dispatched.
     *
     * @param {E} event - The event object
     * @returns {Promise<void> | void} - May return a promise for async handling
     */
    handle(event: E): Promise<void> | void;
}
/**
 * DI token for IListener interface
 */
declare namespace IListener {
    const $: unique symbol;
}

export { IListener };
