#!/usr/bin/env node
"use strict";
// Copyright (c) 2021 Edwin Pratt
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const global_var_helper_1 = require("./global-var-helper");
const fs_1 = require("fs");
const path_1 = require("path");
/**
 * Runs Descriptive Tester.
 *
 * @param files The list of test files containing
 */
function run(files) {
    // Import all the files. This will automatically run it() tests
    for (let file of files) {
        require(file);
    }
    // When all it() calls have been run, we can run each test case.
    for (let test of global_var_helper_1.getTests()) {
        console.log(`\x1B[33mTest: \x1B[1m${test.testName}\x1B[0m`);
        // Loop over all test cases in a test and run them
        for (let testCase of test.testCases) {
            try {
                testCase.caseFunction();
                // If no error is thrown, we'll assume it's a pass.
                console.info(`\t\x1B[32mPassed: \x1B[1m${testCase.caseName}\x1b[0m`);
            }
            catch (err) {
                console.error(`\t\x1B[31mFailed: \x1B[1m${testCase.caseName}\x1B[0m`);
                console.error(err.stack);
            }
        }
        // This console.log statement is here to add a newline after a test is done.
        console.log("");
    }
}
/**
 * Retrieve the list of files that can be `require`d.
 *
 * @param argFiles The list of files or directory passed in from the command line.
 */
function retrieveFileList(...argFiles) {
    const files = [];
    for (let arg of argFiles) {
        // Resolve the directory/file from the current working directory.
        arg = path_1.join(process.cwd(), arg);
        // `fs.lstatSync` will throw an error if a file or directory does not exist.
        try {
            const statInfo = fs_1.lstatSync(arg);
            if (statInfo.isDirectory()) {
                const allFilesInDir = fs_1.readdirSync(arg);
                const testFiles = allFilesInDir.filter((file) => file.endsWith(".js"));
                files.push(...testFiles.map((file) => path_1.join(arg, file)));
                continue;
            }
            // If the argument is a file, we can just add it to the list.
            files.push(arg);
        }
        catch (_a) {
            throw new ReferenceError(`\x1B[31mThe file or folder called "${arg}" doesn't exist.\x1B[0m`);
        }
    }
    return files;
}
// Only run this file from the terminal.
if (require.main === module) {
    const argv = process.argv.slice(2);
    run(retrieveFileList(...argv));
}
//# sourceMappingURL=cli.js.map