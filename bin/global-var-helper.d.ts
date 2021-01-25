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
declare function pushCurrentTestToArray(): void;
declare function setCurrentTestName(currentTestName: string): void;
declare function addTestCaseToCurrentTest(newTestCase: TestCase): void;
declare function getTests(): Test[];
export { Test, TestCase, pushCurrentTestToArray, setCurrentTestName, addTestCaseToCurrentTest, getTests };
//# sourceMappingURL=global-var-helper.d.ts.map