const missingMinimumPositiveInteger = require("./day4");
describe("Day4", () => {
  test("given [3, 4, -1,1] return 2", () => {
    expect(missingMinimumPositiveInteger([3, 4, -1, 1])).toEqual(2);
  });
  
  test("given [1,2,0] return 3", () => {
    expect(missingMinimumPositiveInteger([1,2,0])).toEqual(3);
  });
  
  test("given [-4,-2,-2,0] return 1", () => {
    expect(missingMinimumPositiveInteger([-4,-2,-2,0])).toEqual(1);
  });
});
