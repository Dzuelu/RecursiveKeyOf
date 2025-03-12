import { RecursiveKeyOf } from '../src';

interface TestType {
  array: string[];
  boolean: boolean;
  number: number;
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

test('default types work as expected', () => {
  const types: RecursiveKeyOf<TestType>[] = [
    'array',
    'boolean',
    'number',
    'object',
    'object.array',
    'object.boolean',
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
  expect(types).toBe(types);
});

test('custom separator types work as expected', () => {
  const types: RecursiveKeyOf<TestType, '/'>[] = [
    'array',
    'boolean',
    'number',
    'object',
    'object/array',
    'object/boolean',
    'object/number',
    'object/object2',
    'object/object2/array',
    'object/object2/boolean',
    'object/object2/number',
    'object/object2/object3',
    'object/object2/string',
    'object/string',
    'string'
  ];
  expect(types).toBe(types);
});

test('custom separator types work as expected', () => {
  const types: RecursiveKeyOf<TestType, '/'>[] = [
    'array',
    'object/boolean',
    'object/object2',
    'object/object2/object3',
    'object/object2/string',
    'object/string',
    'object/number'
  ];
  expect(types).toBe(types);
});
