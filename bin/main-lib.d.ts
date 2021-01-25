import { strict as assert } from "assert";
/**
 * This function will define a test.
 *
 * It receives a callback that has calls to `should` and is used to define test cases.
 *
 * @param testName The name of the test.
 * @param testFunction The callback function containing all test cases defined by `should`.
 */
declare function it(testName: string, testFunction: () => void): void;
/**
 * Defines a test case and assigns it to the current test.
 *
 * @param caseName The name of the current test case.
 * @param caseFunction The function that contains the test and throws an error when something's not right.
 */
declare function should(caseName: string, caseFunction: () => void): void;
export { it, should, assert };
//# sourceMappingURL=main-lib.d.ts.map