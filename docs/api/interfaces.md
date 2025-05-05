# Interfaces

This document describes the core interfaces provided by TS Types.

## Core Interfaces

### IApplication

The `IApplication` interface represents the main application container.

\`\`\`typescript
interface IApplication {
  getContainer(): IContainer;
  registerCoreProviders(): IApplication;
  register(provider: any): IApplication;
  boot(): IApplication;
  isBooted(): boolean;
  make<T>(abstract: string): T;
}
\`\`\`

### IContainer

The `IContainer` interface represents the service container.

\`\`\`typescript
interface IContainer {
  getInversifyContainer(): InversifyContainer;
  has(abstract: string): boolean;
  bind<T>(abstract: string | interfaces.ServiceIdentifier<T>, concrete?: any, shared?: boolean): IContainer | interfaces.BindingToSyntax<T>;
  singleton(abstract: string, concrete: any): IContainer;
  instance(abstract: string, instance: any): IContainer;
  make<T>(abstract: string, parameters?: any[]): T;
  // ... other methods
}
\`\`\`

### ICache

The `ICache` interface provides methods for storing, retrieving, and managing cached data.

\`\`\`typescript
interface ICache {
  get<T>(key: string, defaultValue?: T): Promise<T | undefined>;
  put<T>(key: string, value: T, ttl?: number): Promise<boolean>;
  forever<T>(key: string, value: T): Promise<boolean>;
  forget(key: string): Promise<boolean>;
  flush(): Promise<boolean>;
  // ... other methods
}
\`\`\`

## Configuration Interfaces

### IConfigRepository

The `IConfigRepository` interface provides methods for accessing configuration values.

\`\`\`typescript
interface IConfigRepository {
  getEnvironment(): ConfigEnvironment;
  setSchemas(schemas: Record<string, IConfigSchema>): void;
  setValidation(enable: boolean): void;
  setCaching(enable: boolean): void;
  clearCache(): void;
  has(key: string): boolean;
  get<T>(key: string, defaultValue?: T): T;
  // ... other methods
}
\`\`\`

### IConfigSchema

The `IConfigSchema` interface defines the structure for configuration validation schemas.

\`\`\`typescript
interface IConfigSchema {
  type?: "string" | "number" | "integer" | "boolean" | "array" | "object" | "null";
  required?: boolean;
  enum?: any[];
  minimum?: number;
  maximum?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  properties?: Record<string, IConfigSchema>;
  items?: IConfigSchema;
  // ... other properties
}
\`\`\`

## Routing Interfaces

### IController

The `IController` interface defines the contract for route controllers.

\`\`\`typescript
interface IController {
  new (...args: any[]): any;
}
\`\`\`

### IMiddleware

The `IMiddleware` interface defines the contract for route middleware.

\`\`\`typescript
interface IMiddleware {
  (req: NextApiRequest, res: NextApiResponse, next: () => Promise<void>): Promise<void>;
}
\`\`\`

### IGuard

The `IGuard` interface defines the contract for route guards.

\`\`\`typescript
interface IGuard {
  canActivate(req: NextApiRequest, res: NextApiResponse): Promise<boolean> | boolean;
}
\`\`\`

## Decorator Interfaces

### IClassDecoratorOptions

The `IClassDecoratorOptions` interface defines options for creating class decorators.

\`\`\`typescript
interface IClassDecoratorOptions {
  copyPrototype?: boolean;
  copyStatic?: boolean;
  copyMetadata?: boolean;
  beforeConstructor?: (target: any, args: any[]) => void;
  afterConstructor?: (instance: any, target: any, args: any[]) => void;
  transformInstance?: (instance: any, target: any, args: any[]) => any;
  // ... other options
}
\`\`\`

### ILogOptions

The `ILogOptions` interface defines options for the log decorator.

\`\`\`typescript
interface ILogOptions {
  level?: "debug" | "info" | "warn" | "error";
  logArgs?: boolean;
  logReturn?: boolean;
  logTime?: boolean;
  logger?: any;
  logErrors?: boolean;
  format?: string;
}
\`\`\`

## React Interfaces

### IAppProviderProps

The `IAppProviderProps` interface defines props for the AppProvider component.

\`\`\`typescript
interface IAppProviderProps {
  app: IApplication;
  children: ReactNode;
  createScope?: boolean;
}
\`\`\`

### ICacheValueResult

The `ICacheValueResult` interface defines the result of the useCacheValue hook.

\`\`\`typescript
interface ICacheValueResult<T> {
  value: T | null | undefined;
  setValue: (newValue: T, ttl?: number) => Promise<boolean>;
  removeValue: () => Promise<boolean>;
  loading: boolean;
  refresh: () => Promise<void>;
  error: Error | null;
}
\`\`\`

For more detailed information about each interface, refer to the source code or the generated API documentation.
