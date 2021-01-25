"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert = exports.should = exports.it = void 0;
const assert_1 = require("assert");
Object.defineProperty(exports, "assert", { enumerable: true, get: function () { return assert_1.strict; } });
let currentTest = {
    testName: "",
    caseName: "",
};
function it(testName, testFunction) {
    currentTest.testName = testName;
    console.log(`\x1B[33mTest: \x1B[1m${currentTest.testName}\x1B[0m`);
    testFunction();
    currentTest.testName = "";
    currentTest.caseName = "";
}
exports.it = it;
function should(caseName, caseFunction) {
    currentTest.caseName = caseName;
    try {
        caseFunction();
        console.info(`\t\x1B[32mPassed: \x1B[1m${currentTest.caseName}\x1B[0m`);
    }
    catch (error) {
        console.error(`\t\x1B[31mFailed: \x1B[1m${currentTest.caseName}\x1B[0m`);
        throw error;
    }
}
exports.should = should;
//# sourceMappingURL=main-lib.js.map