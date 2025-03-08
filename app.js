const {sum, multiply} = require("./calculate"); // Importing local modules
const data = require("./data.json"); //Importing json data
const crypto = require('node:crypto'); //Importing core nodejs modules

console.log("JSON DATA", data)



sum(20,5);
multiply(20,5);
