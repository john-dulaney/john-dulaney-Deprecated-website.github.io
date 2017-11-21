// Author: John Dulaney
// Purpose: Main landing for Website. initializes framework for several other modules.
// ┌(° ͜ʖ͡°)┘

// imports
const db = require("./database")
const splashDOM = require("./splash/splash-control.js")
const navigationBarDOM = require("./nav/nav-control.js")
const blogDOM = require("./blog/blog-control.js")
const contactDOM = require("./contact/contact-control.js")
const projectsDOM = require("./projects/projects-control.js")
const resumeDOM = require("./resume/resume-control.js")

//loads all DOM population modules.
const loadDOM = function(){
    splashDOM()
    navigationBarDOM()
    blogDOM()
    contactDOM()
    projectsDOM()
    resumeDOM()
}

    //call the loaded function
        loadDOM()

// exports      
module.exports = loadDOM    
