'use strict';

/**
 * @pixielity/ts-types v1.0.4
 * 
 * Advanced TypeScript type utilities with metadata inheritance support
 * 
 * @license MIT
 * @copyright 2025 Your Name <your.email@example.com>
 */


// src/interfaces/application/application.interface.ts
exports.IApplication = void 0;
((IApplication3) => {
  IApplication3.$ = Symbol.for("IApplication");
})(exports.IApplication || (exports.IApplication = {}));

// src/interfaces/application/service-provider.inteface.ts
exports.IServiceProvider = void 0;
((IServiceProvider2) => {
  IServiceProvider2.$ = Symbol.for("IServiceProvider");
})(exports.IServiceProvider || (exports.IServiceProvider = {}));

// src/interfaces/cache/cache.interface.ts
exports.ICache = void 0;
((ICache2) => {
  ICache2.$ = Symbol.for("ICache");
})(exports.ICache || (exports.ICache = {}));

// src/interfaces/cache/store.interface.ts
exports.IStore = void 0;
((IStore2) => {
  IStore2.$ = Symbol.for("IStore");
  IStore2.ArrayStore = Symbol.for("ArrayStore");
  IStore2.FileStore = Symbol.for("FileStore");
  IStore2.MemcachedStore = Symbol.for("MemcachedStore");
  IStore2.RedisStore = Symbol.for("RedisStore");
  IStore2.DynamoDbStore = Symbol.for("DynamoDbStore");
  IStore2.DatabaseStore = Symbol.for("DatabaseStore");
  IStore2.NullStore = Symbol.for("NullStore");
})(exports.IStore || (exports.IStore = {}));

// src/interfaces/cache/repository.interface.ts
exports.IRepository = void 0;
((IRepository2) => {
  IRepository2.$ = Symbol.for("IRepository");
})(exports.IRepository || (exports.IRepository = {}));

// src/interfaces/cache/tagged-cache.interface.ts
exports.ITaggedCache = void 0;
((ITaggedCache2) => {
  ITaggedCache2.$ = Symbol.for("ITaggedCache");
})(exports.ITaggedCache || (exports.ITaggedCache = {}));

// src/interfaces/cache/lock.interface.ts
exports.ILock = void 0;
((ILock2) => {
  ILock2.$ = Symbol.for("ILock");
})(exports.ILock || (exports.ILock = {}));

// src/interfaces/cache/lock-provider.interface.ts
exports.ILockProvider = void 0;
((ILockProvider2) => {
  ILockProvider2.$ = Symbol.for("ILockProvider");
})(exports.ILockProvider || (exports.ILockProvider = {}));

// src/interfaces/cache/cache-manager.interface.ts
exports.ICacheManager = void 0;
((ICacheManager2) => {
  ICacheManager2.$ = Symbol.for("ICacheManager");
})(exports.ICacheManager || (exports.ICacheManager = {}));

// src/interfaces/config/repository-options.interface.ts
exports.IConfigRepositoryOptions = void 0;
((IConfigRepositoryOptions2) => {
  IConfigRepositoryOptions2.$ = Symbol.for("IConfigRepositoryOptions");
})(exports.IConfigRepositoryOptions || (exports.IConfigRepositoryOptions = {}));

// src/interfaces/config/cache.interface.ts
exports.IConfigCache = void 0;
((IConfigCache2) => {
  IConfigCache2.$ = Symbol.for("IConfigCache");
})(exports.IConfigCache || (exports.IConfigCache = {}));

// src/interfaces/config/cache-item.interface.ts
exports.ICacheItem = void 0;
((ICacheItem2) => {
  ICacheItem2.$ = Symbol.for("ICacheItem");
})(exports.ICacheItem || (exports.ICacheItem = {}));

// src/interfaces/config/cache-options.interface.ts
exports.IConfigCacheOptions = void 0;
((IConfigCacheOptions2) => {
  IConfigCacheOptions2.$ = Symbol.for("IConfigCacheOptions");
})(exports.IConfigCacheOptions || (exports.IConfigCacheOptions = {}));

