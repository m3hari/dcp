/**
 * Given an array of integers,return a new array such that
 * each element at index i of the new array is the product
 * of all the numbers in the original array except the one at i.
 * @param {Array} numbers
 * @returns {Array}
 */
function productOfAllOther(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result[i] = 1;
    for (let j = 0; j < numbers.length; j++) {
      if (i != j) {
        result[i] *= numbers[j];
      }
    }
  }
  return result
}

module.exports = productOfAllOther;
