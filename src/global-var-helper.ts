// Copyright (c) 2021 Edwin Pratt
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * A test case has information about its name and callback function.
 */
interface TestCase {
    /** The name of the test case. */
    caseName: string;

    /** The callback function that will throw an error of the test case fails. */
    caseFunction: () => void;
}

/** A test is defined as having a name and all of its test cases. */
interface Test {
    /** The name of the current test. */
    testName: string;

    /** The list test cases. */
    testCases: TestCase[];
}

/** This array will contain all of the tests that are described with `it`. */
const tests: Test[] = [];

/** This is a container for the current running test. */
let currentTest: Test = { testName: "", testCases: [] };

function pushCurrentTestToArray(): void {
    tests.push({ ...currentTest });
    currentTest.testCases = [];
    currentTest.testName = "";
}

function setCurrentTestName(currentTestName: string): void {
    currentTest.testName = currentTestName;
    currentTest.testCases = [];
}

function addTestCaseToCurrentTest(newTestCase: TestCase): void {
    currentTest.testCases.push(newTestCase);
}

function getTests(): Test[] {
    return tests;
}

export { Test, TestCase, pushCurrentTestToArray, setCurrentTestName, addTestCaseToCurrentTest, getTests };
