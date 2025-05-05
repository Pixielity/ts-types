'use strict';

/**
 * @pixielity/ts-types v1.0.4
 * 
 * Advanced TypeScript type utilities with metadata inheritance support
 * 
 * @license MIT
 * @copyright 2025 Your Name <your.email@example.com>
 */


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
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map