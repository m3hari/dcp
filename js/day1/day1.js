/**
 * Given a list of numbers and a number k,
 * Returns whether any two numbers from the list add up to k.
 * @param {Array} numbers
 * @param {Number}} k
 * @returns {Boolean}
 */
function addUpToK(numbers, k) {
  const visited = new Map();
  for (const num of numbers) {
    if (visited.has(k - num)) return true;
    visited.set(num)
  }
  return false;
}

module.exports = addUpToK;
