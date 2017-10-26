"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var get_schema_1 = require("./src/get-schema");
__export(require("./src/get-schema"));
__export(require("./src/find-faker"));
function generateJson(inputPath, suffix) {
    if (suffix === void 0) { suffix = 'jsf'; }
    var json = JSON.parse(fs_1.readFileSync(inputPath, 'utf8'));
    var fileName = path_1.basename(inputPath, path_1.extname(inputPath));
    var jsonSchemaFaker = JSON.stringify(get_schema_1.getSchema(json));
    fs_1.writeFile(fileName + "-" + suffix + ".json", jsonSchemaFaker, function () {
        console.log('DONE');
        console.log(jsonSchemaFaker);
    });
}
exports.generateJson = generateJson;
generateJson(process.argv[2], process.argv[3]);
//# sourceMappingURL=index.js.map