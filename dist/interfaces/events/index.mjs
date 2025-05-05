/**
 * @pixielity/ts-types v1.0.3
 * 
 * Advanced TypeScript type utilities with metadata inheritance support
 * 
 * @license MIT
 * @copyright 2025 Your Name <your.email@example.com>
 */


// src/interfaces/events/event.interface.ts
var IEvent;
((IEvent2) => {
  IEvent2.$ = Symbol.for("IEvent");
})(IEvent || (IEvent = {}));

// src/interfaces/events/listener.interface.ts
var IListener;
((IListener2) => {
  IListener2.$ = Symbol.for("IListener");
})(IListener || (IListener = {}));

// src/interfaces/events/event-bus.interface.ts
var IEventBus;
((IEventBus2) => {
  IEventBus2.$ = Symbol.for("IEventBus");
})(IEventBus || (IEventBus = {}));

// src/interfaces/events/dispatcher.interface.ts
var IEventDispatcher;
((IEventDispatcher2) => {
  IEventDispatcher2.$ = Symbol.for("IEventDispatcher");
})(IEventDispatcher || (IEventDispatcher = {}));

// src/interfaces/events/subscriber.interface.ts
var ISubscriber;
((ISubscriber2) => {
  ISubscriber2.$ = Symbol.for("ISubscriber");
})(ISubscriber || (ISubscriber = {}));

export { IEvent, IEventBus, IEventDispatcher, IListener, ISubscriber };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map