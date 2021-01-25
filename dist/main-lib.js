"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert = exports.should = exports.it = void 0;
const global_var_helper_1 = require("./global-var-helper");
const assert_1 = require("assert");
Object.defineProperty(exports, "assert", { enumerable: true, get: function () { return assert_1.strict; } });
function it(testName, testFunction) {
    global_var_helper_1.setCurrentTestName(testName);
    testFunction();
    global_var_helper_1.pushCurrentTestToArray();
}
exports.it = it;
function should(caseName, caseFunction) {
    const currentCase = { caseName, caseFunction };
    global_var_helper_1.addTestCaseToCurrentTest(Object.assign({}, currentCase));
}
exports.should = should;
//# sourceMappingURL=main-lib.js.map