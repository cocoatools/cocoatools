const test = require("node:test");
const assert = require("node:assert/strict");
const core = require("../assets/tool-core.js");

test("BMI computes expected value and category", () => {
  const result = core.bmi(70, 175);
  assert.equal(result.value, 70 / (1.75 * 1.75));
  assert.equal(result.category, "Healthy range");
});
test("BMI rejects zero and non-finite measurements", () => {
  assert.throws(() => core.bmi(0, 170), /greater than zero/);
  assert.throws(() => core.bmi(70, "nope"), /finite number/);
});
test("percentage handles negative values and validates inputs", () => {
  assert.equal(core.percentage(200, 15), 30);
  assert.equal(core.percentage(200, -10), -20);
  assert.throws(() => core.percentage("x", 2), /finite number/);
});
test("loan payment handles zero-interest loans without NaN", () => {
  const result = core.loanPayment(1200, 0, 1);
  assert.equal(result.monthly, 100);
  assert.equal(result.total, 1200);
  assert.equal(result.interest, 0);
});
test("loan payment validates amount, rate, and term", () => {
  assert.throws(() => core.loanPayment(0, 4, 10), /greater than zero/);
  assert.throws(() => core.loanPayment(1000, -1, 10), /outside the supported range/);
});
test("unit conversion is category-safe", () => {
  assert.equal(core.convert(1, "km", "m", "length"), 1000);
  assert.equal(core.convert(0, "c", "f", "temperature"), 32);
  assert.throws(() => core.convert(1, "km", "kg", "length"), /same supported category/);
});
test("speed conversion uses exact unit factors", () => {
  assert.ok(Math.abs(core.speed(60, "km/h", "mph") - 37.2822715) < 0.00001);
});
test("age handles month boundaries and rejects invalid/future dates", () => {
  assert.deepEqual(core.age("2000-01-31", "2000-03-01"), { years: 0, months: 1, days: 1 });
  assert.throws(() => core.age("2025-02-29", "2025-03-01"), /real calendar date/);
  assert.throws(() => core.age("2025-01-01", "2024-12-31"), /on or after/);
});
test("slugify normalizes accents and punctuation", () => {
  assert.equal(core.slugify("  Crème brûlée: A Guide!  "), "creme-brulee-a-guide");
  assert.equal(core.slugify("!!!"), "");
});
test("CSV parser supports quoted commas, quotes, and newlines", () => {
  assert.deepEqual(core.parseCsv('name,note\r\nAlice,"hello, world"\r\nBob,"line 1\nline 2"'), [
    { name: "Alice", note: "hello, world" }, { name: "Bob", note: "line 1\nline 2" }
  ]);
});
test("CSV parser rejects unclosed quotes and duplicate headers", () => {
  assert.throws(() => core.parseCsv('name,note\nAlice,"oops'), /unclosed quoted/);
  assert.throws(() => core.parseCsv('name,name\nA,B'), /unique/);
});
test("JSON to CSV quotes commas and embedded quotes", () => {
  assert.equal(core.jsonToCsv([{ name: "A, B", note: 'say "hi"' }]), 'name,note\r\n"A, B","say ""hi"""');
  assert.throws(() => core.jsonToCsv({ name: "A" }), /array of objects/);
});
test("password generator validates constraints and includes requested sets", () => {
  const fakeCrypto = { getRandomValues(buf) { buf[0] = 0; return buf; } };
  const value = core.randomPassword(12, { upper: true, lower: true, numbers: true, symbols: true }, fakeCrypto);
  assert.equal(value.length, 12);
  assert.match(value, /[A-Z]/); assert.match(value, /[a-z]/); assert.match(value, /[0-9]/);
  assert.throws(() => core.randomPassword(5, { upper: true }, fakeCrypto), /between 8 and 128/);
  assert.throws(() => core.randomPassword(12, {}, fakeCrypto), /at least one/);
});
