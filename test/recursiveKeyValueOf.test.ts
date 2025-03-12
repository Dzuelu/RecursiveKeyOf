import { RecursiveKeyValueOf } from '../src/recursiveKeyValueOf';
import { TestType } from './testType';

test('default types work as expected', () => {
  const types: RecursiveKeyValueOf<TestType>[] = [
    'array',
    'boolean',
    'customArray',
    'number',
    // 'object', // ts error
    'object.array',
    'object.boolean',
    'object.number',
    // 'object.object2', // ts error
    'object.object2.array',
    'object.object2.boolean',
    'object.object2.number',
    // 'object.object2.object3', // ts error
    'object.object2.string',
    'object.string',
    'string'
  ];
  expect(types).toBe(types);
});

test('custom separator types work as expected', () => {
  const types: RecursiveKeyValueOf<TestType, '/'>[] = [
    'array',
    'boolean',
    'number',
    // 'object', // ts error
    'object/array',
    'object/boolean',
    'object/number',
    // 'object.object2', // ts error
    'object/object2/array',
    'object/object2/boolean',
    'object/object2/number',
    // 'object.object2.object3', // ts error
    'object/object2/string',
    'object/string',
    'string'
  ];
  expect(types).toBe(types);
});
