(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.CocoaToolCore = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";
  const finite = (value, name) => {
    const n = Number(value);
    if (!Number.isFinite(n)) throw new TypeError(name + " must be a finite number.");
    return n;
  };
  const positive = (value, name) => {
    const n = finite(value, name);
    if (n <= 0) throw new RangeError(name + " must be greater than zero.");
    return n;
  };
  function bmi(weightKg, heightCm) {
    const weight = positive(weightKg, "Weight");
    const height = positive(heightCm, "Height") / 100;
    if (weight > 1000 || height > 300) throw new RangeError("Values are outside the supported range.");
    const value = weight / (height * height);
    return { value, category: value < 18.5 ? "Underweight" : value < 25 ? "Healthy range" : value < 30 ? "Overweight" : "Obesity range" };
  }
  function percentage(value, percent) { return finite(value, "Value") * finite(percent, "Percentage") / 100; }
  function loanPayment(principal, annualRatePercent, years) {
    const p = positive(principal, "Loan amount");
    const annual = finite(annualRatePercent, "Annual interest rate");
    const term = positive(years, "Loan term");
    if (annual < 0 || annual > 1000 || term > 100) throw new RangeError("Rate or term is outside the supported range.");
    const months = Math.round(term * 12);
    const monthlyRate = annual / 1200;
    const monthly = monthlyRate === 0 ? p / months : p * monthlyRate / (1 - Math.pow(1 + monthlyRate, -months));
    const total = monthly * months;
    return { monthly, total, interest: total - p, months };
  }
  const units = {
    length: { m: 1, km: 1000, cm: .01, mm: .001, mile: 1609.344, foot: .3048, inch: .0254 },
    mass: { kg: 1, g: .001, mg: .000001, lb: .45359237, oz: .028349523125 },
    speed: { "m/s": 1, "km/h": 1 / 3.6, mph: .44704, knot: .5144444444444445 }
  };
  function convert(value, from, to, category) {
    const n = finite(value, "Value");
    if (category === "temperature") {
      const toC = { c: x => x, f: x => (x - 32) * 5 / 9, k: x => x - 273.15 };
      const fromC = { c: x => x, f: x => x * 9 / 5 + 32, k: x => x + 273.15 };
      if (!toC[from] || !fromC[to]) throw new RangeError("Choose valid temperature units.");
      return fromC[to](toC[from](n));
    }
    const table = units[category];
    if (!table || !Object.prototype.hasOwnProperty.call(table, from) || !Object.prototype.hasOwnProperty.call(table, to)) {
      throw new RangeError("Choose units from the same supported category.");
    }
    return n * table[from] / table[to];
  }
  function speed(value, from, to) { return convert(value, from, to, "speed"); }
  function dateParts(dateText) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateText || "")) throw new TypeError("Enter a valid date.");
    const [y, m, d] = dateText.split("-").map(Number);
    const date = new Date(Date.UTC(y, m - 1, d));
    if (date.getUTCFullYear() !== y || date.getUTCMonth() !== m - 1 || date.getUTCDate() !== d) throw new TypeError("Enter a real calendar date.");
    return { y, m, d };
  }
  function age(birthText, targetText) {
    const b = dateParts(birthText), t = dateParts(targetText);
    if (Date.UTC(t.y, t.m - 1, t.d) < Date.UTC(b.y, b.m - 1, b.d)) throw new RangeError("Target date must be on or after the birth date.");
    let years = t.y - b.y, months = t.m - b.m, days = t.d - b.d;
    if (days < 0) {
      months--;
      days += new Date(Date.UTC(t.y, t.m - 1, 0)).getUTCDate();
    }
    if (months < 0) { years--; months += 12; }
    return { years, months, days };
  }
  function slugify(input) {
    return String(input).normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
      .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  }
  function parseCsv(input) {
    const text = String(input);
    const rows = [];
    let row = [], cell = "", quoted = false;
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      if (quoted) {
        if (ch === '"' && text[i + 1] === '"') { cell += '"'; i++; }
        else if (ch === '"') quoted = false;
        else cell += ch;
      } else if (ch === '"' && cell.length === 0) quoted = true;
      else if (ch === ",") { row.push(cell); cell = ""; }
      else if (ch === "\n" || ch === "\r") {
        if (ch === "\r" && text[i + 1] === "\n") i++;
        row.push(cell); cell = "";
        if (row.some(value => value !== "")) rows.push(row);
        row = [];
      } else cell += ch;
    }
    if (quoted) throw new SyntaxError("CSV contains an unclosed quoted field.");
    row.push(cell);
    if (row.some(value => value !== "")) rows.push(row);
    if (!rows.length) throw new SyntaxError("Enter CSV data with a header row.");
    const headers = rows[0].map(value => value.trim());
    if (headers.some(value => !value)) throw new SyntaxError("CSV headers cannot be empty.");
    if (new Set(headers).size !== headers.length) throw new SyntaxError("CSV headers must be unique.");
    return rows.slice(1).map((values, index) => {
      if (values.length > headers.length) throw new SyntaxError("Row " + (index + 2) + " has more values than the header.");
      return Object.fromEntries(headers.map((key, i) => [key, values[i] ?? ""]));
    });
  }
  function jsonToCsv(input) {
    const data = typeof input === "string" ? JSON.parse(input) : input;
    if (!Array.isArray(data) || !data.every(item => item && typeof item === "object" && !Array.isArray(item))) {
      throw new TypeError("Enter a JSON array of objects.");
    }
    if (!data.length) return "";
    const headers = [...new Set(data.flatMap(item => Object.keys(item)))];
    const quote = value => {
      const text = value == null ? "" : typeof value === "object" ? JSON.stringify(value) : String(value);
      return /[",\r\n]/.test(text) ? '"' + text.replace(/"/g, '""') + '"' : text;
    };
    return [headers.map(quote).join(","), ...data.map(item => headers.map(key => quote(item[key])).join(","))].join("\r\n");
  }
  function randomPassword(length, sets, cryptoApi) {
    const n = Number(length);
    if (!Number.isInteger(n) || n < 8 || n > 128) throw new RangeError("Password length must be between 8 and 128.");
    const groups = [
      sets.upper ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "",
      sets.lower ? "abcdefghijklmnopqrstuvwxyz" : "",
      sets.numbers ? "0123456789" : "",
      sets.symbols ? "!@#$%^&*()_+~`|}{[]:;?><,.-=" : ""
    ].filter(Boolean);
    if (!groups.length) throw new RangeError("Select at least one character set.");
    const crypto = cryptoApi || (typeof globalThis !== "undefined" ? globalThis.crypto : null);
    if (!crypto || typeof crypto.getRandomValues !== "function") throw new Error("A secure random number generator is unavailable in this browser.");
    const alphabet = groups.join("");
    const pick = max => {
      const limit = Math.floor(0x100000000 / max) * max;
      const buf = new Uint32Array(1);
      do { crypto.getRandomValues(buf); } while (buf[0] >= limit);
      return buf[0] % max;
    };
    const chars = groups.map(group => group[pick(group.length)]);
    while (chars.length < n) chars.push(alphabet[pick(alphabet.length)]);
    for (let i = chars.length - 1; i > 0; i--) { const j = pick(i + 1); [chars[i], chars[j]] = [chars[j], chars[i]]; }
    return chars.join("");
  }
  return { bmi, percentage, loanPayment, convert, speed, age, slugify, parseCsv, jsonToCsv, randomPassword };
});
