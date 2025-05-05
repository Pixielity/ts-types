/**
 * @pixielity/ts-types v1.0.1
 * 
 * Advanced TypeScript type utilities with metadata inheritance support
 * 
 * @license MIT
 * @copyright 2025 Your Name <your.email@example.com>
 */


// src/interfaces/application/application.interface.ts
var IApplication;
((IApplication3) => {
  IApplication3.$ = Symbol.for("IApplication");
})(IApplication || (IApplication = {}));

// src/interfaces/application/service-provider.inteface.ts
var IServiceProvider;
((IServiceProvider2) => {
  IServiceProvider2.$ = Symbol.for("IServiceProvider");
})(IServiceProvider || (IServiceProvider = {}));

// src/interfaces/cache/cache.interface.ts
var ICache;
((ICache2) => {
  ICache2.$ = Symbol.for("ICache");
})(ICache || (ICache = {}));

// src/interfaces/cache/store.interface.ts
var IStore;
((IStore2) => {
  IStore2.$ = Symbol.for("IStore");
  IStore2.ArrayStore = Symbol.for("ArrayStore");
  IStore2.FileStore = Symbol.for("FileStore");
  IStore2.MemcachedStore = Symbol.for("MemcachedStore");
  IStore2.RedisStore = Symbol.for("RedisStore");
  IStore2.DynamoDbStore = Symbol.for("DynamoDbStore");
  IStore2.DatabaseStore = Symbol.for("DatabaseStore");
  IStore2.NullStore = Symbol.for("NullStore");
})(IStore || (IStore = {}));

// src/interfaces/cache/repository.interface.ts
var IRepository;
((IRepository2) => {
  IRepository2.$ = Symbol.for("IRepository");
})(IRepository || (IRepository = {}));

// src/interfaces/cache/tagged-cache.interface.ts
var ITaggedCache;
((ITaggedCache2) => {
  ITaggedCache2.$ = Symbol.for("ITaggedCache");
})(ITaggedCache || (ITaggedCache = {}));

// src/interfaces/cache/lock.interface.ts
var ILock;
((ILock2) => {
  ILock2.$ = Symbol.for("ILock");
})(ILock || (ILock = {}));

// src/interfaces/cache/lock-provider.interface.ts
var ILockProvider;
((ILockProvider2) => {
  ILockProvider2.$ = Symbol.for("ILockProvider");
})(ILockProvider || (ILockProvider = {}));

// src/interfaces/cache/cache-manager.interface.ts
var ICacheManager;
((ICacheManager2) => {
  ICacheManager2.$ = Symbol.for("ICacheManager");
})(ICacheManager || (ICacheManager = {}));

// src/interfaces/config/repository-options.interface.ts
var IConfigRepositoryOptions;
((IConfigRepositoryOptions2) => {
  IConfigRepositoryOptions2.$ = Symbol.for("IConfigRepositoryOptions");
})(IConfigRepositoryOptions || (IConfigRepositoryOptions = {}));

// src/interfaces/config/cache.interface.ts
var IConfigCache;
((IConfigCache2) => {
  IConfigCache2.$ = Symbol.for("IConfigCache");
})(IConfigCache || (IConfigCache = {}));

// src/interfaces/config/cache-item.interface.ts
var ICacheItem;
((ICacheItem2) => {
  ICacheItem2.$ = Symbol.for("ICacheItem");
})(ICacheItem || (ICacheItem = {}));

// src/interfaces/config/cache-options.interface.ts
var IConfigCacheOptions;
((IConfigCacheOptions2) => {
  IConfigCacheOptions2.$ = Symbol.for("IConfigCacheOptions");
})(IConfigCacheOptions || (IConfigCacheOptions = {}));

// src/interfaces/config/loader.interface.ts
var IConfigLoader;
((IConfigLoader2) => {
  IConfigLoader2.$ = Symbol.for("IConfigLoader");
})(IConfigLoader || (IConfigLoader = {}));

// src/interfaces/config/decorator-options.interface.ts
var IConfigOptions;
((IConfigOptions2) => {
  IConfigOptions2.$ = Symbol.for("IConfigOptions");
})(IConfigOptions || (IConfigOptions = {}));

// src/interfaces/config/config.interface.ts
var IConfig;
((IConfig2) => {
  IConfig2.$ = Symbol.for("IConfig");
})(IConfig || (IConfig = {}));

