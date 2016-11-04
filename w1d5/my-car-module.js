'use strict';
// Implement your own module that exports a an object containing a function.
// However the function you export should invoke a 'private' function that is
// defined within your module but not exported from it.

// Basic syntax:
// var myModule = require("./my-module");

// module.exports = {
//   PHI: 1.618,
//   explain: function() {
//     console.log("(X+Y) is to X as X is to Y: (X+Y)≈" + this.PHI);
//   }
// };

const cars =  {
  Porsche: 911,
  Mercedes: "CLS",
  Price: 200000
}

module.exports = {
  Porsche: 911,
  Price: 200000,
  explain: function() {
    console.log("This is the first car in my object and it's my favourite " + this.Porsche + "!");
  }

}


