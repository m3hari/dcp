const addUpToK = require("./day1");
describe("Day1", () => {
  test("given [10, 15, 3, 7] and k of 17 should return true", () => {
    expect(addUpToK([10, 15, 3, 7], 17)).toBe(true);
  });
  test("given [2,3] and k of 5 should return true", () => {
    expect(addUpToK([2,3], 5)).toBe(true);
  });
  
  test("given [] and k of 0 should return false", () => {
    expect(addUpToK([],0)).toBe(false);
  });
  
  test("given [2] and k of 4 should return false", () => {
    expect(addUpToK([2],4)).toBe(false);
  });

});
