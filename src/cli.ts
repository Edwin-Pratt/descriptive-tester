// Copyright (c) 2021 Edwin Pratt
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

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
        try {
            require(file);
        } catch (error) {
            console.error(error.stack);
        }

        // Add spacing
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
            console.error(`\x1B[31mThe file or folder called "${arg}" doesn't exist.\x1B[0m`);
        }
    }

    return files;
}

// Run the CLI when passed arguments.
module.exports = function (args: string[]): void {
    const argv: string[] = args.slice(2);

    if (argv.length === 0) {
        console.error("\x1B[36mExpected at least one file or directory.\x1B[0m");
        process.exit(0);
    }

    run(retrieveFileList(...argv));
};
