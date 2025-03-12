export interface TestType {
  array: string[];
  boolean: boolean;
  customArray: { nested: { type: string } }[]; // not supported, yet
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
