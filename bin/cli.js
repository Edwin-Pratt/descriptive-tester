#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const global_var_helper_1 = require("./global-var-helper");
const fs_1 = require("fs");
const path_1 = require("path");
function run(files) {
    for (let file of files) {
        require(file);
    }
    for (let test of global_var_helper_1.getTests()) {
        console.log(`\x1B[33mTest: \x1B[1m${test.testName}\x1B[0m`);
        for (let testCase of test.testCases) {
            try {
                testCase.caseFunction();
                console.info(`\t\x1B[32mPassed: \x1B[1m${testCase.caseName}\x1b[0m`);
            }
            catch (err) {
                console.error(`\t\x1B[31mFailed: \x1B[1m${testCase.caseName}\x1B[0m`);
                console.error(err.stack);
            }
        }
        console.log("");
    }
}
function retrieveFileList(...argFiles) {
    const files = [];
    for (let arg of argFiles) {
        arg = path_1.join(process.cwd(), arg);
        try {
            const statInfo = fs_1.lstatSync(arg);
            if (statInfo.isDirectory()) {
                const allFilesInDir = fs_1.readdirSync(arg);
                const testFiles = allFilesInDir.filter((file) => file.endsWith(".js"));
                files.push(...testFiles.map((file) => path_1.join(arg, file)));
                continue;
            }
            files.push(arg);
        }
        catch (_a) {
            throw new ReferenceError(`\x1B[31mThe file or folder called "${arg}" doesn't exist.\x1B[0m`);
        }
    }
    return files;
}
if (require.main === module) {
    const argv = process.argv.slice(2);
    run(retrieveFileList(...argv));
}
//# sourceMappingURL=cli.js.map