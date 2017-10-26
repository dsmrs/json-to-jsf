import { readFileSync, writeFile } from 'fs';
import { basename, extname } from 'path';
import { getSchema } from './src/get-schema';
export * from './src/get-schema';
export * from './src/find-faker';

export function generateJson(inputPath: string, suffix = 'jsf') {
  const json = JSON.parse(readFileSync(inputPath, 'utf8'));
  const fileName = basename(inputPath, extname(inputPath));
  const jsonSchemaFaker = JSON.stringify(getSchema(json));
  writeFile(`${fileName}-${suffix}.json`, jsonSchemaFaker, () => {
    console.log('DONE');
    console.log(jsonSchemaFaker);
  });
}

generateJson(process.argv[2], process.argv[3]);