// src/interfaces/config/loader.interface.ts
exports.IConfigLoader = void 0;
((IConfigLoader2) => {
  IConfigLoader2.$ = Symbol.for("IConfigLoader");
})(exports.IConfigLoader || (exports.IConfigLoader = {}));

// src/interfaces/config/decorator-options.interface.ts
exports.IConfigOptions = void 0;
((IConfigOptions2) => {
  IConfigOptions2.$ = Symbol.for("IConfigOptions");
})(exports.IConfigOptions || (exports.IConfigOptions = {}));

// src/interfaces/config/config.interface.ts
exports.IConfig = void 0;
((IConfig2) => {
  IConfig2.$ = Symbol.for("IConfig");
})(exports.IConfig || (exports.IConfig = {}));

// src/interfaces/container/container.interface.ts
exports.IContainer = void 0;
((IContainer2) => {
  IContainer2.$ = Symbol.for("IContainer");
})(exports.IContainer || (exports.IContainer = {}));

// src/interfaces/decorators/class-decorator-options.interface.ts
exports.IClassDecoratorOptions = void 0;
((IClassDecoratorOptions2) => {
  IClassDecoratorOptions2.$ = Symbol.for("IClassDecoratorOptions");
})(exports.IClassDecoratorOptions || (exports.IClassDecoratorOptions = {}));

// src/interfaces/decorators/log-options.interface.ts
exports.ILogOptions = void 0;
((ILogOptions2) => {
  ILogOptions2.$ = Symbol.for("ILogOptions");
})(exports.ILogOptions || (exports.ILogOptions = {}));

// src/interfaces/decorators/validation-function.interface.ts
exports.IValidationFunction = void 0;
((IValidationFunction2) => {
  IValidationFunction2.$ = Symbol.for("IValidationFunction");
})(exports.IValidationFunction || (exports.IValidationFunction = {}));

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

// src/interfaces/queue/rate-limit.interface.ts
exports.IRateLimiter = void 0;
((IRateLimiter2) => {
  IRateLimiter2.$ = Symbol.for("IRateLimiter");
})(exports.IRateLimiter || (exports.IRateLimiter = {}));

// src/interfaces/react/app-provider-props.interface.ts
exports.IAppProviderProps = void 0;
((IAppProviderProps2) => {
  IAppProviderProps2.$ = Symbol.for("IAppProviderProps");
})(exports.IAppProviderProps || (exports.IAppProviderProps = {}));

// src/interfaces/react/container-provider-props.interface.ts
exports.IContainerProviderProps = void 0;
((IContainerProviderProps2) => {
  IContainerProviderProps2.$ = Symbol.for("IContainerProviderProps");
})(exports.IContainerProviderProps || (exports.IContainerProviderProps = {}));

// src/interfaces/react/cached-data-result.interface.ts
exports.ICachedDataResult = void 0;
((ICachedDataResult2) => {
  ICachedDataResult2.$ = Symbol.for("ICachedDataResult");
})(exports.ICachedDataResult || (exports.ICachedDataResult = {}));

// src/interfaces/react/cache-value-result.interface.ts
exports.ICacheValueResult = void 0;
((ICacheValueResult2) => {
  ICacheValueResult2.$ = Symbol.for("ICacheValueResult");
})(exports.ICacheValueResult || (exports.ICacheValueResult = {}));

// src/interfaces/console/input.interface.ts
exports.IInput = void 0;
((IInput2) => {
  IInput2.$ = Symbol("IInput");
})(exports.IInput || (exports.IInput = {}));

// src/interfaces/console/output.interface.ts
exports.IOutput = void 0;
((IOutput2) => {
  IOutput2.$ = Symbol("IOutput");
})(exports.IOutput || (exports.IOutput = {}));

