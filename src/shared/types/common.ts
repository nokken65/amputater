import { ObjectShape } from 'yup/lib/object';

export type ID = string;

type ObjectShapeValues = ObjectShape extends Record<string, infer V>
  ? V
  : never;

export type Shape<T extends Record<any, any>> = Record<
  keyof T,
  ObjectShapeValues
>;
