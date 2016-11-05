/* Question 1
 *
 *  Implement the functions defined below
 *
 */

 /* ===========================================================================
  * MIN - the lowest value in a list
  *
  * For example:
  *
  *    min([6,2,3,4,9,6,1,0,5])
  *
  * Returns:
  *
  *    0
  */
function min(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  return arr[0];
}
  // let arrayMin = arr[0];
  // arr.forEach(function(arr, i)  {
  //   if (arrayMin >= arr[i])  {
  //     arrayMin = arr[i];
  //   }
  // });
  // return arrayMin;
  /* IMPLEMENT ME */



/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
function max(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  return arr[arr.length - 1];
}
  // let maxArray = arr[0];
  // arr.forEach(function(arr, i)  {
  //   if (arr[i] >= maxArray)  {
  //     maxArray = arr[i];
  //   }
  // });
  // return min;
  /* IMPLEMENT ME */


/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
function range(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  return arr[arr.length - 1] - arr[0];
}
 /* IMPLEMENT ME */
// Don't change below:

module.exports = { min: min, max: max, range: range };
