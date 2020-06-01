const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes.js');

const message = getNotes();

console.log(message);
console.log(validator.isURL('https/nead.io'));
console.log(chalk.green.inverse.bold('Success!'));




