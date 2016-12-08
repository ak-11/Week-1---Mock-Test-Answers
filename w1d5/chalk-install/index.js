'use strict';

const chalk = require("chalk");

const message = chalk.bgCyan(chalk.blue.bold("Hello") + chalk.red("|||||||") + chalk.yellow.inverse("World"));

console.log(message);

