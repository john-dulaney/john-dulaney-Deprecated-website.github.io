(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Author: John Dulaney
// Purpose: This module grabs blog posts and prints them to the DOM
// ┌(° ͜ʖ͡°)┘

//set into a function for scope, ajax request the database for blogs
const blogDOM = () => {$.ajax({url: "https://personal-site-ffb9c.firebaseio.com/myBlog.json"})
    //assign .then to halt JS from executing before XHR returns with the data
    .then(blogs => {
        //log our db for our poor dev
        console.log("blogs", blogs)
            //grab the blog__list div from index.html
            const blogEl = document.getElementsByClassName("blog__list")[0]
            //clear out any unwanted stuff
            blogEl.innerHTML = ""
                // for each key in blogs, print innerHTML
                blogs.forEach(b => {
                    blogEl.innerHTML += `
                    <article id=${b.id}>
                        <h2><strong>${b.title}</strong></h2>
                            <li id="text-block" class="col-10 align-self-center container">
                            <div>${b.date}</div>
                            <div>${b.tags}</div>
                            <div>${b.author}</div>
                                <hr>
                            <div>${b.content}</div>
                            </li>
                    <br>
                    </article>
                    `
                })
            }
        )
    }
//exports
module.exports = blogDOM
},{}],2:[function(require,module,exports){
// Author: John Dulaney
// Purpose: This module grabs contact posts and prints them to the DOM
// ┌(° ͜ʖ͡°)┘

//set into a function for scope, ajax request the database for contacts
const contactDOM = () => {$.ajax({url: "https://personal-site-ffb9c.firebaseio.com/contact.json"})
    //assign .then to halt JS from executing before XHR returns with the data
    .then(contact => {
        //log our db for our poor dev
        console.log("contact", contact)
            //grab the contact__list div from index.html
            const contactEl = document.getElementsByClassName("contact__list")[0]
            //clear out any unwanted stuff
            contactEl.innerHTML = ""
                // for each key in contact, print innerHTML
                contact.forEach(c => {
                    contactEl.innerHTML += `
                    <section class="">
                    <div class="container" id="text-block">
                        <h1>${c.name}</h1>
                            <p>${c.username}</p>
                            <a href="${c.url}"><img src="${c.icon}" alt="" srcset="" height="32" width="32"></a>
                    </div>
                    `
                })
            }
        )
    }
//exports
module.exports = contactDOM
},{}],3:[function(require,module,exports){
// Author: John Dulaney
// Purpose: id generator function
// ┌(° ͜ʖ͡°)┘

// import

// create db
const Database = Object.create(null, {
    load: {
        value: () => asdfz
    },
    save: {
        value: (db, flag) => {
            localStorage.setItem("Database", JSON.stringify(db));
            localStorage.setItem("changedKey", JSON.stringify(flag))
        }
    }
})

// exports
module.exports = Database

},{}],4:[function(require,module,exports){
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

},{"./blog/blog-control.js":1,"./contact/contact-control.js":2,"./database":3,"./nav/nav-control.js":5,"./projects/projects-control.js":6,"./resume/resume-control.js":7,"./splash/splash-control.js":8}],5:[function(require,module,exports){
// Author: John Dulaney and Paul Ellis
// Purpose: This module grabs navbar links and prints them to the DOM
// ┌(° ͜ʖ͡°)┘

//set into a function for scope, ajax request the database for navigationBar
const navigationBarDOM = () => {$.ajax({url: "https://personal-site-ffb9c.firebaseio.com/navBar.json"})
    //assign .then to halt JS from executing before XHR returns with the data
    .then(navigationBar => {
        //log our db for our poor dev
        console.log("navigationBar", navigationBar)
            //grab the navigationBar__list div from index.html
            const navEl = document.getElementById("nav")
            //clear out any unwanted stuff
            navEl.innerHTML = ""
                // for each key in navigationBar, print innerHTML
                navigationBar.forEach(currentNav => {
                    navEl.innerHTML += `
                    <a class="nav-item nav-link" href="${currentNav.link}">${currentNav.name}</a>
                    `
                })
            }
        )
    }
//exports
module.exports = navigationBarDOM
},{}],6:[function(require,module,exports){
// Author: John Dulaney
// Purpose: This module grabs projects posts and prints them to the DOM
// ┌(° ͜ʖ͡°)┘

//set into a function for scope, ajax request the database for projects
const projectsDOM = () => {$.ajax({url: "https://personal-site-ffb9c.firebaseio.com/myProjects.json"})
    //assign .then to halt JS from executing before XHR returns with the data
    .then(projects => {
        //log our db for our poor dev
        console.log("projects", projects)
            //grab the projects__list div from index.html
            const projectsEl = document.getElementsByClassName("projects__list")[0]
            //clear out any unwanted stuff
            projectsEl.innerHTML = ""
                // for each key in projects, print innerHTML
                projects.forEach(project => {
                    projectsEl.innerHTML += `
                    <section id="text-block" class="container">
                    <h2>${project.name}</h2>
                        <div class="col-10 align-self-center container">
                            <p><a href="${project.url}"><img src="../images/github.png" alt="" width="64px" height="64px">
                                Link to the Project</a></p>
                            <p>Date completed: ${project.dateCompleted}</p>
                            <p>Technology used: ${project.techUsed}</p>
                            <p>Teammates involved: ${project.teammates}</p>
                            <p>${project.description}</p>
                        </div>
                    </section>
                    `
                })
            }
        )
    }
//exports
module.exports = projectsDOM
},{}],7:[function(require,module,exports){
// Author: John Dulaney
// Purpose: This module grabs resume posts and prints them to the DOM
// ┌(° ͜ʖ͡°)┘

//set into a function for scope, ajax request the database for resume
const resumeDOM = () => {$.ajax({url: "https://personal-site-ffb9c.firebaseio.com/resume.json"})
//assign .then to halt JS from executing before XHR returns with the data
    .then(resume => {
        //log our db for our poor dev
        console.log("resume", resume)
            //grab the resume__list div from index.html
            const resumeEl = document.getElementsByClassName("resume__list")[0]
            //clear out any unwanted stuff
            resumeEl.innerHTML = ""
                // for each key in resume, print innerHTML
                resume.forEach(jobs => {
                    resumeEl.innerHTML += `
                    <section class="">
                    <div class="col-10 align-self-center container" id="text-block">
                        <h1>${jobs.title}</h1>
                            <p>${jobs.company}</p>
                            <p>${jobs.dates}</p>
                            <p>${jobs.responsibilities}</p>
                    </div>
                    `
                })
            }
        )
    }
//exports
module.exports = resumeDOM
},{}],8:[function(require,module,exports){
// Author: John Dulaney
// Purpose: This module grabs my bio and prints it to the DOM
// ┌(° ͜ʖ͡°)┘  
  
const splashDOM = () => {$.ajax({url: "https://personal-site-ffb9c.firebaseio.com/splash.json"})
    .then(splashPop => {
        console.log("splash bio", splashPop)
            const splashEl = document.getElementsByClassName("splash")[0]
            splashEl.innerHTML = ""
                splashPop.forEach(splash => {
                    splashEl.innerHTML += `
                    <article id="bio" class="class="col-10 align-self-center container">
                            <div id="text-block" class="${splash.id} col-10 align-self-center container">
                            <p>${splash.content}</p>
                    <br>
                    </article>
                    `
                })
            }
        )
    }
//exports
module.exports = splashDOM
},{}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY3JpcHRzL2Jsb2cvYmxvZy1jb250cm9sLmpzIiwic2NyaXB0cy9jb250YWN0L2NvbnRhY3QtY29udHJvbC5qcyIsInNjcmlwdHMvZGF0YWJhc2UuanMiLCJzY3JpcHRzL21haW4uanMiLCJzY3JpcHRzL25hdi9uYXYtY29udHJvbC5qcyIsInNjcmlwdHMvcHJvamVjdHMvcHJvamVjdHMtY29udHJvbC5qcyIsInNjcmlwdHMvcmVzdW1lL3Jlc3VtZS1jb250cm9sLmpzIiwic2NyaXB0cy9zcGxhc2gvc3BsYXNoLWNvbnRyb2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gQXV0aG9yOiBKb2huIER1bGFuZXlcbi8vIFB1cnBvc2U6IFRoaXMgbW9kdWxlIGdyYWJzIGJsb2cgcG9zdHMgYW5kIHByaW50cyB0aGVtIHRvIHRoZSBET01cbi8vIOKUjCjCsCDNnMqWzaHCsCnilJhcblxuLy9zZXQgaW50byBhIGZ1bmN0aW9uIGZvciBzY29wZSwgYWpheCByZXF1ZXN0IHRoZSBkYXRhYmFzZSBmb3IgYmxvZ3NcbmNvbnN0IGJsb2dET00gPSAoKSA9PiB7JC5hamF4KHt1cmw6IFwiaHR0cHM6Ly9wZXJzb25hbC1zaXRlLWZmYjljLmZpcmViYXNlaW8uY29tL215QmxvZy5qc29uXCJ9KVxuICAgIC8vYXNzaWduIC50aGVuIHRvIGhhbHQgSlMgZnJvbSBleGVjdXRpbmcgYmVmb3JlIFhIUiByZXR1cm5zIHdpdGggdGhlIGRhdGFcbiAgICAudGhlbihibG9ncyA9PiB7XG4gICAgICAgIC8vbG9nIG91ciBkYiBmb3Igb3VyIHBvb3IgZGV2XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYmxvZ3NcIiwgYmxvZ3MpXG4gICAgICAgICAgICAvL2dyYWIgdGhlIGJsb2dfX2xpc3QgZGl2IGZyb20gaW5kZXguaHRtbFxuICAgICAgICAgICAgY29uc3QgYmxvZ0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJsb2dfX2xpc3RcIilbMF1cbiAgICAgICAgICAgIC8vY2xlYXIgb3V0IGFueSB1bndhbnRlZCBzdHVmZlxuICAgICAgICAgICAgYmxvZ0VsLmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgICAgICAgICAvLyBmb3IgZWFjaCBrZXkgaW4gYmxvZ3MsIHByaW50IGlubmVySFRNTFxuICAgICAgICAgICAgICAgIGJsb2dzLmZvckVhY2goYiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGJsb2dFbC5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZSBpZD0ke2IuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPjxzdHJvbmc+JHtiLnRpdGxlfTwvc3Ryb25nPjwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPVwidGV4dC1ibG9ja1wiIGNsYXNzPVwiY29sLTEwIGFsaWduLXNlbGYtY2VudGVyIGNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JHtiLmRhdGV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4ke2IudGFnc308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiR7Yi5hdXRob3J9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiR7Yi5jb250ZW50fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbi8vZXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBibG9nRE9NIiwiLy8gQXV0aG9yOiBKb2huIER1bGFuZXlcbi8vIFB1cnBvc2U6IFRoaXMgbW9kdWxlIGdyYWJzIGNvbnRhY3QgcG9zdHMgYW5kIHByaW50cyB0aGVtIHRvIHRoZSBET01cbi8vIOKUjCjCsCDNnMqWzaHCsCnilJhcblxuLy9zZXQgaW50byBhIGZ1bmN0aW9uIGZvciBzY29wZSwgYWpheCByZXF1ZXN0IHRoZSBkYXRhYmFzZSBmb3IgY29udGFjdHNcbmNvbnN0IGNvbnRhY3RET00gPSAoKSA9PiB7JC5hamF4KHt1cmw6IFwiaHR0cHM6Ly9wZXJzb25hbC1zaXRlLWZmYjljLmZpcmViYXNlaW8uY29tL2NvbnRhY3QuanNvblwifSlcbiAgICAvL2Fzc2lnbiAudGhlbiB0byBoYWx0IEpTIGZyb20gZXhlY3V0aW5nIGJlZm9yZSBYSFIgcmV0dXJucyB3aXRoIHRoZSBkYXRhXG4gICAgLnRoZW4oY29udGFjdCA9PiB7XG4gICAgICAgIC8vbG9nIG91ciBkYiBmb3Igb3VyIHBvb3IgZGV2XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29udGFjdFwiLCBjb250YWN0KVxuICAgICAgICAgICAgLy9ncmFiIHRoZSBjb250YWN0X19saXN0IGRpdiBmcm9tIGluZGV4Lmh0bWxcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhY3RFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjb250YWN0X19saXN0XCIpWzBdXG4gICAgICAgICAgICAvL2NsZWFyIG91dCBhbnkgdW53YW50ZWQgc3R1ZmZcbiAgICAgICAgICAgIGNvbnRhY3RFbC5pbm5lckhUTUwgPSBcIlwiXG4gICAgICAgICAgICAgICAgLy8gZm9yIGVhY2gga2V5IGluIGNvbnRhY3QsIHByaW50IGlubmVySFRNTFxuICAgICAgICAgICAgICAgIGNvbnRhY3QuZm9yRWFjaChjID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdEVsLmlubmVySFRNTCArPSBgXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBpZD1cInRleHQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT4ke2MubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7Yy51c2VybmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7Yy51cmx9XCI+PGltZyBzcmM9XCIke2MuaWNvbn1cIiBhbHQ9XCJcIiBzcmNzZXQ9XCJcIiBoZWlnaHQ9XCIzMlwiIHdpZHRoPVwiMzJcIj48L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbi8vZXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb250YWN0RE9NIiwiLy8gQXV0aG9yOiBKb2huIER1bGFuZXlcbi8vIFB1cnBvc2U6IGlkIGdlbmVyYXRvciBmdW5jdGlvblxuLy8g4pSMKMKwIM2cypbNocKwKeKUmFxuXG4vLyBpbXBvcnRcblxuLy8gY3JlYXRlIGRiXG5jb25zdCBEYXRhYmFzZSA9IE9iamVjdC5jcmVhdGUobnVsbCwge1xuICAgIGxvYWQ6IHtcbiAgICAgICAgdmFsdWU6ICgpID0+IGFzZGZ6XG4gICAgfSxcbiAgICBzYXZlOiB7XG4gICAgICAgIHZhbHVlOiAoZGIsIGZsYWcpID0+IHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiRGF0YWJhc2VcIiwgSlNPTi5zdHJpbmdpZnkoZGIpKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2hhbmdlZEtleVwiLCBKU09OLnN0cmluZ2lmeShmbGFnKSlcbiAgICAgICAgfVxuICAgIH1cbn0pXG5cbi8vIGV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gRGF0YWJhc2VcbiIsIi8vIEF1dGhvcjogSm9obiBEdWxhbmV5XG4vLyBQdXJwb3NlOiBNYWluIGxhbmRpbmcgZm9yIFdlYnNpdGUuIGluaXRpYWxpemVzIGZyYW1ld29yayBmb3Igc2V2ZXJhbCBvdGhlciBtb2R1bGVzLlxuLy8g4pSMKMKwIM2cypbNocKwKeKUmFxuXG4vLyBpbXBvcnRzXG5jb25zdCBkYiA9IHJlcXVpcmUoXCIuL2RhdGFiYXNlXCIpXG5jb25zdCBzcGxhc2hET00gPSByZXF1aXJlKFwiLi9zcGxhc2gvc3BsYXNoLWNvbnRyb2wuanNcIilcbmNvbnN0IG5hdmlnYXRpb25CYXJET00gPSByZXF1aXJlKFwiLi9uYXYvbmF2LWNvbnRyb2wuanNcIilcbmNvbnN0IGJsb2dET00gPSByZXF1aXJlKFwiLi9ibG9nL2Jsb2ctY29udHJvbC5qc1wiKVxuY29uc3QgY29udGFjdERPTSA9IHJlcXVpcmUoXCIuL2NvbnRhY3QvY29udGFjdC1jb250cm9sLmpzXCIpXG5jb25zdCBwcm9qZWN0c0RPTSA9IHJlcXVpcmUoXCIuL3Byb2plY3RzL3Byb2plY3RzLWNvbnRyb2wuanNcIilcbmNvbnN0IHJlc3VtZURPTSA9IHJlcXVpcmUoXCIuL3Jlc3VtZS9yZXN1bWUtY29udHJvbC5qc1wiKVxuXG4vL2xvYWRzIGFsbCBET00gcG9wdWxhdGlvbiBtb2R1bGVzLlxuY29uc3QgbG9hZERPTSA9IGZ1bmN0aW9uKCl7XG4gICAgc3BsYXNoRE9NKClcbiAgICBuYXZpZ2F0aW9uQmFyRE9NKClcbiAgICBibG9nRE9NKClcbiAgICBjb250YWN0RE9NKClcbiAgICBwcm9qZWN0c0RPTSgpXG4gICAgcmVzdW1lRE9NKClcbn1cblxuICAgIC8vY2FsbCB0aGUgbG9hZGVkIGZ1bmN0aW9uXG4gICAgICAgIGxvYWRET00oKVxuXG4vLyBleHBvcnRzICAgICAgXG5tb2R1bGUuZXhwb3J0cyA9IGxvYWRET00gICAgXG4iLCIvLyBBdXRob3I6IEpvaG4gRHVsYW5leSBhbmQgUGF1bCBFbGxpc1xuLy8gUHVycG9zZTogVGhpcyBtb2R1bGUgZ3JhYnMgbmF2YmFyIGxpbmtzIGFuZCBwcmludHMgdGhlbSB0byB0aGUgRE9NXG4vLyDilIwowrAgzZzKls2hwrAp4pSYXG5cbi8vc2V0IGludG8gYSBmdW5jdGlvbiBmb3Igc2NvcGUsIGFqYXggcmVxdWVzdCB0aGUgZGF0YWJhc2UgZm9yIG5hdmlnYXRpb25CYXJcbmNvbnN0IG5hdmlnYXRpb25CYXJET00gPSAoKSA9PiB7JC5hamF4KHt1cmw6IFwiaHR0cHM6Ly9wZXJzb25hbC1zaXRlLWZmYjljLmZpcmViYXNlaW8uY29tL25hdkJhci5qc29uXCJ9KVxuICAgIC8vYXNzaWduIC50aGVuIHRvIGhhbHQgSlMgZnJvbSBleGVjdXRpbmcgYmVmb3JlIFhIUiByZXR1cm5zIHdpdGggdGhlIGRhdGFcbiAgICAudGhlbihuYXZpZ2F0aW9uQmFyID0+IHtcbiAgICAgICAgLy9sb2cgb3VyIGRiIGZvciBvdXIgcG9vciBkZXZcbiAgICAgICAgY29uc29sZS5sb2coXCJuYXZpZ2F0aW9uQmFyXCIsIG5hdmlnYXRpb25CYXIpXG4gICAgICAgICAgICAvL2dyYWIgdGhlIG5hdmlnYXRpb25CYXJfX2xpc3QgZGl2IGZyb20gaW5kZXguaHRtbFxuICAgICAgICAgICAgY29uc3QgbmF2RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKVxuICAgICAgICAgICAgLy9jbGVhciBvdXQgYW55IHVud2FudGVkIHN0dWZmXG4gICAgICAgICAgICBuYXZFbC5pbm5lckhUTUwgPSBcIlwiXG4gICAgICAgICAgICAgICAgLy8gZm9yIGVhY2gga2V5IGluIG5hdmlnYXRpb25CYXIsIHByaW50IGlubmVySFRNTFxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25CYXIuZm9yRWFjaChjdXJyZW50TmF2ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbmF2RWwuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtaXRlbSBuYXYtbGlua1wiIGhyZWY9XCIke2N1cnJlbnROYXYubGlua31cIj4ke2N1cnJlbnROYXYubmFtZX08L2E+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuLy9leHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IG5hdmlnYXRpb25CYXJET00iLCIvLyBBdXRob3I6IEpvaG4gRHVsYW5leVxuLy8gUHVycG9zZTogVGhpcyBtb2R1bGUgZ3JhYnMgcHJvamVjdHMgcG9zdHMgYW5kIHByaW50cyB0aGVtIHRvIHRoZSBET01cbi8vIOKUjCjCsCDNnMqWzaHCsCnilJhcblxuLy9zZXQgaW50byBhIGZ1bmN0aW9uIGZvciBzY29wZSwgYWpheCByZXF1ZXN0IHRoZSBkYXRhYmFzZSBmb3IgcHJvamVjdHNcbmNvbnN0IHByb2plY3RzRE9NID0gKCkgPT4geyQuYWpheCh7dXJsOiBcImh0dHBzOi8vcGVyc29uYWwtc2l0ZS1mZmI5Yy5maXJlYmFzZWlvLmNvbS9teVByb2plY3RzLmpzb25cIn0pXG4gICAgLy9hc3NpZ24gLnRoZW4gdG8gaGFsdCBKUyBmcm9tIGV4ZWN1dGluZyBiZWZvcmUgWEhSIHJldHVybnMgd2l0aCB0aGUgZGF0YVxuICAgIC50aGVuKHByb2plY3RzID0+IHtcbiAgICAgICAgLy9sb2cgb3VyIGRiIGZvciBvdXIgcG9vciBkZXZcbiAgICAgICAgY29uc29sZS5sb2coXCJwcm9qZWN0c1wiLCBwcm9qZWN0cylcbiAgICAgICAgICAgIC8vZ3JhYiB0aGUgcHJvamVjdHNfX2xpc3QgZGl2IGZyb20gaW5kZXguaHRtbFxuICAgICAgICAgICAgY29uc3QgcHJvamVjdHNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0c19fbGlzdFwiKVswXVxuICAgICAgICAgICAgLy9jbGVhciBvdXQgYW55IHVud2FudGVkIHN0dWZmXG4gICAgICAgICAgICBwcm9qZWN0c0VsLmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgICAgICAgICAvLyBmb3IgZWFjaCBrZXkgaW4gcHJvamVjdHMsIHByaW50IGlubmVySFRNTFxuICAgICAgICAgICAgICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzRWwuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJ0ZXh0LWJsb2NrXCIgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPiR7cHJvamVjdC5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEwIGFsaWduLXNlbGYtY2VudGVyIGNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxhIGhyZWY9XCIke3Byb2plY3QudXJsfVwiPjxpbWcgc3JjPVwiLi4vaW1hZ2VzL2dpdGh1Yi5wbmdcIiBhbHQ9XCJcIiB3aWR0aD1cIjY0cHhcIiBoZWlnaHQ9XCI2NHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExpbmsgdG8gdGhlIFByb2plY3Q8L2E+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRhdGUgY29tcGxldGVkOiAke3Byb2plY3QuZGF0ZUNvbXBsZXRlZH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGVjaG5vbG9neSB1c2VkOiAke3Byb2plY3QudGVjaFVzZWR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRlYW1tYXRlcyBpbnZvbHZlZDogJHtwcm9qZWN0LnRlYW1tYXRlc308L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuLy9leHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHByb2plY3RzRE9NIiwiLy8gQXV0aG9yOiBKb2huIER1bGFuZXlcbi8vIFB1cnBvc2U6IFRoaXMgbW9kdWxlIGdyYWJzIHJlc3VtZSBwb3N0cyBhbmQgcHJpbnRzIHRoZW0gdG8gdGhlIERPTVxuLy8g4pSMKMKwIM2cypbNocKwKeKUmFxuXG4vL3NldCBpbnRvIGEgZnVuY3Rpb24gZm9yIHNjb3BlLCBhamF4IHJlcXVlc3QgdGhlIGRhdGFiYXNlIGZvciByZXN1bWVcbmNvbnN0IHJlc3VtZURPTSA9ICgpID0+IHskLmFqYXgoe3VybDogXCJodHRwczovL3BlcnNvbmFsLXNpdGUtZmZiOWMuZmlyZWJhc2Vpby5jb20vcmVzdW1lLmpzb25cIn0pXG4vL2Fzc2lnbiAudGhlbiB0byBoYWx0IEpTIGZyb20gZXhlY3V0aW5nIGJlZm9yZSBYSFIgcmV0dXJucyB3aXRoIHRoZSBkYXRhXG4gICAgLnRoZW4ocmVzdW1lID0+IHtcbiAgICAgICAgLy9sb2cgb3VyIGRiIGZvciBvdXIgcG9vciBkZXZcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bWVcIiwgcmVzdW1lKVxuICAgICAgICAgICAgLy9ncmFiIHRoZSByZXN1bWVfX2xpc3QgZGl2IGZyb20gaW5kZXguaHRtbFxuICAgICAgICAgICAgY29uc3QgcmVzdW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicmVzdW1lX19saXN0XCIpWzBdXG4gICAgICAgICAgICAvL2NsZWFyIG91dCBhbnkgdW53YW50ZWQgc3R1ZmZcbiAgICAgICAgICAgIHJlc3VtZUVsLmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgICAgICAgICAvLyBmb3IgZWFjaCBrZXkgaW4gcmVzdW1lLCBwcmludCBpbm5lckhUTUxcbiAgICAgICAgICAgICAgICByZXN1bWUuZm9yRWFjaChqb2JzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdW1lRWwuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMCBhbGlnbi1zZWxmLWNlbnRlciBjb250YWluZXJcIiBpZD1cInRleHQtYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT4ke2pvYnMudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke2pvYnMuY29tcGFueX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtqb2JzLmRhdGVzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke2pvYnMucmVzcG9uc2liaWxpdGllc308L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbi8vZXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSByZXN1bWVET00iLCIvLyBBdXRob3I6IEpvaG4gRHVsYW5leVxuLy8gUHVycG9zZTogVGhpcyBtb2R1bGUgZ3JhYnMgbXkgYmlvIGFuZCBwcmludHMgaXQgdG8gdGhlIERPTVxuLy8g4pSMKMKwIM2cypbNocKwKeKUmCAgXG4gIFxuY29uc3Qgc3BsYXNoRE9NID0gKCkgPT4geyQuYWpheCh7dXJsOiBcImh0dHBzOi8vcGVyc29uYWwtc2l0ZS1mZmI5Yy5maXJlYmFzZWlvLmNvbS9zcGxhc2guanNvblwifSlcbiAgICAudGhlbihzcGxhc2hQb3AgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNwbGFzaCBiaW9cIiwgc3BsYXNoUG9wKVxuICAgICAgICAgICAgY29uc3Qgc3BsYXNoRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic3BsYXNoXCIpWzBdXG4gICAgICAgICAgICBzcGxhc2hFbC5pbm5lckhUTUwgPSBcIlwiXG4gICAgICAgICAgICAgICAgc3BsYXNoUG9wLmZvckVhY2goc3BsYXNoID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3BsYXNoRWwuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgICAgICAgICAgPGFydGljbGUgaWQ9XCJiaW9cIiBjbGFzcz1cImNsYXNzPVwiY29sLTEwIGFsaWduLXNlbGYtY2VudGVyIGNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0ZXh0LWJsb2NrXCIgY2xhc3M9XCIke3NwbGFzaC5pZH0gY29sLTEwIGFsaWduLXNlbGYtY2VudGVyIGNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7c3BsYXNoLmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG4vL2V4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gc3BsYXNoRE9NIl19
