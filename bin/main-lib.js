"use strict";
// Copyright (c) 2021 Edwin Pratt
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert = exports.should = exports.it = void 0;
const global_var_helper_1 = require("./global-var-helper");
const assert_1 = require("assert");
Object.defineProperty(exports, "assert", { enumerable: true, get: function () { return assert_1.strict; } });
/**
 * This function will define a test.
 *
 * It receives a callback that has calls to `should` and is used to define test cases.
 *
 * @param testName The name of the test.
 * @param testFunction The callback function containing all test cases defined by `should`.
 */
function it(testName, testFunction) {
    global_var_helper_1.setCurrentTestName(testName);
    testFunction();
    global_var_helper_1.pushCurrentTestToArray();
}
exports.it = it;
/**
 * Defines a test case and assigns it to the current test.
 *
 * @param caseName The name of the current test case.
 * @param caseFunction The function that contains the test and throws an error when something's not right.
 */
function should(caseName, caseFunction) {
    const currentCase = { caseName, caseFunction };
    global_var_helper_1.addTestCaseToCurrentTest(Object.assign({}, currentCase));
}
exports.should = should;
//# sourceMappingURL=main-lib.js.map