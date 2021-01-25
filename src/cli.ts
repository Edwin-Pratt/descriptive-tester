#!/usr/bin/env node

// Copyright (c) 2021 Edwin Pratt
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { getTests } from "./global-var-helper";
import { lstatSync, readdirSync } from "fs";
import { join } from "path";

/**
 * Runs Descriptive Tester.
 *
 * @param files The list of test files containing
 */
function run(files: string[]): void {
    // Import all the files. This will automatically run it() tests
    for (let file of files) {
        require(file);
    }

    // When all it() calls have been run, we can run each test case.
    for (let test of getTests()) {
        console.log(`\x1B[33mTest: \x1B[1m${test.testName}\x1B[0m`);

        // Loop over all test cases in a test and run them
        for (let testCase of test.testCases) {
            try {
                testCase.caseFunction();

                // If no error is thrown, we'll assume it's a pass.
                console.info(`\t\x1B[32mPassed: \x1B[1m${testCase.caseName}\x1b[0m`);
            } catch (err) {
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
function retrieveFileList(...argFiles: string[]): string[] {
    const files: string[] = [];

    for (let arg of argFiles) {
        // Resolve the directory/file from the current working directory.
        arg = join(process.cwd(), arg);

        // `fs.lstatSync` will throw an error if a file or directory does not exist.
        try {
            const statInfo = lstatSync(arg);

            if (statInfo.isDirectory()) {
                const allFilesInDir: string[] = readdirSync(arg);
                const testFiles: string[] = allFilesInDir.filter((file) => file.endsWith(".js"));
                files.push(...testFiles.map((file) => join(arg, file)));
                continue;
            }

            // If the argument is a file, we can just add it to the list.
            files.push(arg);
        } catch {
            throw new ReferenceError(`\x1B[31mThe file or folder called "${arg}" doesn't exist.\x1B[0m`);
        }
    }

    return files;
}

// Only run this file from the terminal.
if (require.main === module) {
    const argv: string[] = process.argv.slice(2);
    run(retrieveFileList(...argv));
}
