# Configuration Schema

The `IConfigSchema` interface defines the structure for validating configuration values in the TS Types library. It is based on JSON Schema but with TypeScript-specific enhancements.

## Interface Definition

\`\`\`typescript
interface IConfigSchema {
  type?: "string" | "number" | "integer" | "boolean" | "array" | "object" | "null" | string[];
  required?: boolean;
  enum?: any[];
  minimum?: number;
  maximum?: number;
  exclusiveMinimum?: boolean | number;
  exclusiveMaximum?: boolean | number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  format?: string;
  properties?: Record<string, IConfigSchema>;
  required?: string[];
  additionalProperties?: boolean | IConfigSchema;
  propertyNames?: IConfigSchema;
  minProperties?: number;
  maxProperties?: number;
  items?: IConfigSchema | IConfigSchema[];
  additionalItems?: boolean | IConfigSchema;
  uniqueItems?: boolean;
  minItems?: number;
  maxItems?: number;
  allOf?: IConfigSchema[];
  anyOf?: IConfigSchema[];
  oneOf?: IConfigSchema[];
  not?: IConfigSchema;
  if?: IConfigSchema;
  then?: IConfigSchema;
  else?: IConfigSchema;
  default?: any;
  examples?: any[];
  description?: string;
  title?: string;
  deprecated?: boolean;
  readOnly?: boolean;
  writeOnly?: boolean;
  validate?: (value: any) => boolean | Promise<boolean>;
  errorMessage?: string | Record<string, string>;
  [key: string]: any;
}
\`\`\`

## Properties

### Basic Validation

- **type**: The expected type of the configuration value. Can be a single type or an array of types.
- **required**: Whether the value is required.
- **enum**: An array of allowed values.
- **default**: The default value if not specified.
- **description**: A description of the configuration value.
- **title**: A title for the schema.
- **examples**: Examples of valid values.

### Number Validation

- **minimum**: The minimum value for numbers.
- **maximum**: The maximum value for numbers.
- **exclusiveMinimum**: Whether the minimum value is exclusive.
- **exclusiveMaximum**: Whether the maximum value is exclusive.

### String Validation

- **minLength**: The minimum length for strings.
- **maxLength**: The maximum length for strings.
- **pattern**: A regular expression pattern for strings.
- **format**: A predefined format for strings (e.g., email, date-time).

### Object Validation

- **properties**: A map of property names to their schemas.
- **required**: An array of required property names.
- **additionalProperties**: Whether additional properties are allowed.
- **propertyNames**: A schema for property names.
- **minProperties**: The minimum number of properties.
- **maxProperties**: The maximum number of properties.

### Array Validation

- **items**: The schema for array items.
- **additionalItems**: Whether additional items are allowed.
- **uniqueItems**: Whether array items must be unique.
- **minItems**: The minimum number of items.
- **maxItems**: The maximum number of items.

### Logical Validation

- **allOf**: All schemas must be valid.
- **anyOf**: At least one schema must be valid.
- **oneOf**: Exactly one schema must be valid.
- **not**: The schema must not be valid.
- **if/then/else**: Conditional validation.

### Custom Validation

- **validate**: A custom validation function.
- **errorMessage**: Custom error messages for validation failures.

## Usage Examples

### Basic Schema

\`\`\`typescript
const userSchema: IConfigSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      minLength: 2,
      maxLength: 50,
      description: "The user's full name"
    },
    email: {
      type: "string",
      format: "email",
      description: "The user's email address"
    },
    age: {
      type: "integer",
      minimum: 0,
      description: "The user's age"
    },
    roles: {
      type: "array",
      items: {
        type: "string",
        enum: ["admin", "user", "guest"]
      },
      description: "The user's roles"
    }
  },
  required: ["name", "email"],
  additionalProperties: false
};
\`\`\`

### Nested Schema

\`\`\`typescript
const appSchema: IConfigSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      description: "The application name"
    },
    version: {
      type: "string",
      pattern: "^\\d+\\.\\d+\\.\\d+$",
      description: "The application version (semver)"
    },
    database: {
      type: "object",
      properties: {
        host: { type: "string" },
        port: { type: "integer", minimum: 1, maximum: 65535 },
        username: { type: "string" },
        password: { type: "string" },
        name: { type: "string" }
      },
      required: ["host", "port", "name"],
      description: "Database connection settings"
    },
    cache: {
      type: "object",
      properties: {
        enabled: { type: "boolean", default: true },
        ttl: { type: "integer", minimum: 0, default: 3600 }
      },
      description: "Cache settings"
    },
    logging: {
      type: "object",
      properties: {
        level: { 
          type: "string", 
          enum: ["debug", "info", "warn", "error"],
          default: "info"
        },
        file: { type: "string", default: "app.log" }
      },
      description: "Logging settings"
    }
  },
  required: ["name", "version"]
};
\`\`\`

### Conditional Schema

\`\`\`typescript
const paymentSchema: IConfigSchema = {
  type: "object",
  properties: {
    method: {
      type: "string",
      enum: ["credit_card", "paypal", "bank_transfer"],
      description: "The payment method"
    }
  },
  required: ["method"],
  if: {
    properties: { method: { enum: ["credit_card"] } }
  },
  then: {
    properties: {
      card_number: { type: "string", pattern: "^\\d{16}$" },
      expiry: { type: "string", pattern: "^\\d{2}/\\d{2}$" },
      cvv: { type: "string", pattern: "^\\d{3,4}$" }
    },
    required: ["card_number", "expiry", "cvv"]
  },
  else: {
    if: {
      properties: { method: { enum: ["paypal"] } }
    },
    then: {
      properties: {
        email: { type: "string", format: "email" }
      },
      required: ["email"]
    },
    else: {
      properties: {
        account_number: { type: "string" },
        routing_number: { type: "string" }
      },
      required: ["account_number", "routing_number"]
    }
  }
};
\`\`\`

### Custom Validation

\`\`\`typescript
const customSchema: IConfigSchema = {
  type: "object",
  properties: {
    username: {
      type: "string",
      minLength: 3,
      maxLength: 20,
      pattern: "^[a-zA-Z0-9_]+$",
      description: "The username (alphanumeric and underscore only)"
    },
    password: {
      type: "string",
      minLength: 8,
      description: "The password",
      validate: (value) => {
        // Must contain at least one uppercase letter, one lowercase letter,
        // one number, and one special character
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/.test(value);
      },
      errorMessage: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    }
  },
  required: ["username", "password"]
};
\`\`\`

## Integration with Configuration System

The `IConfigSchema` interface is used by the configuration system to validate configuration values:

\`\`\`typescript
import { IConfigRepository, IConfigSchema } from 'ts-types';

// Define schemas
const schemas: Record<string, IConfigSchema> = {
  'app.name': {
    type: 'string',
    minLength: 1,
    description: 'The application name'
  },
  'app.port': {
    type: 'integer',
    minimum: 1,
    maximum: 65535,
    default: 3000,
    description: 'The port the application listens on'
  },
  'database.url': {
    type: 'string',
    format: 'uri',
    description: 'The database connection URL'
  }
};

// Set schemas on the config repository
function configureApp(config: IConfigRepository) {
  config.setSchemas(schemas);
  config.setValidation(true);
  
  // Now all config values will be validated against their schemas
  const appName = config.getString('app.name'); // Will throw if invalid
  const port = config.getInt('app.port'); // Will use default if not set
}
\`\`\`

## Best Practices

1. **Define Schemas Early**: Define schemas early in your application lifecycle to catch configuration errors at startup.

2. **Use Descriptive Messages**: Provide clear descriptions and error messages to help users understand what's expected.

3. **Set Sensible Defaults**: Use the `default` property to provide sensible defaults for optional values.

4. **Validate Environment Variables**: Use schemas to validate environment variables when they're loaded into your configuration.

5. **Document Schemas**: Use the `description` property to document what each configuration value is for.

6. **Use Formats**: Use the `format` property for common string formats like email, URI, etc.

7. **Limit Additional Properties**: Set `additionalProperties: false` to catch typos in configuration keys.

8. **Use Conditional Validation**: Use `if/then/else` for configuration values that depend on other values.
\`\`\`

I've created the `IConfigSchema` interface for the TS Types library. This interface provides a comprehensive structure for validating configuration values, based on JSON Schema but with TypeScript-specific enhancements.

The interface includes properties for:

1. **Basic validation** - type checking, required fields, enumerations
2. **Number validation** - min/max values, exclusive ranges
3. **String validation** - min/max length, pattern matching, formats
4. **Object validation** - property schemas, required properties, additional properties
5. **Array validation** - item schemas, uniqueness, min/max items
6. **Logical validation** - allOf, anyOf, oneOf, not, conditional validation
7. **Custom validation** - custom validation functions, error messages

I've also updated the related interfaces (`IConfigRepository` and `IConfigValidator`) to use the new `IConfigSchema` interface, and added comprehensive documentation with usage examples.

This schema system provides a robust foundation for validating configuration values in TypeScript applications, ensuring that configuration is correct before it's used.
