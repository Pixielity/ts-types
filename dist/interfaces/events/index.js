'use strict';

/**
 * @pixielity/ts-types v1.0.3
 * 
 * Advanced TypeScript type utilities with metadata inheritance support
 * 
 * @license MIT
 * @copyright 2025 Your Name <your.email@example.com>
 */


// src/interfaces/events/event.interface.ts
exports.IEvent = void 0;
((IEvent2) => {
  IEvent2.$ = Symbol.for("IEvent");
})(exports.IEvent || (exports.IEvent = {}));

// src/interfaces/events/listener.interface.ts
exports.IListener = void 0;
((IListener2) => {
  IListener2.$ = Symbol.for("IListener");
})(exports.IListener || (exports.IListener = {}));

// src/interfaces/events/event-bus.interface.ts
exports.IEventBus = void 0;
((IEventBus2) => {
  IEventBus2.$ = Symbol.for("IEventBus");
})(exports.IEventBus || (exports.IEventBus = {}));

// src/interfaces/events/dispatcher.interface.ts
exports.IEventDispatcher = void 0;
((IEventDispatcher2) => {
  IEventDispatcher2.$ = Symbol.for("IEventDispatcher");
})(exports.IEventDispatcher || (exports.IEventDispatcher = {}));

// src/interfaces/events/subscriber.interface.ts
exports.ISubscriber = void 0;
((ISubscriber2) => {
  ISubscriber2.$ = Symbol.for("ISubscriber");
})(exports.ISubscriber || (exports.ISubscriber = {}));
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map