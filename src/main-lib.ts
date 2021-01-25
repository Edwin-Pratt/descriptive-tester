// Copyright (c) 2021 Edwin Pratt
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { strict as assert } from "assert";

/**
 * The current test that is running.
 */
let currentTest: { testName: string; caseName: string } = {
    /** The name of the current test. */
    testName: "",

    /** The name of the current test case. */
    caseName: "",
};

/**
 * This function will define a test.
 *
 * It receives a callback that has calls to `should` and is used to define test cases.
 *
 * @param testName The name of the test.
 * @param testFunction The callback function containing all test cases defined by `should`.
 */
function it(testName: string, testFunction: () => void): void {
    currentTest.testName = testName;

    console.log(`\x1B[33mTest: \x1B[1m${currentTest.testName}\x1B[0m`);

    // We aren't catching any thrown errors as they will propagate to the CLI.
    testFunction();

    currentTest.testName = "";
    currentTest.caseName = "";
}

/**
 * Defines a test case and assigns it to the current test.
 *
 * @param caseName The name of the current test case.
 * @param caseFunction The function that contains the test and throws an error when something's not right.
 */
function should(caseName: string, caseFunction: () => void): void {
    currentTest.caseName = caseName;

    try {
        caseFunction();

        // If no error is thrown, we'll assume it's a pass.
        console.info(`\t\x1B[32mPassed: \x1B[1m${currentTest.caseName}\x1B[0m`);
    } catch (error) {
        console.error(`\t\x1B[31mFailed: \x1B[1m${currentTest.caseName}\x1B[0m`);
        throw error;
    }
}

export { it, should, assert };
