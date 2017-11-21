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
    
const splashDOM = () => {$.ajax({url: "https://personal-site-ffb9c.firebaseio.com/splash.json"})
    .then(splashPop => {
        console.log("splash bio", splashPop)
            const splashEl = document.getElementsByClassName("splash")[0]
            splashEl.innerHTML = ""
                // splashPop.forEach(splash => {
                    splashEl.innerHTML += `
                    <article id="bio" class="class="col-10 align-self-center container">
                        <h2><strong>Welcome to My Personal Site!</strong></h2>
                            <div id="text-block" class="col-10 align-self-center container">
                            <p>${splash.para1}</p>
                            <br>
                            <p>${splash.para2}</p>
                            </div>
                    <br>
                    </article>
                    `
                })
            }
    //     )
    // }
//exports
module.exports = splashDOM
},{}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY3JpcHRzL2Jsb2cvYmxvZy1jb250cm9sLmpzIiwic2NyaXB0cy9jb250YWN0L2NvbnRhY3QtY29udHJvbC5qcyIsInNjcmlwdHMvZGF0YWJhc2UuanMiLCJzY3JpcHRzL21haW4uanMiLCJzY3JpcHRzL25hdi9uYXYtY29udHJvbC5qcyIsInNjcmlwdHMvcHJvamVjdHMvcHJvamVjdHMtY29udHJvbC5qcyIsInNjcmlwdHMvcmVzdW1lL3Jlc3VtZS1jb250cm9sLmpzIiwic2NyaXB0cy9zcGxhc2gvc3BsYXNoLWNvbnRyb2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBBdXRob3I6IEpvaG4gRHVsYW5leVxuLy8gUHVycG9zZTogVGhpcyBtb2R1bGUgZ3JhYnMgYmxvZyBwb3N0cyBhbmQgcHJpbnRzIHRoZW0gdG8gdGhlIERPTVxuLy8g4pSMKMKwIM2cypbNocKwKeKUmFxuXG4vL3NldCBpbnRvIGEgZnVuY3Rpb24gZm9yIHNjb3BlLCBhamF4IHJlcXVlc3QgdGhlIGRhdGFiYXNlIGZvciBibG9nc1xuY29uc3QgYmxvZ0RPTSA9ICgpID0+IHskLmFqYXgoe3VybDogXCJodHRwczovL3BlcnNvbmFsLXNpdGUtZmZiOWMuZmlyZWJhc2Vpby5jb20vbXlCbG9nLmpzb25cIn0pXG4gICAgLy9hc3NpZ24gLnRoZW4gdG8gaGFsdCBKUyBmcm9tIGV4ZWN1dGluZyBiZWZvcmUgWEhSIHJldHVybnMgd2l0aCB0aGUgZGF0YVxuICAgIC50aGVuKGJsb2dzID0+IHtcbiAgICAgICAgLy9sb2cgb3VyIGRiIGZvciBvdXIgcG9vciBkZXZcbiAgICAgICAgY29uc29sZS5sb2coXCJibG9nc1wiLCBibG9ncylcbiAgICAgICAgICAgIC8vZ3JhYiB0aGUgYmxvZ19fbGlzdCBkaXYgZnJvbSBpbmRleC5odG1sXG4gICAgICAgICAgICBjb25zdCBibG9nRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmxvZ19fbGlzdFwiKVswXVxuICAgICAgICAgICAgLy9jbGVhciBvdXQgYW55IHVud2FudGVkIHN0dWZmXG4gICAgICAgICAgICBibG9nRWwuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICAgICAgICAgIC8vIGZvciBlYWNoIGtleSBpbiBibG9ncywgcHJpbnQgaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgYmxvZ3MuZm9yRWFjaChiID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYmxvZ0VsLmlubmVySFRNTCArPSBgXG4gICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlIGlkPSR7Yi5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+PHN0cm9uZz4ke2IudGl0bGV9PC9zdHJvbmc+PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJ0ZXh0LWJsb2NrXCIgY2xhc3M9XCJjb2wtMTAgYWxpZ24tc2VsZi1jZW50ZXIgY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4ke2IuZGF0ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiR7Yi50YWdzfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JHtiLmF1dGhvcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JHtiLmNvbnRlbnR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuLy9leHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGJsb2dET00iLCIvLyBBdXRob3I6IEpvaG4gRHVsYW5leVxuLy8gUHVycG9zZTogVGhpcyBtb2R1bGUgZ3JhYnMgY29udGFjdCBwb3N0cyBhbmQgcHJpbnRzIHRoZW0gdG8gdGhlIERPTVxuLy8g4pSMKMKwIM2cypbNocKwKeKUmFxuXG4vL3NldCBpbnRvIGEgZnVuY3Rpb24gZm9yIHNjb3BlLCBhamF4IHJlcXVlc3QgdGhlIGRhdGFiYXNlIGZvciBjb250YWN0c1xuY29uc3QgY29udGFjdERPTSA9ICgpID0+IHskLmFqYXgoe3VybDogXCJodHRwczovL3BlcnNvbmFsLXNpdGUtZmZiOWMuZmlyZWJhc2Vpby5jb20vY29udGFjdC5qc29uXCJ9KVxuICAgIC8vYXNzaWduIC50aGVuIHRvIGhhbHQgSlMgZnJvbSBleGVjdXRpbmcgYmVmb3JlIFhIUiByZXR1cm5zIHdpdGggdGhlIGRhdGFcbiAgICAudGhlbihjb250YWN0ID0+IHtcbiAgICAgICAgLy9sb2cgb3VyIGRiIGZvciBvdXIgcG9vciBkZXZcbiAgICAgICAgY29uc29sZS5sb2coXCJjb250YWN0XCIsIGNvbnRhY3QpXG4gICAgICAgICAgICAvL2dyYWIgdGhlIGNvbnRhY3RfX2xpc3QgZGl2IGZyb20gaW5kZXguaHRtbFxuICAgICAgICAgICAgY29uc3QgY29udGFjdEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbnRhY3RfX2xpc3RcIilbMF1cbiAgICAgICAgICAgIC8vY2xlYXIgb3V0IGFueSB1bndhbnRlZCBzdHVmZlxuICAgICAgICAgICAgY29udGFjdEVsLmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgICAgICAgICAvLyBmb3IgZWFjaCBrZXkgaW4gY29udGFjdCwgcHJpbnQgaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgY29udGFjdC5mb3JFYWNoKGMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb250YWN0RWwuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiIGlkPVwidGV4dC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPiR7Yy5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtjLnVzZXJuYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtjLnVybH1cIj48aW1nIHNyYz1cIiR7Yy5pY29ufVwiIGFsdD1cIlwiIHNyY3NldD1cIlwiIGhlaWdodD1cIjMyXCIgd2lkdGg9XCIzMlwiPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuLy9leHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRhY3RET00iLCIvLyBBdXRob3I6IEpvaG4gRHVsYW5leVxuLy8gUHVycG9zZTogaWQgZ2VuZXJhdG9yIGZ1bmN0aW9uXG4vLyDilIwowrAgzZzKls2hwrAp4pSYXG5cbi8vIGltcG9ydFxuXG4vLyBjcmVhdGUgZGJcbmNvbnN0IERhdGFiYXNlID0gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgbG9hZDoge1xuICAgICAgICB2YWx1ZTogKCkgPT4gYXNkZnpcbiAgICB9LFxuICAgIHNhdmU6IHtcbiAgICAgICAgdmFsdWU6IChkYiwgZmxhZykgPT4ge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJEYXRhYmFzZVwiLCBKU09OLnN0cmluZ2lmeShkYikpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaGFuZ2VkS2V5XCIsIEpTT04uc3RyaW5naWZ5KGZsYWcpKVxuICAgICAgICB9XG4gICAgfVxufSlcblxuLy8gZXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBEYXRhYmFzZVxuIiwiLy8gQXV0aG9yOiBKb2huIER1bGFuZXlcbi8vIFB1cnBvc2U6IE1haW4gbGFuZGluZyBmb3IgV2Vic2l0ZS4gaW5pdGlhbGl6ZXMgZnJhbWV3b3JrIGZvciBzZXZlcmFsIG90aGVyIG1vZHVsZXMuXG4vLyDilIwowrAgzZzKls2hwrAp4pSYXG5cbi8vIGltcG9ydHNcbmNvbnN0IGRiID0gcmVxdWlyZShcIi4vZGF0YWJhc2VcIilcbmNvbnN0IHNwbGFzaERPTSA9IHJlcXVpcmUoXCIuL3NwbGFzaC9zcGxhc2gtY29udHJvbC5qc1wiKVxuY29uc3QgbmF2aWdhdGlvbkJhckRPTSA9IHJlcXVpcmUoXCIuL25hdi9uYXYtY29udHJvbC5qc1wiKVxuY29uc3QgYmxvZ0RPTSA9IHJlcXVpcmUoXCIuL2Jsb2cvYmxvZy1jb250cm9sLmpzXCIpXG5jb25zdCBjb250YWN0RE9NID0gcmVxdWlyZShcIi4vY29udGFjdC9jb250YWN0LWNvbnRyb2wuanNcIilcbmNvbnN0IHByb2plY3RzRE9NID0gcmVxdWlyZShcIi4vcHJvamVjdHMvcHJvamVjdHMtY29udHJvbC5qc1wiKVxuY29uc3QgcmVzdW1lRE9NID0gcmVxdWlyZShcIi4vcmVzdW1lL3Jlc3VtZS1jb250cm9sLmpzXCIpXG5cbi8vbG9hZHMgYWxsIERPTSBwb3B1bGF0aW9uIG1vZHVsZXMuXG5jb25zdCBsb2FkRE9NID0gZnVuY3Rpb24oKXtcbiAgICBzcGxhc2hET00oKVxuICAgIG5hdmlnYXRpb25CYXJET00oKVxuICAgIGJsb2dET00oKVxuICAgIGNvbnRhY3RET00oKVxuICAgIHByb2plY3RzRE9NKClcbiAgICByZXN1bWVET00oKVxufVxuXG4gICAgLy9jYWxsIHRoZSBsb2FkZWQgZnVuY3Rpb25cbiAgICAgICAgbG9hZERPTSgpXG5cbi8vIGV4cG9ydHMgICAgICBcbm1vZHVsZS5leHBvcnRzID0gbG9hZERPTSAgICBcbiIsIi8vIEF1dGhvcjogSm9obiBEdWxhbmV5IGFuZCBQYXVsIEVsbGlzXG4vLyBQdXJwb3NlOiBUaGlzIG1vZHVsZSBncmFicyBuYXZiYXIgbGlua3MgYW5kIHByaW50cyB0aGVtIHRvIHRoZSBET01cbi8vIOKUjCjCsCDNnMqWzaHCsCnilJhcblxuLy9zZXQgaW50byBhIGZ1bmN0aW9uIGZvciBzY29wZSwgYWpheCByZXF1ZXN0IHRoZSBkYXRhYmFzZSBmb3IgbmF2aWdhdGlvbkJhclxuY29uc3QgbmF2aWdhdGlvbkJhckRPTSA9ICgpID0+IHskLmFqYXgoe3VybDogXCJodHRwczovL3BlcnNvbmFsLXNpdGUtZmZiOWMuZmlyZWJhc2Vpby5jb20vbmF2QmFyLmpzb25cIn0pXG4gICAgLy9hc3NpZ24gLnRoZW4gdG8gaGFsdCBKUyBmcm9tIGV4ZWN1dGluZyBiZWZvcmUgWEhSIHJldHVybnMgd2l0aCB0aGUgZGF0YVxuICAgIC50aGVuKG5hdmlnYXRpb25CYXIgPT4ge1xuICAgICAgICAvL2xvZyBvdXIgZGIgZm9yIG91ciBwb29yIGRldlxuICAgICAgICBjb25zb2xlLmxvZyhcIm5hdmlnYXRpb25CYXJcIiwgbmF2aWdhdGlvbkJhcilcbiAgICAgICAgICAgIC8vZ3JhYiB0aGUgbmF2aWdhdGlvbkJhcl9fbGlzdCBkaXYgZnJvbSBpbmRleC5odG1sXG4gICAgICAgICAgICBjb25zdCBuYXZFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpXG4gICAgICAgICAgICAvL2NsZWFyIG91dCBhbnkgdW53YW50ZWQgc3R1ZmZcbiAgICAgICAgICAgIG5hdkVsLmlubmVySFRNTCA9IFwiXCJcbiAgICAgICAgICAgICAgICAvLyBmb3IgZWFjaCBrZXkgaW4gbmF2aWdhdGlvbkJhciwgcHJpbnQgaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbkJhci5mb3JFYWNoKGN1cnJlbnROYXYgPT4ge1xuICAgICAgICAgICAgICAgICAgICBuYXZFbC5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1pdGVtIG5hdi1saW5rXCIgaHJlZj1cIiR7Y3VycmVudE5hdi5saW5rfVwiPiR7Y3VycmVudE5hdi5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG4vL2V4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gbmF2aWdhdGlvbkJhckRPTSIsIi8vIEF1dGhvcjogSm9obiBEdWxhbmV5XG4vLyBQdXJwb3NlOiBUaGlzIG1vZHVsZSBncmFicyBwcm9qZWN0cyBwb3N0cyBhbmQgcHJpbnRzIHRoZW0gdG8gdGhlIERPTVxuLy8g4pSMKMKwIM2cypbNocKwKeKUmFxuXG4vL3NldCBpbnRvIGEgZnVuY3Rpb24gZm9yIHNjb3BlLCBhamF4IHJlcXVlc3QgdGhlIGRhdGFiYXNlIGZvciBwcm9qZWN0c1xuY29uc3QgcHJvamVjdHNET00gPSAoKSA9PiB7JC5hamF4KHt1cmw6IFwiaHR0cHM6Ly9wZXJzb25hbC1zaXRlLWZmYjljLmZpcmViYXNlaW8uY29tL215UHJvamVjdHMuanNvblwifSlcbiAgICAvL2Fzc2lnbiAudGhlbiB0byBoYWx0IEpTIGZyb20gZXhlY3V0aW5nIGJlZm9yZSBYSFIgcmV0dXJucyB3aXRoIHRoZSBkYXRhXG4gICAgLnRoZW4ocHJvamVjdHMgPT4ge1xuICAgICAgICAvL2xvZyBvdXIgZGIgZm9yIG91ciBwb29yIGRldlxuICAgICAgICBjb25zb2xlLmxvZyhcInByb2plY3RzXCIsIHByb2plY3RzKVxuICAgICAgICAgICAgLy9ncmFiIHRoZSBwcm9qZWN0c19fbGlzdCBkaXYgZnJvbSBpbmRleC5odG1sXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RzX19saXN0XCIpWzBdXG4gICAgICAgICAgICAvL2NsZWFyIG91dCBhbnkgdW53YW50ZWQgc3R1ZmZcbiAgICAgICAgICAgIHByb2plY3RzRWwuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICAgICAgICAgIC8vIGZvciBlYWNoIGtleSBpbiBwcm9qZWN0cywgcHJpbnQgaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNFbC5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBpZD1cInRleHQtYmxvY2tcIiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+JHtwcm9qZWN0Lm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTAgYWxpZ24tc2VsZi1jZW50ZXIgY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGEgaHJlZj1cIiR7cHJvamVjdC51cmx9XCI+PGltZyBzcmM9XCIuLi9pbWFnZXMvZ2l0aHViLnBuZ1wiIGFsdD1cIlwiIHdpZHRoPVwiNjRweFwiIGhlaWdodD1cIjY0cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGluayB0byB0aGUgUHJvamVjdDwvYT48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGF0ZSBjb21wbGV0ZWQ6ICR7cHJvamVjdC5kYXRlQ29tcGxldGVkfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UZWNobm9sb2d5IHVzZWQ6ICR7cHJvamVjdC50ZWNoVXNlZH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGVhbW1hdGVzIGludm9sdmVkOiAke3Byb2plY3QudGVhbW1hdGVzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3Byb2plY3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG4vL2V4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gcHJvamVjdHNET00iLCIvLyBBdXRob3I6IEpvaG4gRHVsYW5leVxuLy8gUHVycG9zZTogVGhpcyBtb2R1bGUgZ3JhYnMgcmVzdW1lIHBvc3RzIGFuZCBwcmludHMgdGhlbSB0byB0aGUgRE9NXG4vLyDilIwowrAgzZzKls2hwrAp4pSYXG5cbi8vc2V0IGludG8gYSBmdW5jdGlvbiBmb3Igc2NvcGUsIGFqYXggcmVxdWVzdCB0aGUgZGF0YWJhc2UgZm9yIHJlc3VtZVxuY29uc3QgcmVzdW1lRE9NID0gKCkgPT4geyQuYWpheCh7dXJsOiBcImh0dHBzOi8vcGVyc29uYWwtc2l0ZS1mZmI5Yy5maXJlYmFzZWlvLmNvbS9yZXN1bWUuanNvblwifSlcbi8vYXNzaWduIC50aGVuIHRvIGhhbHQgSlMgZnJvbSBleGVjdXRpbmcgYmVmb3JlIFhIUiByZXR1cm5zIHdpdGggdGhlIGRhdGFcbiAgICAudGhlbihyZXN1bWUgPT4ge1xuICAgICAgICAvL2xvZyBvdXIgZGIgZm9yIG91ciBwb29yIGRldlxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VtZVwiLCByZXN1bWUpXG4gICAgICAgICAgICAvL2dyYWIgdGhlIHJlc3VtZV9fbGlzdCBkaXYgZnJvbSBpbmRleC5odG1sXG4gICAgICAgICAgICBjb25zdCByZXN1bWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJyZXN1bWVfX2xpc3RcIilbMF1cbiAgICAgICAgICAgIC8vY2xlYXIgb3V0IGFueSB1bndhbnRlZCBzdHVmZlxuICAgICAgICAgICAgcmVzdW1lRWwuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICAgICAgICAgIC8vIGZvciBlYWNoIGtleSBpbiByZXN1bWUsIHByaW50IGlubmVySFRNTFxuICAgICAgICAgICAgICAgIHJlc3VtZS5mb3JFYWNoKGpvYnMgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXN1bWVFbC5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEwIGFsaWduLXNlbGYtY2VudGVyIGNvbnRhaW5lclwiIGlkPVwidGV4dC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPiR7am9icy50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7am9icy5jb21wYW55fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke2pvYnMuZGF0ZXN9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7am9icy5yZXNwb25zaWJpbGl0aWVzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuLy9leHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHJlc3VtZURPTSIsIiAgICBcbmNvbnN0IHNwbGFzaERPTSA9ICgpID0+IHskLmFqYXgoe3VybDogXCJodHRwczovL3BlcnNvbmFsLXNpdGUtZmZiOWMuZmlyZWJhc2Vpby5jb20vc3BsYXNoLmpzb25cIn0pXG4gICAgLnRoZW4oc3BsYXNoUG9wID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzcGxhc2ggYmlvXCIsIHNwbGFzaFBvcClcbiAgICAgICAgICAgIGNvbnN0IHNwbGFzaEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNwbGFzaFwiKVswXVxuICAgICAgICAgICAgc3BsYXNoRWwuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICAgICAgICAgIC8vIHNwbGFzaFBvcC5mb3JFYWNoKHNwbGFzaCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNwbGFzaEVsLmlubmVySFRNTCArPSBgXG4gICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlIGlkPVwiYmlvXCIgY2xhc3M9XCJjbGFzcz1cImNvbC0xMCBhbGlnbi1zZWxmLWNlbnRlciBjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj48c3Ryb25nPldlbGNvbWUgdG8gTXkgUGVyc29uYWwgU2l0ZSE8L3N0cm9uZz48L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0ZXh0LWJsb2NrXCIgY2xhc3M9XCJjb2wtMTAgYWxpZ24tc2VsZi1jZW50ZXIgY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtzcGxhc2gucGFyYTF9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3NwbGFzaC5wYXJhMn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAvLyAgICAgKVxuICAgIC8vIH1cbi8vZXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBzcGxhc2hET00iXX0=
