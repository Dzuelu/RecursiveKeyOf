export type RecursiveKeyValueOf<TObj extends object, separator extends string = '.'> = {
  [TKey in keyof TObj & Primitive]: RecursiveKeyValueOfHandleValue<TObj[TKey], `${TKey}`, separator>;
}[keyof TObj & Primitive];

type Primitive = boolean | number | string;

type RecursiveKeyValueOfHandleValue<TValue, Text extends string, separator extends string = '.'> = TValue extends unknown[]
  ? Text
  : TValue extends object
    ? `${Text}${RecursiveKeyValueOfInner<TValue, separator>}`
    : Text;

type RecursiveKeyValueOfInner<TObj extends object, separator extends string = '.'> = {
  [TKey in keyof TObj & Primitive]: RecursiveKeyValueOfHandleValue<TObj[TKey], `${separator}${TKey}`, separator>;
}[keyof TObj & Primitive];
