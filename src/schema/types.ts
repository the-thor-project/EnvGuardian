export type SchemaType = 'string' | 'number' | 'boolean';

export interface VariableSchema {
  type: SchemaType;
  required?: boolean;
  enum?: (string | number | boolean)[];
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  regex?: string;
}

export type Schema = Record<string, VariableSchema>;
