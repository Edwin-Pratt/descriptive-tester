"use strict";
// Copyright (c) 2021 Edwin Pratt
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTests = exports.addTestCaseToCurrentTest = exports.setCurrentTestName = exports.pushCurrentTestToArray = void 0;
/** This array will contain all of the tests that are described with `it`. */
const tests = [];
/** This is a container for the current running test. */
let currentTest = { testName: "", testCases: [] };
function pushCurrentTestToArray() {
    tests.push(Object.assign({}, currentTest));
    currentTest.testCases = [];
    currentTest.testName = "";
}
exports.pushCurrentTestToArray = pushCurrentTestToArray;
function setCurrentTestName(currentTestName) {
    currentTest.testName = currentTestName;
    currentTest.testCases = [];
}
exports.setCurrentTestName = setCurrentTestName;
function addTestCaseToCurrentTest(newTestCase) {
    currentTest.testCases.push(newTestCase);
}
exports.addTestCaseToCurrentTest = addTestCaseToCurrentTest;
function getTests() {
    return tests;
}
exports.getTests = getTests;
//# sourceMappingURL=global-var-helper.js.map