/* Question 4
 *
 *  Implement the 'stdev' function defined below
 *
 * STDEV  - the square root of the average of the squared deviations of the values from their average value
 *        - you are allowed to look at Wikipedia's example calculation:
 *            https://en.wikipedia.org/wiki/Standard_deviation#Basic_examples
 *
 *        - use the provided 'round' function before returning your final value
 *        - you can take a square root using `Math.sqrt(number)`
 *
 * For example:
 *
 *    stdev([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    2.67
 */

function stdev(arr) {
  let total = arr.length;
  let sum = arr.reduce(function (a, b) {
    return a + b;
  }, 0);
  let mean1 = sum / total;
  let subtractMean = arr.map(function (val) {
    return (val - mean1);
  });
  let squared = subtractMean.map(function (x) {
    return Math.pow(x, 2);
  });
  let newSum = squared.reduce(function (a, b) {
    return a + b;
  }, 0);
  let mean2 = newSum / total;
  let finalVal = Math.sqrt(mean2);
  function round(number) {
    return Math.round(finalVal * 100) / 100;
  }
  return round(finalVal);
}

// Don't change below:

module.exports = { stdev: stdev };
