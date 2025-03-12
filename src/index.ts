export type RecursiveKeyOf<TObj extends object, separator extends string = '.'> = {
  [TKey in keyof TObj & Primitive]: RecursiveKeyOfHandleValue<TObj[TKey], `${TKey}`, separator>;
}[keyof TObj & Primitive];

type Primitive = boolean | number | string;

type RecursiveKeyOfHandleValue<TValue, Text extends string, separator extends string = '.'> = TValue extends unknown[]
  ? Text
  : TValue extends object
    ? `${Text}${RecursiveKeyOfInner<TValue, separator>}` | Text
    : Text;

type RecursiveKeyOfInner<TObj extends object, separator extends string = '.'> = {
  [TKey in keyof TObj & Primitive]: RecursiveKeyOfHandleValue<TObj[TKey], `${separator}${TKey}`, separator>;
}[keyof TObj & Primitive];
