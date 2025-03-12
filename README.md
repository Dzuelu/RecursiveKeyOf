# RecursiveKeyOf

Need the keys of an interface or class but want to make sure they are typed correctly while doing it?
This has been useful enough to me to make a package exporting just this type.

Slightly modified from https://stackoverflow.com/a/65333050

## Example
```typescript
interface TestType {
  array: string[];
  object: {
    array: string[];
    boolean: boolean;
    number: number;
    object2: {
      array: string[];
      boolean: boolean;
      number: number;
      object3: {};
      string: string;
    };
    string: string;
  };
  string: string;
}

const types1: RecursiveKeyOf<TestType>[] = [
  'array',
  'object.number',
  'object.object2',
  'object.object2.array',
  'object.object2.boolean',
  'object.object2.number',
  'object.object2.object3',
  'object.object2.string',
  'object.string',
  'string'
];

// or

const types2: RecursiveKeyValueOf<TestType>[] = [
  'array',
  // 'object', // not available
  'object.array',
  'object.boolean',
  'object.number',
  // 'object.object2', // not available
  'object.object2.array',
  'object.object2.boolean',
  'object.object2.number',
  // 'object.object2.object3', // not available
  'object.object2.string',
  'object.string',
  'string'
];

```