// src/interfaces/console/stub-generator.interface.ts
exports.IStubGenerator = void 0;
((IStubGenerator2) => {
  IStubGenerator2.$ = Symbol("IStubGenerator");
})(exports.IStubGenerator || (exports.IStubGenerator = {}));

// src/interfaces/console/application.interface.ts
exports.IConsoleApplication = void 0;
((IApplication3) => {
  IApplication3.$ = Symbol("IApplication");
})(exports.IConsoleApplication || (exports.IConsoleApplication = {}));

// src/interfaces/console/command/command.interface.ts
exports.ICommand = void 0;
((ICommand2) => {
  ICommand2.$ = Symbol("ICommand");
})(exports.ICommand || (exports.ICommand = {}));

// src/interfaces/console/command/registry.interface.ts
exports.ICommandRegistry = void 0;
((ICommandRegistry2) => {
  ICommandRegistry2.$ = Symbol("ICommandRegistry");
})(exports.ICommandRegistry || (exports.ICommandRegistry = {}));

// src/interfaces/console/command/collector.interface.ts
exports.ICommandCollector = void 0;
((ICommandCollector2) => {
  ICommandCollector2.$ = Symbol("ICommandCollector");
})(exports.ICommandCollector || (exports.ICommandCollector = {}));

// src/interfaces/console/command/scheduler.interface.ts
exports.ICommandScheduler = void 0;
((ICommandScheduler2) => {
  ICommandScheduler2.$ = Symbol("ICommandScheduler");
})(exports.ICommandScheduler || (exports.ICommandScheduler = {}));

// src/interfaces/console/ui/table-output.interface.ts
exports.ITableOutput = void 0;
((ITableOutput2) => {
  ITableOutput2.$ = Symbol("ITableOutput");
})(exports.ITableOutput || (exports.ITableOutput = {}));

// src/interfaces/console/ui/progress-bar.interface.ts
exports.IProgressBar = void 0;
((IProgressBar2) => {
  IProgressBar2.$ = Symbol("IProgressBar");
})(exports.IProgressBar || (exports.IProgressBar = {}));

// src/interfaces/redis/factory.interface.ts
exports.IRedisFactory = void 0;
((IRedisFactory2) => {
  IRedisFactory2.$ = Symbol.for("IRedisFactory");
})(exports.IRedisFactory || (exports.IRedisFactory = {}));

// src/interfaces/redis/connector.interface.ts
exports.IRedisConnector = void 0;
((IRedisConnector2) => {
  IRedisConnector2.$ = Symbol.for("IRedisConnector");
})(exports.IRedisConnector || (exports.IRedisConnector = {}));

// src/interfaces/redis/connection.interface.ts
exports.IRedisConnection = void 0;
((IRedisConnection2) => {
  IRedisConnection2.$ = Symbol.for("IRedisConnection");
})(exports.IRedisConnection || (exports.IRedisConnection = {}));

// src/interfaces/redis/redis.interface.ts
exports.IRedis = void 0;
((IRedis2) => {
  IRedis2.$ = Symbol.for("IRedis");
})(exports.IRedis || (exports.IRedis = {}));

// src/interfaces/routing/controller.interface.ts
exports.IController = void 0;
((IController2) => {
  IController2.$ = Symbol.for("IController");
})(exports.IController || (exports.IController = {}));

// src/interfaces/routing/controller-options.interface.ts
exports.IControllerOptions = void 0;
((IControllerOptions2) => {
  IControllerOptions2.$ = Symbol.for("IControllerOptions");
})(exports.IControllerOptions || (exports.IControllerOptions = {}));

// src/interfaces/routing/route.interface.ts
exports.IRouteHandler = void 0;
((IRouteHandler2) => {
  IRouteHandler2.$ = Symbol.for("IRouteHandler");
})(exports.IRouteHandler || (exports.IRouteHandler = {}));

