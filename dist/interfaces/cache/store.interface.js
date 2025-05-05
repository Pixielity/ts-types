'use strict';

/**
 * @pixielity/ts-types v1.0.4
 * 
 * Advanced TypeScript type utilities with metadata inheritance support
 * 
 * @license MIT
 * @copyright 2025 Your Name <your.email@example.com>
 */


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
//# sourceMappingURL=store.interface.js.map
//# sourceMappingURL=store.interface.js.map