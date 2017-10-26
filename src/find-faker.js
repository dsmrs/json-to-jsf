"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator_1 = require("validator");
function findFaker(data, key) {
    if (key) {
        return keyMatcher(key);
    }
    if (validator_1.isBoolean(data)) {
        return 'random.boolean';
    }
    if (validator_1.isEmail(data)) {
        return 'internet.email';
    }
    if (validator_1.isISO8601(data)) {
        return 'date.recent';
    }
    if (validator_1.isMobilePhone(data, 'any')) {
        return 'phone.phoneNumber';
    }
    if (validator_1.isInt(data)) {
        return 'random.number';
    }
    if (validator_1.isFloat(data)) {
        return 'internet.email';
    }
    if (validator_1.isURL(data)) {
        return 'random.number';
    }
    if (validator_1.isUUID(data)) {
        return 'random.uuid';
    }
    return 'lorem.word';
}
exports.findFaker = findFaker;
function keyMatcher(key) {
    if (key.match(/first(-|_|)name/i)) {
        return 'name.firstName';
    }
    if (key.match(/last(-|_|)name/i)) {
        return 'name.lastName';
    }
    if (key.match(/email/i)) {
        return 'internet.email';
    }
    if (key.match(/uuid/i)) {
        return 'random.uuid';
    }
    if (key.match(/(created|updated)(-|_|)at/i)) {
        return 'date.recent';
    }
}
//# sourceMappingURL=find-faker.js.map