"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTests = exports.addTestCaseToCurrentTest = exports.setCurrentTestName = exports.pushCurrentTestToArray = void 0;
const tests = [];
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