// Author: John Dulaney
// Purpose: Main landing for Website. initializes framework for several other modules.
// ┌(° ͜ʖ͡°)┘

// imports
const db = require("./database")
const blogDOM = require("./blog/blog-control.js")


const main = function(){
       return blogDOM()



}
main()

// exports      
module.exports = main
