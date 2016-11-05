/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of numbers in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
function count(arr) {
  return arr.length;
  /* IMPLEMENT ME */
}

/* ===========================================================================
 * SUM - the sum of the numbers in a list
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
function sum(arr) {
  let listSum = 0;
  arr.forEach(function(numbersList, i)  {
    listSum += arr[i];
  });
  return listSum;
  /* IMPLEMENT ME */
}

/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */
function mean(arr) {
  let listSum = 0;
  if (arr.length > 0) {
    arr.forEach(function(numbersList, i)  {
      listSum += arr[i];
    });
    return listSum / arr.length;
  }
  /* IMPLEMENT ME */

}

function round(number) {
  return Math.round(number * 100) / 100;
}

// Don't change below:

module.exports = { count: count, sum: sum, mean: mean };