// src/interfaces/routing/route-options.interface.ts
exports.IRouteOptions = void 0;
((IRouteOptions2) => {
  IRouteOptions2.$ = Symbol.for("IRouteOptions");
})(exports.IRouteOptions || (exports.IRouteOptions = {}));

// src/interfaces/routing/middleware.interface.ts
exports.IMiddleware = void 0;
((IMiddleware2) => {
  IMiddleware2.$ = Symbol.for("IMiddleware");
})(exports.IMiddleware || (exports.IMiddleware = {}));

// src/interfaces/routing/guard.interface.ts
exports.IGuard = void 0;
((IGuard2) => {
  IGuard2.$ = Symbol.for("IGuard");
})(exports.IGuard || (exports.IGuard = {}));

// src/interfaces/routing/param-metadata.interface.ts
exports.IParamMetadata = void 0;
((IParamMetadata2) => {
  IParamMetadata2.$ = Symbol.for("IParamMetadata");
})(exports.IParamMetadata || (exports.IParamMetadata = {}));

// src/interfaces/routing/router-config.interface.ts
exports.IRouterConfig = void 0;
((IRouterConfig2) => {
  IRouterConfig2.$ = Symbol.for("IRouterConfig");
})(exports.IRouterConfig || (exports.IRouterConfig = {}));

// src/interfaces/routing/route-definition.interface.ts
exports.IRouteDefinition = void 0;
((IRouteDefinition2) => {
  IRouteDefinition2.$ = Symbol.for("IRouteDefinition");
})(exports.IRouteDefinition || (exports.IRouteDefinition = {}));

// src/interfaces/routing/controller-definition.interface.ts
exports.IControllerDefinition = void 0;
((IControllerDefinition2) => {
  IControllerDefinition2.$ = Symbol.for("IControllerDefinition");
})(exports.IControllerDefinition || (exports.IControllerDefinition = {}));

// src/enums/config-enviroment.enum.ts
var ConfigEnvironment = /* @__PURE__ */ ((ConfigEnvironment2) => {
  ConfigEnvironment2["NODE"] = "node";
  ConfigEnvironment2["BROWSER"] = "browser";
  ConfigEnvironment2["NEXTJS"] = "nextjs";
  ConfigEnvironment2["REACT_NATIVE"] = "react-native";
  ConfigEnvironment2["UNKNOWN"] = "unknown";
  return ConfigEnvironment2;
})(ConfigEnvironment || {});

// src/enums/worker-status.enum.ts
var WorkerStatus = /* @__PURE__ */ ((WorkerStatus2) => {
  WorkerStatus2["IDLE"] = "idle";
  WorkerStatus2["RUNNING"] = "running";
  WorkerStatus2["PAUSED"] = "paused";
  WorkerStatus2["STOPPED"] = "stopped";
  return WorkerStatus2;
})(WorkerStatus || {});

// src/enums/param-type.enum.ts
var ParamType = /* @__PURE__ */ ((ParamType2) => {
  ParamType2["PARAM"] = "param";
  ParamType2["QUERY"] = "query";
  ParamType2["BODY"] = "body";
  ParamType2["REQUEST"] = "request";
  ParamType2["RESPONSE"] = "response";
  return ParamType2;
})(ParamType || {});

// src/enums/question-type.enum.ts
var QuestionType = /* @__PURE__ */ ((QuestionType2) => {
  QuestionType2["Input"] = "input";
  QuestionType2["Password"] = "password";
  QuestionType2["Confirm"] = "confirm";
  QuestionType2["List"] = "list";
  QuestionType2["Checkbox"] = "checkbox";
  QuestionType2["Number"] = "number";
  QuestionType2["Editor"] = "editor";
  return QuestionType2;
})(QuestionType || {});

exports.ConfigEnvironment = ConfigEnvironment;
exports.ParamType = ParamType;
exports.QuestionType = QuestionType;
exports.WorkerStatus = WorkerStatus;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map