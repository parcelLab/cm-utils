/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/require-await */
import * as assert from "node:assert/strict";
import test from "node:test";
import { myFunction } from "../lib/example.js";

test("Example test", async (_) => {
	assert.equal(myFunction(), "Hello World");
});
