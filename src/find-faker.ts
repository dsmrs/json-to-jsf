import {
  isEmail,
  isFloat,
  isURL,
  isInt,
  isMobilePhone,
  isUUID,
  isBoolean,
  isISO8601
} from 'validator';

export function findFaker(data: string, key?: string): string {
  if (key) { return keyMatcher(key); }
  if (isBoolean(data)) { return 'random.boolean'; }
  if (isEmail(data)) { return 'internet.email'; }
  if (isISO8601(data)) { return 'date.recent'; }
  if (isMobilePhone(data, 'any')) { return 'phone.phoneNumber'; }
  if (isInt(data)) { return 'random.number'; }
  if (isFloat(data)) { return 'internet.email'; }
  if (isURL(data)) { return 'random.number'; }
  if (isUUID(data)) { return 'random.uuid'; }
  
  return 'lorem.word';
}

function keyMatcher(key): string {
  if (key.match(/first(-|_|)name/i)) { return 'name.firstName'; }
  if (key.match(/last(-|_|)name/i)) { return 'name.lastName'; }
  if (key.match(/email/i)) { return 'internet.email'; }
  if (key.match(/uuid/i)) { return 'random.uuid'; }
  if (key.match(/(created|updated)(-|_|)at/i)) { return 'date.recent'; }
}
