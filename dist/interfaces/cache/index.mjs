/**
 * @pixielity/ts-types v1.0.1
 * 
 * Advanced TypeScript type utilities with metadata inheritance support
 * 
 * @license MIT
 * @copyright 2025 Your Name <your.email@example.com>
 */


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

export { ICache, ICacheManager, ILock, ILockProvider, IRepository, IStore, ITaggedCache };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map