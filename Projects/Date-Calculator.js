"use const";

const dateConversion = function (postDate) {
  let today = Date.now();
  let millisecondsInDay = 86400000;
  let difference = (today - postDate)/millisecondsInDay;
  let result = Math.floor(difference);
  return ("Posted " + result + "days ago.")
}

