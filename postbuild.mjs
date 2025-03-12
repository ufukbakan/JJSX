import { createMinifier } from "dts-minify"; // dts-minify on npm
import { readFileSync, writeFileSync } from "fs";
import { glob } from "glob";
import * as ts from "typescript";

console.log("Minifying declaration files");
const minifier = createMinifier(ts);
glob("./dist/*.d.ts")
  .then(files => {
    files.forEach(file => {
      const content = readFileSync(file, "utf-8");
      const minified = minifier.minify(content);
      writeFileSync(file, minified, { encoding: "utf-8" });
      console.log("minified", file);
    });
    console.log("Completed minifying");
  })
  .catch(e => console.error(e));