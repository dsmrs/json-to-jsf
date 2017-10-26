import { findFaker } from './find-faker';

function getProperties(object: any): any {
  const properties = {};
  Object.keys(object).forEach((key) => {
    if (object[key]) { properties[key] = getSchema(object[key], key); }
  });
  return properties;
}

export function getSchema(item: any, key?: string): Schema {
  if (typeof item === 'string') {
    return {
      type: 'string',
      faker: findFaker(item, key)
    }
  }
  if (typeof item === 'object' && item instanceof Array) {
    return {
      type: 'array',
      minItems: item.length,
      items: getSchema(item[0])
    };
  }
  if (typeof item === 'object') {
    return {
      type: 'object',
      properties: getProperties(item)
    };
  }
}

export interface Schema {
  type: string;
  format?: string;
  faker?: string;
  minItems?: number;
  items?: any;
  properties?: any;
}