// src/interfaces/container/container.interface.ts
var IContainer;
((IContainer2) => {
  IContainer2.$ = Symbol.for("IContainer");
})(IContainer || (IContainer = {}));

// src/interfaces/decorators/class-decorator-options.interface.ts
var IClassDecoratorOptions;
((IClassDecoratorOptions2) => {
  IClassDecoratorOptions2.$ = Symbol.for("IClassDecoratorOptions");
})(IClassDecoratorOptions || (IClassDecoratorOptions = {}));

// src/interfaces/decorators/log-options.interface.ts
var ILogOptions;
((ILogOptions2) => {
  ILogOptions2.$ = Symbol.for("ILogOptions");
})(ILogOptions || (ILogOptions = {}));

// src/interfaces/decorators/validation-function.interface.ts
var IValidationFunction;
((IValidationFunction2) => {
  IValidationFunction2.$ = Symbol.for("IValidationFunction");
})(IValidationFunction || (IValidationFunction = {}));

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

// src/interfaces/react/app-provider-props.interface.ts
var IAppProviderProps;
((IAppProviderProps2) => {
  IAppProviderProps2.$ = Symbol.for("IAppProviderProps");
})(IAppProviderProps || (IAppProviderProps = {}));

// src/interfaces/react/container-provider-props.interface.ts
var IContainerProviderProps;
((IContainerProviderProps2) => {
  IContainerProviderProps2.$ = Symbol.for("IContainerProviderProps");
})(IContainerProviderProps || (IContainerProviderProps = {}));

// src/interfaces/react/cached-data-result.interface.ts
var ICachedDataResult;
((ICachedDataResult2) => {
  ICachedDataResult2.$ = Symbol.for("ICachedDataResult");
})(ICachedDataResult || (ICachedDataResult = {}));

// src/interfaces/react/cache-value-result.interface.ts
var ICacheValueResult;
((ICacheValueResult2) => {
  ICacheValueResult2.$ = Symbol.for("ICacheValueResult");
})(ICacheValueResult || (ICacheValueResult = {}));

// src/interfaces/console/application.interface.ts
var IApplication2;
((IApplication3) => {
  IApplication3.$ = Symbol("IApplication");
})(IApplication2 || (IApplication2 = {}));

// src/interfaces/console/command.interface.ts
var ICommand;
((ICommand2) => {
  ICommand2.$ = Symbol("ICommand");
})(ICommand || (ICommand = {}));

// src/interfaces/console/command-registry.interface.ts
var ICommandRegistry;
((ICommandRegistry2) => {
  ICommandRegistry2.$ = Symbol("ICommandRegistry");
})(ICommandRegistry || (ICommandRegistry = {}));

// src/interfaces/console/command-collector.interface.ts
var ICommandCollector;
((ICommandCollector2) => {
  ICommandCollector2.$ = Symbol("ICommandCollector");
})(ICommandCollector || (ICommandCollector = {}));

// src/interfaces/console/command-scheduler.interface.ts
var ICommandScheduler;
((ICommandScheduler2) => {
  ICommandScheduler2.$ = Symbol("ICommandScheduler");
})(ICommandScheduler || (ICommandScheduler = {}));

// src/interfaces/console/input.interface.ts
var IInput;
((IInput2) => {
  IInput2.$ = Symbol("IInput");
})(IInput || (IInput = {}));

// src/interfaces/console/output.interface.ts
var IOutput;
((IOutput2) => {
  IOutput2.$ = Symbol("IOutput");
})(IOutput || (IOutput = {}));

// src/interfaces/console/stub-generator.interface.ts
var IStubGenerator;
((IStubGenerator2) => {
  IStubGenerator2.$ = Symbol("IStubGenerator");
})(IStubGenerator || (IStubGenerator = {}));

// src/interfaces/console/ask.interface.ts
var IAsk;
((IAsk2) => {
  IAsk2.$ = Symbol("IAsk");
})(IAsk || (IAsk = {}));

// src/interfaces/console/table-output.interface.ts
var ITableOutput;
((ITableOutput2) => {
  ITableOutput2.$ = Symbol("ITableOutput");
})(ITableOutput || (ITableOutput = {}));

// src/interfaces/console/progress-bar.interface.ts
var IProgressBar;
((IProgressBar2) => {
  IProgressBar2.$ = Symbol("IProgressBar");
})(IProgressBar || (IProgressBar = {}));

