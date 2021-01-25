// Copyright (c) 2021 Edwin Pratt
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

const { it, should, assert } = require("../bin/main-lib");

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

it("add(a, b)", function () {
    should("Should add 2 and 2, and return 4", () => assert.equal(add(2, 2), 4));
    should("Should not add 2 and 2, and return 5", () => assert.notEqual(add(2, 2), 5));
});

it("sub(a, b)", function () {
    should("Should subtract 3 and 2, and return 1", () => assert.equal(sub(3, 2), 1));
    should("Should not subtract 3 and 2, and return 2", () => assert.notEqual(sub(3, 2), 2));
});

it("mul(a, b)", function () {
    should("Should multiply 4 and 4, and return 16", () => assert.equal(mul(4, 4), 16));
    should("Should not multiply 4 and 4, and return 12", () => assert.notEqual(mul(4, 4), 12));
});

it("div(a, b)", function () {
    should("Should divide 4 and 2, and return 2", () => assert.equal(div(4, 2), 2));
    should("Should not divide 4 and 2, and return 1", () => assert.notEqual(div(4, 2), 1));
});
