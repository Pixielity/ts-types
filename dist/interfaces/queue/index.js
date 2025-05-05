'use strict';

/**
 * @pixielity/ts-types v1.0.1
 * 
 * Advanced TypeScript type utilities with metadata inheritance support
 * 
 * @license MIT
 * @copyright 2025 Your Name <your.email@example.com>
 */


// src/interfaces/queue/queueable.interface.ts
exports.IQueueable = void 0;
((IQueueable2) => {
  IQueueable2.$ = Symbol.for("IQueueable");
})(exports.IQueueable || (exports.IQueueable = {}));

// src/interfaces/queue/should-queue.interface.ts
exports.IShouldQueue = void 0;
((IShouldQueue2) => {
  IShouldQueue2.$ = Symbol.for("IShouldQueue");
})(exports.IShouldQueue || (exports.IShouldQueue = {}));

// src/interfaces/queue/queue-connection.interface.ts
exports.IQueueConnection = void 0;
((IQueueConnection2) => {
  IQueueConnection2.$ = Symbol.for("IQueueConnection");
})(exports.IQueueConnection || (exports.IQueueConnection = {}));

// src/interfaces/queue/queue-manager.interface.ts
exports.IQueueManager = void 0;
((IQueueManager2) => {
  IQueueManager2.$ = Symbol.for("IQueueManager");
})(exports.IQueueManager || (exports.IQueueManager = {}));

// src/interfaces/queue/job-registry.interface.ts
exports.IJobRegistry = void 0;
((IJobRegistry2) => {
  IJobRegistry2.$ = Symbol.for("IJobRegistry");
})(exports.IJobRegistry || (exports.IJobRegistry = {}));

// src/interfaces/queue/worker.interface.ts
exports.IWorker = void 0;
((IWorker2) => {
  IWorker2.$ = Symbol.for("IWorker");
})(exports.IWorker || (exports.IWorker = {}));
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map