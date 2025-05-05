# Redis System

TS Types provides a comprehensive Redis system for interacting with Redis servers. This module includes interfaces for connections, connectors, and factories.

## Core Interfaces

### IRedisConnection

The base interface for Redis connections.

\`\`\`typescript
interface IRedisConnection {
  getClient(): any;
  getPrefix(): string;
  setPrefix(prefix: string): void;
  get(key: string): Promise<any>;
  set(key: string, value: any, ttl?: number): Promise<any>;
  // ... many more Redis commands
}
\`\`\`

This interface provides methods for interacting with Redis, including all standard Redis commands.

### IRedisConnection

Extended interface for Redis connections with additional functionality.

\`\`\`typescript
interface IRedisConnection extends IRedisConnection {
  subscribe(channels: string | string[], callback: (message: string, channel: string) => void): Promise<void>;
  psubscribe(patterns: string | string[], callback: (message: string, channel: string, pattern: string) => void): Promise<void>;
  command(method: string, parameters?: any[]): Promise<any>;
  // ... additional methods
}
\`\`\`

This interface adds pub/sub functionality and the ability to run arbitrary Redis commands.

### IRedisConnector

Interface for establishing connections to Redis servers.

\`\`\`typescript
interface IRedisConnector {
  connect(config: Record<string, any>, options: Record<string, any>): IRedisConnection;
  connectToCluster(config: Record<string, any>[], clusterOptions: Record<string, any>, options: Record<string, any>): IRedisConnection;
}
\`\`\`

The connector is responsible for creating new Redis connections based on configuration.

### IRedisFactory

Interface for managing Redis connections.

\`\`\`typescript
interface IRedisFactory {
  connection(name?: string): IRedisConnection;
  make(config: Record<string, any>): IRedisConnection;
  getDefaultConnection(): string;
  setDefaultConnection(name: string): void;
  getConnections(): Record<string, IRedisConnection>;
  hasConnection(name: string): boolean;
  addConnection(name: string, connection: IRedisConnection): void;
  removeConnection(name: string): void;
}
\`\`\`

The factory provides a centralized way to manage multiple Redis connections.

## Usage Examples

### Creating a Redis Connection

\`\`\`typescript
import { IRedisConnector } from 'ts-types';

class RedisService {
  constructor(private connector: IRedisConnector) {}

  createConnection() {
    const redis = this.connector.connect({
      host: 'localhost',
      port: 6379,
      password: 'secret'
    }, {
      retryStrategy: (times) => Math.min(times * 50, 2000)
    });

    return redis;
  }

  createClusterConnection() {
    const redis = this.connector.connectToCluster([
      { host: 'redis-1', port: 6379 },
      { host: 'redis-2', port: 6379 },
      { host: 'redis-3', port: 6379 }
    ], {
      scaleReads: 'all'
    }, {
      maxRedirections: 16
    });

    return redis;
  }
}
\`\`\`

### Using the Redis Factory

\`\`\`typescript
import { IRedisFactory } from 'ts-types';

class CacheService {
  constructor(private redisFactory: IRedisFactory) {}

  async get(key: string): Promise<any> {
    const redis = this.redisFactory.connection('cache');
    return redis.get(key);
  }

  async set(key: string, value: any, ttl?: number): Promise<void> {
    const redis = this.redisFactory.connection('cache');
    await redis.set(key, value, ttl);
  }

  async delete(key: string): Promise<void> {
    const redis = this.redisFactory.connection('cache');
    await redis.del(key);
  }
}
\`\`\`

### Working with Redis Commands

\`\`\`typescript
import { IRedisConnection } from 'ts-types';

class UserService {
  constructor(private redis: IRedisConnection) {}

  async getUserData(userId: string): Promise<Record<string, string>> {
    return this.redis.hgetall(`user:${userId}`);
  }

  async setUserData(userId: string, data: Record<string, any>): Promise<void> {
    await this.redis.hmset(`user:${userId}`, data);
  }

  async incrementLoginCount(userId: string): Promise<number> {
    return this.redis.hincrby(`user:${userId}`, 'login_count', 1);
  }

  async executeCustomCommand(command: string, args: any[]): Promise<any> {
    return this.redis.command(command, args);
  }
}
\`\`\`

### Using Pub/Sub

\`\`\`typescript
import { IRedisConnection } from 'ts-types';

class NotificationService {
  constructor(private redis: IRedisConnection) {
    this.setupSubscriptions();
  }

  private async setupSubscriptions(): Promise<void> {
    await this.redis.subscribe(['user:notifications', 'system:alerts'], (message, channel) => {
      console.log(`Received message on ${channel}: ${message}`);
      this.processNotification(channel, message);
    });

    await this.redis.psubscribe(['user:*:events'], (message, channel, pattern) => {
      console.log(`Received message on ${channel} matching ${pattern}: ${message}`);
      this.processEvent(channel, message);
    });
  }

  async publishNotification(channel: string, message: string): Promise<number> {
    return this.redis.publish(channel, message);
  }

  private processNotification(channel: string, message: string): void {
    // Process notification logic
  }

  private processEvent(channel: string, message: string): void {
    // Process event logic
  }
}
\`\`\`

## Best Practices

1. **Connection Pooling**: Use a connection pool for high-traffic applications to manage Redis connections efficiently.

2. **Prefix Keys**: Use key prefixes to namespace your Redis keys and avoid collisions.

3. **Pipelining**: Use pipelining for batching multiple commands to reduce network overhead.

4. **Transactions**: Use transactions when you need to ensure that a group of commands executes atomically.

5. **Error Handling**: Implement proper error handling for Redis operations, especially for critical operations.

6. **Monitoring**: Monitor Redis memory usage, connection count, and command execution time.

7. **Lua Scripts**: Use Lua scripts for complex operations that need to be atomic.

8. **Connection Management**: Properly manage Redis connections by closing them when they are no longer needed.

\`\`\`

I've completed the implementation of the Redis interfaces for the TS Types library. These interfaces provide a comprehensive set of methods for interacting with Redis, including:

1. `IRedisConnection` - The base interface for Redis connections with standard Redis commands
2. `IRedisConnection` - Extended interface with pub/sub functionality and arbitrary command execution
3. `IRedisConnector` - Interface for establishing connections to Redis servers and clusters
4. `IRedisFactory` - Interface for managing multiple Redis connections

The Redis system provides a robust foundation for building applications that need to interact with Redis, whether for caching, pub/sub messaging, or data storage.
