/* Question 2
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */


function median(arr) {
  let midEven = arr.length / 2;
  let midEven2 = (arr.length / 2) - 1;
  let midOdd = (arr.length - 1) / 2;
  arr.sort(function(a, b) {
    return a - b;
  });
  if (arr.length % 2 === 0)  {
    return (arr[midEven] + arr[midEven2]) / 2;
  } else {
    return arr[midOdd];
  }
}
  // if (arr % 2 === 0)  {
  //   return (arr[splitLength - 1] - splitLength) / 2;
  // } else  {
  //   return Math.floor(splitLength);
  // }
  /* IMPLEMENT ME */
function round(number) {
  return Math.round(number * 100) / 100;
}



// Don't change below:

module.exports = { median: median };
