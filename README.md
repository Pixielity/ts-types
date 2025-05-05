# TS Types

[![npm version](https://img.shields.io/npm/v/ts-types.svg)](https://www.npmjs.com/package/ts-types)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://github.com/pixielity/ts-types/workflows/CI/badge.svg)](https://github.com/pixielity/ts-types/actions)
[![Coverage Status](https://coveralls.io/repos/github/pixielity/ts-types/badge.svg?branch=main)](https://coveralls.io/github/pixielity/ts-types?branch=main)

A powerful TypeScript types library with full type safety, decorator support, and flexible configuration.

## Features

- 🔒 **Type-safe**: Full TypeScript support with proper type inference
- 🧩 **Flexible**: Mix any number of classes with different strategies
- 🎭 **Decorator support**: Inherit decorators from constituent classes
- ⚙️ **Configurable**: Choose between different typesg strategies
- 🔍 **Tracking**: Track and detect types at runtime
- 🏗️ **Abstract class support**: Mix abstract classes with concrete implementations

## Installation

```bash

# npm

npm install ts-types

# yarn

yarn add ts-types

# pnpm

pnpm add ts-types
```

## Basic Usage

```typescript
import { Mixin } from 'ts-types';

// Define your classes
class Logger {
log(message: string) {
console.log(`[LOG]: ${message}`);
}
}

class Serializable {
serialize() {
return JSON.stringify(this);
}
}

// Create a mixed class
const LoggableSerializable = Mixin(Logger, Serializable);

// Use the mixed class
const instance = new LoggableSerializable();
instance.log('Hello, world!'); // [LOG]: Hello, world!
console.log(instance.serialize()); // {"message":"Hello, world!"}
```

## Using the Decorator

```typescript
import { Mix } from 'ts-types';

class Logger {
log(message: string) {
console.log(`[LOG]: ${message}`);
}
}

class Serializable {
serialize() {
return JSON.stringify(this);
}
}

@Mix(Logger, Serializable)
class User {
name: string;

constructor(name: string) {
this.name = name;
}
}

const user = new User('John');
user.log('User created'); // [LOG]: User created
console.log(user.serialize()); // {"name":"John"}
```

## Configuration

TS Types provides several configuration options to customize its behavior:

```typescript
import { settings } from 'ts-types';

// Configure initialization function
settings.initFunction = 'initialize';

// Configure prototype strategy
settings.prototypeStrategy = 'proxy'; // 'copy' (default) or 'proxy'

// Configure statics strategy
settings.staticsStrategy = 'proxy'; // 'copy' (default) or 'proxy'

// Configure decorator inheritance
settings.decoratorInheritance = 'direct'; // 'deep' (default), 'direct', or 'none'
```

### Configuration Options

| Option                 | Description                                              | Default  | Values                            |
| ---------------------- | -------------------------------------------------------- | -------- | --------------------------------- |
| `initFunction`         | Name of the initialization function to call after typesg | `null`   | `string` or `null`                |
| `prototypeStrategy`    | Strategy for handling prototype properties               | `'copy'` | `'copy'` or `'proxy'`             |
| `staticsStrategy`      | Strategy for handling static properties                  | `'copy'` | `'copy'` or `'proxy'`             |
| `decoratorInheritance` | Strategy for inheriting decorators                       | `'deep'` | `'deep'`, `'direct'`, or `'none'` |

## Advanced Usage

### Working with Abstract Classes

```typescript
import { Mixin } from 'ts-types';

abstract class Entity {
id: string;

constructor(id: string) {
this.id = id;
}

abstract getType(): string;
}

class Product {
name: string;
price: number;

constructor(name: string, price: number) {
this.name = name;
this.price = price;
}

getType(): string {
return 'Product';
}
}

const EntityProduct = Mixin(Entity, Product);

const product = new EntityProduct('abc123', 'Laptop', 999);
console.log(product.id); // abc123
console.log(product.name); // Laptop
console.log(product.getType()); // Product
```

### Tracking Mixins

```typescript
import { Mixin, hasMixin, getMixinsForClass } from 'ts-types';

class A {
methodA() { return 'A'; }
}

class B {
methodB() { return 'B'; }
}

const AB = Mixin(A, B);
const instance = new AB();

// Check if an instance has a specific types
console.log(hasMixin(instance, A)); // true
console.log(hasMixin(instance, B)); // true

// Get all types for a class
const types = getMixinsForClass(AB);
console.log(types); // [A, B]
```

### Decorator Inheritance

```typescript
import { Mixin, Decorate } from 'ts-types';

function LogClass(target: any) {
console.log(`Class ${target.name} was decorated`);
return target;
}

function LogProperty(target: any, propertyKey: string) {
console.log(`Property ${propertyKey} was decorated`);
}

@Decorate(LogClass)
class A {
@Decorate(LogProperty)
propertyA = 'A';
}

class B {
propertyB = 'B';
}

// The mixed class will inherit the decorators from A
const AB = Mixin(A, B);
```

## API Reference

For detailed API documentation, please see the [API Reference](./docs/README.md).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please make sure to update tests as appropriate and adhere to the code style of the project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
