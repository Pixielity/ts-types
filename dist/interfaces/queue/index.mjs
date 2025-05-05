/**
 * @pixielity/ts-types v1.0.4
 * 
 * Advanced TypeScript type utilities with metadata inheritance support
 * 
 * @license MIT
 * @copyright 2025 Your Name <your.email@example.com>
 */


// src/interfaces/queue/queueable.interface.ts
var IQueueable;
((IQueueable2) => {
  IQueueable2.$ = Symbol.for("IQueueable");
})(IQueueable || (IQueueable = {}));

// src/interfaces/queue/should-queue.interface.ts
var IShouldQueue;
((IShouldQueue2) => {
  IShouldQueue2.$ = Symbol.for("IShouldQueue");
})(IShouldQueue || (IShouldQueue = {}));

// src/interfaces/queue/queue-connection.interface.ts
var IQueueConnection;
((IQueueConnection2) => {
  IQueueConnection2.$ = Symbol.for("IQueueConnection");
})(IQueueConnection || (IQueueConnection = {}));

// src/interfaces/queue/queue-manager.interface.ts
var IQueueManager;
((IQueueManager2) => {
  IQueueManager2.$ = Symbol.for("IQueueManager");
})(IQueueManager || (IQueueManager = {}));

// src/interfaces/queue/job-registry.interface.ts
var IJobRegistry;
((IJobRegistry2) => {
  IJobRegistry2.$ = Symbol.for("IJobRegistry");
})(IJobRegistry || (IJobRegistry = {}));

// src/interfaces/queue/worker.interface.ts
var IWorker;
((IWorker2) => {
  IWorker2.$ = Symbol.for("IWorker");
})(IWorker || (IWorker = {}));

export { IJobRegistry, IQueueConnection, IQueueManager, IQueueable, IShouldQueue, IWorker };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map