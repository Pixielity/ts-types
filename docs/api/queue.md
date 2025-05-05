# Queue System

TS Types provides a comprehensive queue system for building distributed and asynchronous applications. This module includes interfaces for jobs, queues, workers, and job registries.

## Core Interfaces

### IQueueable

The base interface for jobs that can be queued.

\`\`\`typescript
interface IQueueable extends IShouldQueue {
  middleware?(): string[];
  shouldBeEncrypted?(): boolean;
  handle(data: any): Promise<void> | void;
  failed?(error: Error): Promise<void> | void;
  tries?(): number;
  backoff?(): number;
  maxExceptions?(): number;
  shouldRelease?(error: Error): boolean;
  retryAfter?(attempt: number): number;
  timeout?(): number;
}
\`\`\`

Queueable jobs represent units of work that can be processed asynchronously through a queue.

### IShouldQueue

Interface for objects that can be queued.

\`\`\`typescript
interface IShouldQueue {
  shouldQueue(): boolean;
  connection?(): string | null;
  queue?(): string | null;
  delay?(): number;
}
\`\`\`

This interface indicates that an object should be processed asynchronously.

### IJobOptions

Options for job processing.

\`\`\`typescript
interface IJobOptions {
  queue?: string;
  connection?: string;
  delay?: number;
  tries?: number;
  timeout?: number;
  backoff?: number | number[];
  maxExceptions?: number;
  encrypted?: boolean;
  middleware?: string[];
  tags?: string[];
  priority?: number;
}
\`\`\`

This structure provides configuration options for job processing.

### IQueueConnection

Interface for queue connections, which are responsible for processing queueable jobs.

\`\`\`typescript
interface IQueueConnection {
  push(job: IQueueable, data: any, queue?: string): Promise<void>;
  later(delay: number, job: IQueueable, data: any, queue?: string): Promise<void>;
  bulk(jobs: IQueueable[], data: any, queue?: string): Promise<void>;
  process(queue?: string, count?: number): Promise<number>;
  size(queue?: string): Promise<number>;
  delayedSize(queue?: string): Promise<number>;
  clear(queue?: string): Promise<void>;
  clearAll(): Promise<void>;
  release(job: IQueueable, data: any, delay?: number, queue?: string): Promise<void>;
  failed(job: IQueueable, data: any, error: Error): Promise<void>;
  getName(): string;
  getDefaultQueue(): string;
  setDefaultQueue(queue: string): void;
}
\`\`\`

Queue connections handle the actual processing of jobs.

### IQueueManager

Interface for the queue manager, which is responsible for managing queue connections and dispatching jobs.

\`\`\`typescript
interface IQueueManager {
  addConnection(name: string, connection: IQueueConnection): void;
  connection(name?: string): IQueueConnection;
  setDefaultConnection(name: string): void;
  push(job: IQueueable, data: any, connectionName?: string | null, queue?: string | null): Promise<void>;
  later(delay: number, job: IQueueable, data: any, connectionName?: string | null, queue?: string | null): Promise<void>;
  bulk(jobs: IQueueable[], data: any, connectionName?: string | null, queue?: string | null): Promise<void>;
  release(job: IQueueable, data: any, delay?: number, connectionName?: string | null, queue?: string | null): Promise<void>;
  failed(job: IQueueable, data: any, error: Error, connectionName?: string | null): Promise<void>;
  getDefaultConnection(): string;
  getConnections(): Record<string, IQueueConnection>;
}
\`\`\`

The queue manager provides a centralized way to manage queue connections and dispatch jobs.

### IJobRegistry

Interface for job registry, which is responsible for registering and resolving job classes.

\`\`\`typescript
interface IJobRegistry {
  register(name: string, jobClass: new (...args: any[]) => IQueueable): void;
  registerMany(jobClasses: Map<string, new (...args: any[]) => IQueueable>): void;
  has(name: string): boolean;
  get(name: string): new (...args: any[]) => IQueueable;
  make(name: string, ...args: any[]): IQueueable;
  all(): Map<string, new (...args: any[]) => IQueueable>;
  registerClass(jobClass: new (...args: any[]) => IQueueable): void;
  unregister(name: string): void;
}
\`\`\`

The job registry manages job classes and allows creating instances of them.

### IWorker

Interface for queue workers, which are responsible for processing jobs from a queue.

\`\`\`typescript
interface IWorker {
  start(): Promise<void>;
  stop(): Promise<void>;
  processNext(queue?: string): Promise<boolean>;
  getStatus(): string;
  setMaxAttempts(maxAttempts: number): void;
  setTimeout(timeout: number): void;
  setSleep(sleep: number): void;
  getId(): string;
  getProcessedCount(): number;
  getFailedCount(): number;
  on(event: string, handler: Function): () => void;
}
\`\`\`

Workers handle the actual processing of jobs from a queue.

## Usage Examples

### Creating a Job

\`\`\`typescript
import { IQueueable } from 'ts-types';

class SendEmailJob implements IQueueable {
  constructor(private readonly email: string, private readonly subject: string, private readonly body: string) {}

  shouldQueue(): boolean {
    return true;
  }

  queue(): string | null {
    return 'emails';
  }

  handle(data: any): Promise<void> {
    // Send email logic
    console.log(`Sending email to ${this.email} with subject: ${this.subject}`);
    return Promise.resolve();
  }

  tries(): number {
    return 3;
  }

  backoff(): number {
    return 60; // 1 minute
  }

  failed(error: Error): void {
    console.error(`Failed to send email to ${this.email}: ${error.message}`);
  }
}
\`\`\`

### Using the Queue Manager

\`\`\`typescript
import { IQueueManager } from 'ts-types';
import { SendEmailJob } from './jobs';

class EmailService {
  constructor(private queueManager: IQueueManager) {}

  async sendWelcomeEmail(email: string): Promise<void> {
    const job = new SendEmailJob(
      email,
      'Welcome to our platform',
      'Thank you for signing up!'
    );

    await this.queueManager.push(job, {
      userId: 'user-123',
      timestamp: Date.now()
    });
  }
}
\`\`\`

### Creating a Worker

\`\`\`typescript
import { IWorker } from 'ts-types';

class EmailWorker {
  constructor(private worker: IWorker) {
    this.setupWorker();
  }

  private setupWorker(): void {
    this.worker.setMaxAttempts(5);
    this.worker.setTimeout(30); // 30 seconds
    this.worker.setSleep(5); // 5 seconds between polls

    this.worker.on('processed', (job) => {
      console.log(`Processed job: ${job.constructor.name}`);
    });

    this.worker.on('failed', (job, error) => {
      console.error(`Failed job: ${job.constructor.name}`, error);
    });
  }

  async start(): Promise<void> {
    await this.worker.start();
    console.log(`Worker ${this.worker.getId()} started`);
  }

  async stop(): Promise<void> {
    await this.worker.stop();
    console.log(`Worker ${this.worker.getId()} stopped`);
  }
}
\`\`\`

### Using the Job Registry

\`\`\`typescript
import { IJobRegistry } from 'ts-types';
import { SendEmailJob, ProcessPaymentJob, GenerateReportJob } from './jobs';

class JobRegistrar {
  constructor(private jobRegistry: IJobRegistry) {
    this.registerJobs();
  }

  private registerJobs(): void {
    this.jobRegistry.register('send-email', SendEmailJob);
    this.jobRegistry.register('process-payment', ProcessPaymentJob);
    this.jobRegistry.register('generate-report', GenerateReportJob);
  }

  createJob(name: string, ...args: any[]): IQueueable {
    return this.jobRegistry.make(name, ...args);
  }
}
\`\`\`

## Best Practices

1. **Job Idempotency**: Design jobs to be idempotent so they can be safely retried without side effects.

2. **Appropriate Timeouts**: Set appropriate timeouts for jobs based on their expected execution time.

3. **Error Handling**: Implement proper error handling in job handlers and use the `failed` method to handle failures.

4. **Queue Segmentation**: Use different queues for different types of jobs to manage priorities and resource allocation.

5. **Monitoring**: Monitor queue sizes, processing rates, and failure rates to ensure system health.

6. **Backoff Strategies**: Implement exponential backoff for retries to avoid overwhelming systems during recovery.

7. **Job Data Serialization**: Ensure job data can be properly serialized and deserialized for storage in the queue.
