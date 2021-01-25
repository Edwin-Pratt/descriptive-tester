<!--
 Copyright (c) 2021 Edwin Pratt

 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

# Descriptive Tester

A simple testing library that allows you to describe your tests.

[View on NPM](https://www.npmjs.com/package/descriptive-tester)

## Basic idea

As the name suggests, the library's goal is to enable you to from sentences as a means of describing a test. The two main functions that this library provides are `it` and `should`. The `it` function is used to describe a _test_ and the `should` function is used to describe a _test case_.

This library defines the words "test" and "test case" as the following:

-   A _test_ is a group of _test cases_ that are required to pass.
-   Each _test_ focuses on one topic (e.g., math functions).
-   Each _test case_ focuses on a subtopic of a _test_ (e.g., addition).
-   When a _test case_ fails, an error is thrown which gets caught by the parent _test_.
-   A _test case_ **can not** be defined outside a _test_.

A simple example of a test file may look something like:

```js
const { it, should, assert } = require("descriptive-tester");

/**
 * Returns the sum of `a + b`.
 *
 * @param a The first number to add.
 * @param b The second number to add.
 */
function mySumFunc(a, b) {
    return a + b;
}

it("mySumFunc(a, b)", function () {
    should("Add 2 + 2 and return 4", () => assert.equal(mySumFunc(2, 2), 4));
    should("Not add 3 + 2 and return 4", () => assert.notEqual(mySumFunc(3, 2), 4));
});
```

In the example code, we state that:

-   `mySumFunc` should add 2 + 2 and return 4.
-   `mySumFunc` should not add 3 + 2 and return 4. -

If a test case fails, an `AssertionError` will be thrown and the test (described in `it`) will catch the error and exit the program.

---

## Usage

Descriptive Tester is easy to set up and use.

### Installation

To install this library, you can run:

```bash
npm install --save-dev descriptive-tester

# or shorter:
npm i -D descriptive-tester
```

### Command line usage

After installing Descriptive Tester, you'll be able to call `descriptive-tester` in your terminal and passing it some test files or directories.

```bash
# Pass a file.
descriptive-tester ./my-test-file.js

# Or pass a directory (At the moment RegExp is not supported).
descriptive-tester ./my-test-directory/

# Or pass both directories and files.
descriptive-tester ./math.js ./tests/ ./dom.js
```

### Writing some tests

Descriptive Tester exports 2 functions, `it` and `should`, and the `assert` object from [Node's `assert.strict` module](https://nodejs.org/api/assert.html#assert_strict_assertion_mode).

When importing Descriptive Tester, you can simply write:

```js
const { it, should, assert } = require("descriptive-tester");
```

After importing this library, you can import your own modules that you want to test. However, for this short tutorial we'll just use some math functions.

When writing a test, the first thing that you need to do is to define the test (i.e., give the test a name). For example:

```js
const { it, should, assert } = require("descriptive-tester");

it("Math.floor", function () {
    // ...
});
```

After doing this, we can simply write test cases using `should`. For our example, we are going to test `Math.floor` and make sure that it floors a number correctly.

```js
const { it, should, assert } = require("descriptive-tester");

it("Math.floor", function () {
    should("Floor 3.4 to 3", () => assert.equal(Math.floor(3.5), 3));
    should("Not floor 5.5 to 6", () => assert.notEqual(Math.floor(5.5), 6));
});
```

And we've successfully written our first test!

Before we move on though, I'd like to point out how Descriptive Tester describes your tests and makes it both readable and pronounceable.

The test that we wrote can be read as two sentences.

-   `Math.floor` **should** floor 3.4 to 3.
-   `Math.floor` **should** not floor 5.5 to 6.

Writing tests this way is good because it enables other users to contribute other tests, and also enables people who don't know programming to read your tests as well if their curious.

### Running our test

To run our test we can simply type:

```bash
descriptive-tester ./math-floor-test.js
```

---

## Licence

This project is licensed under the MIT license.

Copyright (c) 2021 Edwin Pratt
