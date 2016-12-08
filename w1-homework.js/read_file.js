'use strict';

const fs = require("fs");



fs.readFile('test_async.txt', function (err, data)  {
  if (err)  {
    return console.error(err);
  }
  console.log("Asynchronous: " + data.toString());
});