"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
function run(files) {
    for (let file of files) {
        try {
            require(file);
        }
        catch (error) {
            console.error(error.stack);
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
            console.error(`\x1B[31mThe file or folder called "${arg}" doesn't exist.\x1B[0m`);
        }
    }
    return files;
}
module.exports = function (args) {
    const argv = args.slice(2);
    if (argv.length === 0) {
        console.error("\x1B[36mExpected at least one file or directory.\x1B[0m");
        process.exit(0);
    }
    run(retrieveFileList(...argv));
};
//# sourceMappingURL=cli.js.map