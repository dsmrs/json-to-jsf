"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var find_faker_1 = require("./find-faker");
function getProperties(object) {
    var properties = {};
    Object.keys(object).forEach(function (key) {
        if (object[key]) {
            properties[key] = getSchema(object[key], key);
        }
    });
    return properties;
}
function getSchema(item, key) {
    if (typeof item === 'string') {
        return {
            type: 'string',
            faker: find_faker_1.findFaker(item, key)
        };
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
exports.getSchema = getSchema;
//# sourceMappingURL=get-schema.js.map