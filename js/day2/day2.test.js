const productOfAllOther = require("./day2");
describe("Day2", () => {
  test("given [1, 2, 3, 4, 5] return [120, 60, 40, 30, 24]", () => {
    expect(productOfAllOther([1, 2, 3, 4, 5], 17)).toEqual([120, 60, 40, 30, 24]);
  });
});
