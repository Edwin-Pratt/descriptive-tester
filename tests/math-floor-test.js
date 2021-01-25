// Copyright (c) 2021 Edwin Pratt
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { it, should, assert } = require("../dist/main-lib");

it("Math.floor", function () {
    should("Floor 3.4 to 3", () => assert.equal(Math.floor(3.5), 3));
    should("Not floor 5.5 to 6", () => assert.notEqual(Math.floor(5.5), 6));
});
