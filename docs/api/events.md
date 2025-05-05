# Event System

TS Types provides a comprehensive event system for building event-driven applications. This module includes interfaces for events, listeners, subscribers, and dispatchers.

## Core Interfaces

### IEvent

The base interface for all events in the system.

\`\`\`typescript
interface IEvent {
  getEventName?(): string;
  shouldBroadcast?(): boolean;
  broadcastOn?(): string[];
  broadcastWith?(): Record<string, any>;
}
\`\`\`

Events represent something that has happened in the application. They can be dispatched and listened to by event listeners.

### IListener

Interface for event listeners that handle events when they are dispatched.

\`\`\`typescript
interface IListener<E extends IEvent = IEvent> {
  handle(event: E): Promise<void> | void;
}
\`\`\`

Listeners are responsible for reacting to events. They can perform synchronous or asynchronous operations in response to an event.

### IEventData

Data structure for events in the event stream.

\`\`\`typescript
interface IEventData<T = any> {
  name: string;
  payload: T;
  timestamp: number;
  metadata?: Record<string, any>;
  source?: string;
}
\`\`\`

This structure provides a standardized format for events flowing through the system.

### IEventBus

Interface for the event bus, which provides a centralized mechanism for dispatching and subscribing to events.

\`\`\`typescript
interface IEventBus {
  events(): Observable<IEventData>;
  ofType(eventName: string): Observable<IEventData>;
  ofClass<T extends IEvent>(eventClass: new (...args: any[]) => T): Observable<IEventData<T>>;
  on<T = any>(eventName: string): Observable<T>;
  onEvent<T extends IEvent>(eventClass: new (...args: any[]) => T): Observable<T>;
  dispatch(event: string | IEvent, payload?: any): Promise<any[]>;
  subscribe<T = any>(eventName: string, callback: (data: T) => void): () => void;
  subscribeToEvent<T extends IEvent>(eventClass: new (...args: any[]) => T, callback: (event: T) => void): () => void;
}
\`\`\`

The event bus allows components to communicate without direct dependencies on each other.

### IEventDispatcher

Interface for the event dispatcher, which is responsible for registering listeners and dispatching events.

\`\`\`typescript
interface IEventDispatcher {
  listen(event: string, listener: IListener | Function): () => void;
  hasListeners(eventName: string): boolean;
  subscribe(subscriber: ISubscriber): void;
  dispatch(event: string | IEvent, payload?: any): Promise<any[]>;
  until(event: string | IEvent, payload?: any): Promise<any>;
  forget(event: string): void;
  forgetAll(): void;
  events(): Observable<IEventData>;
  // ... additional methods
}
\`\`\`

The dispatcher manages the registration of listeners and the process of notifying them when events occur.

### ISubscriber

Interface for event subscribers, which can listen to multiple events and register multiple listeners.

\`\`\`typescript
interface ISubscriber {
  subscribe(dispatcher: IEventDispatcher): void;
}
\`\`\`

Subscribers provide a way to group related event listeners together.

## Usage Examples

### Creating an Event

\`\`\`typescript
import { IEvent } from 'ts-types';

class UserCreatedEvent implements IEvent {
  constructor(public readonly userId: string, public readonly email: string) {}

  getEventName(): string {
    return 'user.created';
  }

  shouldBroadcast(): boolean {
    return true;
  }

  broadcastOn(): string[] {
    return ['users'];
  }
}
\`\`\`

### Creating a Listener

\`\`\`typescript
import { IListener } from 'ts-types';
import { UserCreatedEvent } from './events';

class SendWelcomeEmailListener implements IListener<UserCreatedEvent> {
  async handle(event: UserCreatedEvent): Promise<void> {
    // Send welcome email to event.email
    console.log(`Sending welcome email to ${event.email}`);
  }
}
\`\`\`

### Creating a Subscriber

\`\`\`typescript
import { ISubscriber, IEventDispatcher } from 'ts-types';
import { UserCreatedEvent } from './events';
import { SendWelcomeEmailListener } from './listeners';

class UserEventsSubscriber implements ISubscriber {
  subscribe(dispatcher: IEventDispatcher): void {
    dispatcher.listen(UserCreatedEvent.name, new SendWelcomeEmailListener());
  }
}
\`\`\`

### Using the Event Bus

\`\`\`typescript
import { IEventBus } from 'ts-types';
import { UserCreatedEvent } from './events';

class UserService {
  constructor(private eventBus: IEventBus) {}

  async createUser(email: string, password: string): Promise<string> {
    // Create user logic
    const userId = 'user-123';

    // Dispatch event
    await this.eventBus.dispatch(new UserCreatedEvent(userId, email));

    return userId;
  }
}
\`\`\`

### Subscribing to Events

\`\`\`typescript
import { IEventBus } from 'ts-types';
import { UserCreatedEvent } from './events';

class AnalyticsService {
  constructor(private eventBus: IEventBus) {
    this.setupSubscriptions();
  }

  private setupSubscriptions(): void {
    this.eventBus.subscribeToEvent(UserCreatedEvent, (event) => {
      this.trackUserCreation(event.userId, event.email);
    });
  }

  private trackUserCreation(userId: string, email: string): void {
    console.log(`User created: ${userId}, ${email}`);
  }
}
\`\`\`

## Best Practices

1. **Keep Events Immutable**: Events should be immutable data structures that represent something that has happened.

2. **Single Responsibility**: Each listener should have a single responsibility and should not modify the event.

3. **Avoid Circular Dependencies**: Be careful not to create circular dependencies between event producers and consumers.

4. **Use Typed Events**: Leverage TypeScript's type system to ensure type safety in your event system.

5. **Consider Event Sourcing**: For complex applications, consider implementing event sourcing patterns.
