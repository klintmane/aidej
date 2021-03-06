import { eachEntry, eachKey, eachValue } from "../each";

describe("eachEntry", () => {
  it("works", () => {
    let result = "";
    eachEntry({ a: 1, b: 2 }, (key, val) => (result += `${key}:${val};`));

    expect(result).toBe("a:1;b:2;");
  });
});

describe("eachKey", () => {
  it("works", () => {
    let keys = "";
    eachKey({ a: 1, b: 2 }, key => (keys += `_${key}`));

    expect(keys).toBe("_a_b");
  });
});

describe("eachValue", () => {
  it("works", () => {
    let sum = 0;
    eachValue({ a: 1, b: 2 }, val => (sum += val));

    expect(sum).toBe(3);
  });
});
