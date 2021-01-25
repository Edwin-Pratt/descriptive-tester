interface TestCase {
    caseName: string;
    caseFunction: () => void;
}
interface Test {
    testName: string;
    testCases: TestCase[];
}
declare function pushCurrentTestToArray(): void;
declare function setCurrentTestName(currentTestName: string): void;
declare function addTestCaseToCurrentTest(newTestCase: TestCase): void;
declare function getTests(): Test[];
export { Test, TestCase, pushCurrentTestToArray, setCurrentTestName, addTestCaseToCurrentTest, getTests };
//# sourceMappingURL=global-var-helper.d.ts.map