// src/interfaces/redis/factory.interface.ts
var IRedisFactory;
((IRedisFactory2) => {
  IRedisFactory2.$ = Symbol.for("IRedisFactory");
})(IRedisFactory || (IRedisFactory = {}));

// src/interfaces/redis/connector.interface.ts
var IRedisConnector;
((IRedisConnector2) => {
  IRedisConnector2.$ = Symbol.for("IRedisConnector");
})(IRedisConnector || (IRedisConnector = {}));

// src/interfaces/redis/connection.interface.ts
var IRedisConnection;
((IRedisConnection2) => {
  IRedisConnection2.$ = Symbol.for("IRedisConnection");
})(IRedisConnection || (IRedisConnection = {}));

// src/interfaces/redis/redis.interface.ts
var IRedis;
((IRedis2) => {
  IRedis2.$ = Symbol.for("IRedis");
})(IRedis || (IRedis = {}));

// src/interfaces/routing/controller.interface.ts
var IController;
((IController2) => {
  IController2.$ = Symbol.for("IController");
})(IController || (IController = {}));

// src/interfaces/routing/controller-options.interface.ts
var IControllerOptions;
((IControllerOptions2) => {
  IControllerOptions2.$ = Symbol.for("IControllerOptions");
})(IControllerOptions || (IControllerOptions = {}));

// src/interfaces/routing/route.interface.ts
var IRouteHandler;
((IRouteHandler2) => {
  IRouteHandler2.$ = Symbol.for("IRouteHandler");
})(IRouteHandler || (IRouteHandler = {}));

// src/interfaces/routing/route-options.interface.ts
var IRouteOptions;
((IRouteOptions2) => {
  IRouteOptions2.$ = Symbol.for("IRouteOptions");
})(IRouteOptions || (IRouteOptions = {}));

// src/interfaces/routing/middleware.interface.ts
var IMiddleware;
((IMiddleware2) => {
  IMiddleware2.$ = Symbol.for("IMiddleware");
})(IMiddleware || (IMiddleware = {}));

// src/interfaces/routing/guard.interface.ts
var IGuard;
((IGuard2) => {
  IGuard2.$ = Symbol.for("IGuard");
})(IGuard || (IGuard = {}));

// src/interfaces/routing/param-metadata.interface.ts
var IParamMetadata;
((IParamMetadata2) => {
  IParamMetadata2.$ = Symbol.for("IParamMetadata");
})(IParamMetadata || (IParamMetadata = {}));

// src/interfaces/routing/router-config.interface.ts
var IRouterConfig;
((IRouterConfig2) => {
  IRouterConfig2.$ = Symbol.for("IRouterConfig");
})(IRouterConfig || (IRouterConfig = {}));

// src/interfaces/routing/route-definition.interface.ts
var IRouteDefinition;
((IRouteDefinition2) => {
  IRouteDefinition2.$ = Symbol.for("IRouteDefinition");
})(IRouteDefinition || (IRouteDefinition = {}));

// src/interfaces/routing/controller-definition.interface.ts
var IControllerDefinition;
((IControllerDefinition2) => {
  IControllerDefinition2.$ = Symbol.for("IControllerDefinition");
})(IControllerDefinition || (IControllerDefinition = {}));

export { IAppProviderProps, IApplication, IAsk, ICache, ICacheItem, ICacheManager, ICacheValueResult, ICachedDataResult, IClassDecoratorOptions, ICommand, ICommandCollector, ICommandRegistry, ICommandScheduler, IConfig, IConfigCache, IConfigCacheOptions, IConfigLoader, IConfigOptions, IConfigRepositoryOptions, IApplication2 as IConsoleApplication, IContainer, IContainerProviderProps, IController, IControllerDefinition, IControllerOptions, IEvent, IEventBus, IEventDispatcher, IGuard, IInput, IJobRegistry, IListener, ILock, ILockProvider, ILogOptions, IMiddleware, IOutput, IParamMetadata, IProgressBar, IQueueConnection, IQueueManager, IQueueable, IRedis, IRedisConnection, IRedisConnector, IRedisFactory, IRepository, IRouteDefinition, IRouteHandler, IRouteOptions, IRouterConfig, IServiceProvider, IShouldQueue, IStore, IStubGenerator, ISubscriber, ITableOutput, ITaggedCache, IValidationFunction, IWorker };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map