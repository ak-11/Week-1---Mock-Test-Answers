/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occuring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
// var store = ['1','2','2','3','4'];
// var frequency = {};  // array of frequency.
// // var max = 0;  // holds the max frequency.
// var result;   // holds the max frequency element.
// for(var v in store) {
//         frequency[store[v]]=(frequency[store[v]] || 0)+1; // increment frequency.
//         if(frequency[store[v]] > max) { // is this frequency > max so far ?
//                 max = frequency[store[v]];  // update max.
//                 result = store[v];          // update result.
//         }
// }
// let max = 0;
//
//   if (arr.length === 0) {
//     return null;
//   }
//   arr.forEach(function (arr, i) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   });
//   return max;

function mode(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  let max = 0;
  let result;
  let freq = 0;
  for(var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      freq++;
    } else {
      freq = 0;
    }
    if (freq > max) {
      result = arr[i];
      max = freq;
    }
  }
  return result;
}
/* IMPLEMENT ME */
// Don't change below:

module.exports = { mode: mode };
// if (arr[i] == arr[i++])  {
    //   mostFrequent = arr[i];
    // } else if (arr[i] < arr[i++]) {
    //   mostFrequent = arr[i++];
    //
  // let modeArr = [];
  // let modeObj = {};
  // let mostFrequent = 0;
  // arr.forEach(function (arr, i) {
  //   if (!modeObj[i])  {
  //     modeObj[i] = 1;
  //   } else {
  //     modeObj[i]++;
  //   }

  //   if (modeObj[i] > mostFrequent)  {
  //     mostFrequent = modeObj[i];
  //     modeArr = [i];
  //   } else if (modeObj[i] === mostFrequent) {
  //     modeArr.push(i);
  //   }
  // });
  // return modeArr;
