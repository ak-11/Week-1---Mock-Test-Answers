/*
console.log(process.argv);

var myArgs = process.argv.slice(2);  //skip node and path
console.log('myArgs: ', myArgs);

switch (myArgs[0])  {
  case 'insult':
    console.log(myArgs[1], 'smells quite badly. ');
  case 'compliment':
    console.log(myArgs[1], 'is reallly cool. ');
  default:
    console.log('Sorry, that is not something I know how to do.');
}
*/
//add optimist with "npm install optimist"

var myArgs = require('optimist').argv,
  help = 'This would be a great place for real help information.';

if ((myArgs.h) || (myArgs.help))  {
    conosle.log(help);
    process.exit(0);
}
switch (myArgs._[0])  {
  case 'insult':
    console.log(myArgs.n || myArgs.name, 'smells quite badly.');
    break;
  case 'compliment':
    conosle.log(myArgs.n || myArgs.name, 'is really cool.');
  default:
    console.log(help);
}

console.log('myArgs: ', myArgs);
