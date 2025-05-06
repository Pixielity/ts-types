/**
 * Redis connection interface
 * Defines methods for interacting with Redis, including pub/sub functionality
 */
interface IRedisConnection {
  /**
   * Subscribe to one or more channels for messages
   * @param channels - The channel(s) to subscribe to
   * @param callback - The callback function to execute when a message is received
   * @returns Promise that resolves when the subscription is active
   *
   * @example
   * ```typescript
   * await redis.subscribe(['notifications', 'events'], (message, channel) => {
   *   console.log(`Received message on ${channel}: ${message}`);
   * });
   * ```
   */
  subscribe(
    channels: string | string[],
    callback: (message: string, channel: string) => void,
  ): Promise<void>
  /**
   * Subscribe to one or more channels with wildcards
   * @param patterns - The pattern(s) to subscribe to
   * @param callback - The callback function to execute when a message is received
   * @returns Promise that resolves when the subscription is active
   *
   * @example
   * ```typescript
   * await redis.psubscribe(['user:*:notifications', 'system:*'], (message, channel, pattern) => {
   *   console.log(`Received message on ${channel} matching ${pattern}: ${message}`);
   * });
   * ```
   */
  psubscribe(
    patterns: string | string[],
    callback: (message: string, channel: string, pattern: string) => void,
  ): Promise<void>
  /**
   * Run a command against the Redis database
   * @param method - The Redis command to execute
   * @param parameters - The parameters for the command
   * @returns The result of the command
   *
   * @example
   * ```typescript
   * // Execute a SET command
   * const result = await redis.command('set', ['user:1:name', 'John Doe']);
   *
   * // Execute a HGETALL command
   * const userData = await redis.command('hgetall', ['user:1']);
   * ```
   */
  command(method: string, parameters?: any[]): Promise<any>
  /**
   * Get the Redis client instance
   */
  getClient(): any
  /**
   * Get the key prefix
   */
  getPrefix(): string
  /**
   * Set the key prefix
   * @param prefix - The key prefix
   */
  setPrefix(prefix: string): void
  /**
   * Get a value from Redis
   * @param key - The key
   */
  get(key: string): Promise<any>
  /**
   * Set a value in Redis
   * @param key - The key
   * @param value - The value
   * @param ttl - The time to live in seconds
   */
  set(key: string, value: any, ttl?: number): Promise<any>
  /**
   * Set a value in Redis if it doesn't exist
   * @param key - The key
   * @param value - The value
   * @param ttl - The time to live in seconds
   */
  setnx(key: string, value: any, ttl?: number): Promise<any>
  /**
   * Set a value in Redis with an expiration
   * @param key - The key
   * @param ttl - The time to live in seconds
   * @param value - The value
   */
  setex(key: string, ttl: number, value: any): Promise<any>
  /**
   * Get multiple values from Redis
   * @param keys - The keys
   */
  mget(...keys: string[]): Promise<any[]>
  /**
   * Set multiple values in Redis
   * @param values - The key-value pairs
   */
  mset(values: Record<string, any>): Promise<any>
  /**
   * Delete a key from Redis
   * @param key - The key
   */
  del(key: string): Promise<number>
  /**
   * Delete multiple keys from Redis
   * @param keys - The keys
   */
  unlink(...keys: string[]): Promise<number>
  /**
   * Check if a key exists in Redis
   * @param key - The key
   */
  exists(key: string): Promise<number>
  /**
   * Increment a value in Redis
   * @param key - The key
   */
  incr(key: string): Promise<number>
  /**
   * Increment a value in Redis by a specific amount
   * @param key - The key
   * @param value - The value to increment by
   */
  incrby(key: string, value: number): Promise<number>
  /**
   * Decrement a value in Redis
   * @param key - The key
   */
  decr(key: string): Promise<number>
  /**
   * Decrement a value in Redis by a specific amount
   * @param key - The key
   * @param value - The value to decrement by
   */
  decrby(key: string, value: number): Promise<number>
  /**
   * Set a key's time to live in seconds
   * @param key - The key
   * @param ttl - The time to live in seconds
   */
  expire(key: string, ttl: number): Promise<number>
  /**
   * Get the time to live for a key in seconds
   * @param key - The key
   */
  ttl(key: string): Promise<number>
  /**
   * Execute a Lua script
   * @param script - The Lua script
   * @param keys - The keys
   * @param args - The arguments
   */
  eval(script: string, keys: string[], args: any[]): Promise<any>
  /**
   * Execute a stored Lua script
   * @param sha - The script SHA
   * @param keys - The keys
   * @param args - The arguments
   */
  evalsha(sha: string, keys: string[], args: any[]): Promise<any>
  /**
   * Add a member to a set
   * @param key - The key
   * @param members - The members
   */
  sadd(key: string, ...members: any[]): Promise<number>
  /**
   * Remove a member from a set
   * @param key - The key
   * @param members - The members
   */
  srem(key: string, ...members: any[]): Promise<number>
  /**
   * Get all members in a set
   * @param key - The key
   */
  smembers(key: string): Promise<string[]>
  /**
   * Check if a value is a member of a set
   * @param key - The key
   * @param member - The member
   */
  sismember(key: string, member: any): Promise<number>
  /**
   * Add a member to a sorted set
   * @param key - The key
   * @param score - The score
   * @param member - The member
   */
  zadd(key: string, score: number, member: any): Promise<number>
  /**
   * Remove a member from a sorted set
   * @param key - The key
   * @param member - The member
   */
  zrem(key: string, member: any): Promise<number>
  /**
   * Get a range of members in a sorted set
   * @param key - The key
   * @param start - The start index
   * @param stop - The stop index
   */
  zrange(key: string, start: number, stop: number): Promise<string[]>
  /**
   * Add a value to a list
   * @param key - The key
   * @param values - The values
   */
  lpush(key: string, ...values: any[]): Promise<number>
  /**
   * Remove and get the first element in a list
   * @param key - The key
   */
  lpop(key: string): Promise<string | null>
  /**
   * Add a value to a list
   * @param key - The key
   * @param values - The values
   */
  rpush(key: string, ...values: any[]): Promise<number>
  /**
   * Remove and get the last element in a list
   * @param key - The key
   */
  rpop(key: string): Promise<string | null>
  /**
   * Get a range of elements from a list
   * @param key - The key
   * @param start - The start index
   * @param stop - The stop index
   */
  lrange(key: string, start: number, stop: number): Promise<string[]>
  /**
   * Set the value of a hash field
   * @param key - The key
   * @param field - The field
   * @param value - The value
   */
  hset(key: string, field: string, value: any): Promise<number>
  /**
   * Get the value of a hash field
   * @param key - The key
   * @param field - The field
   */
  hget(key: string, field: string): Promise<string | null>
  /**
   * Delete a hash field
   * @param key - The key
   * @param fields - The fields
   */
  hdel(key: string, ...fields: string[]): Promise<number>
  /**
   * Get all fields and values in a hash
   * @param key - The key
   */
  hgetall(key: string): Promise<Record<string, string>>
  /**
   * Set multiple hash fields to multiple values
   * @param key - The key
   * @param values - The field-value pairs
   */
  hmset(key: string, values: Record<string, any>): Promise<any>
  /**
   * Get the values of all the given hash fields
   * @param key - The key
   * @param fields - The fields
   */
  hmget(key: string, ...fields: string[]): Promise<(string | null)[]>
  /**
   * Execute a pipeline of commands
   * @param callback - The callback function
   */
  pipeline(callback: (pipeline: any) => void): Promise<any[]>
  /**
   * Execute a transaction
   * @param callback - The callback function
   */
  transaction(callback: (transaction: any) => void): Promise<any[]>
  /**
   * Publish a message to a channel
   * @param channel - The channel
   * @param message - The message
   */
  publish(channel: string, message: string): Promise<number>
  /**
   * Close the Redis connection
   */
  disconnect(): Promise<void>
}
/**
 * DI token for IRedisConnection interface
 */
declare namespace IRedisConnection {
  const $: unique symbol
}

export { IRedisConnection }
