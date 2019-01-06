/**
 * Given an array of integers,
 * returns the lowest positive integer that does not exist in the array
 * @param {Number[]} numbers
 * @returns {Number}
 */
function missingMinimumPositiveInteger(numbers) {
  let min = 1;
  const lookup = new Set(numbers);
  while (lookup.has(min)) {
    min++;
  }
  return min;
}

module.exports = missingMinimumPositiveInteger;
