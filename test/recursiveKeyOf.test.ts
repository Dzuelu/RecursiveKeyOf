import { RecursiveKeyOf } from '../src/recursiveKeyOf';
import { TestType } from './testType';

test('default types work as expected', () => {
  const types: RecursiveKeyOf<TestType>[] = [
    'array',
    'customArray',
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
