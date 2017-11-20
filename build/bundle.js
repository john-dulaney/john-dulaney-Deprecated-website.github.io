(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Author: John Dulaney
// Purpose: This module grabs blog posts and prints them to the DOM
// ┌(° ͜ʖ͡°)┘

//set into a function for scope, ajax request the database for blogs
const blogDOM = () => {$.ajax({url: "https://personal-site-ffb9c.firebaseio.com/myBlog.json"})
    //assign .then to halt JS from executing before XHR returns with the data
    .then(blogs => {
        //log our db for our poor dev
        console.log(blogs)
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
        console.log(contact)
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
const navigationBarDOM = require("./nav/nav-control.js")
const blogDOM = require("./blog/blog-control.js")
const contactDOM = require("./contact/contact-control.js")
const projectsDOM = require("./projects/projects-control.js")
const resumeDOM = require("./resume/resume-control.js")


const loadDOM = function(){
    navigationBarDOM()
    blogDOM()
    contactDOM()
    projectsDOM()
    resumeDOM()
}

    loadDOM()

// exports      
module.exports = loadDOM    

},{"./blog/blog-control.js":1,"./contact/contact-control.js":2,"./database":3,"./nav/nav-control.js":5,"./projects/projects-control.js":6,"./resume/resume-control.js":7}],5:[function(require,module,exports){
// Author: John Dulaney
// Purpose: This module grabs navigationBar posts and prints them to the DOM
// ┌(° ͜ʖ͡°)┘

//set into a function for scope, ajax request the database for navigationBar
const navigationBarDOM = () => {$.ajax({url: "https://personal-site-ffb9c.firebaseio.com/navBar.json"})
    //assign .then to halt JS from executing before XHR returns with the data
    .then(navigationBar => {
        //log our db for our poor dev
        console.log(navigationBar)
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
        console.log(projects)
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
        console.log(resume)
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
},{}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY3JpcHRzL2Jsb2cvYmxvZy1jb250cm9sLmpzIiwic2NyaXB0cy9jb250YWN0L2NvbnRhY3QtY29udHJvbC5qcyIsInNjcmlwdHMvZGF0YWJhc2UuanMiLCJzY3JpcHRzL21haW4uanMiLCJzY3JpcHRzL25hdi9uYXYtY29udHJvbC5qcyIsInNjcmlwdHMvcHJvamVjdHMvcHJvamVjdHMtY29udHJvbC5qcyIsInNjcmlwdHMvcmVzdW1lL3Jlc3VtZS1jb250cm9sLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIEF1dGhvcjogSm9obiBEdWxhbmV5XG4vLyBQdXJwb3NlOiBUaGlzIG1vZHVsZSBncmFicyBibG9nIHBvc3RzIGFuZCBwcmludHMgdGhlbSB0byB0aGUgRE9NXG4vLyDilIwowrAgzZzKls2hwrAp4pSYXG5cbi8vc2V0IGludG8gYSBmdW5jdGlvbiBmb3Igc2NvcGUsIGFqYXggcmVxdWVzdCB0aGUgZGF0YWJhc2UgZm9yIGJsb2dzXG5jb25zdCBibG9nRE9NID0gKCkgPT4geyQuYWpheCh7dXJsOiBcImh0dHBzOi8vcGVyc29uYWwtc2l0ZS1mZmI5Yy5maXJlYmFzZWlvLmNvbS9teUJsb2cuanNvblwifSlcbiAgICAvL2Fzc2lnbiAudGhlbiB0byBoYWx0IEpTIGZyb20gZXhlY3V0aW5nIGJlZm9yZSBYSFIgcmV0dXJucyB3aXRoIHRoZSBkYXRhXG4gICAgLnRoZW4oYmxvZ3MgPT4ge1xuICAgICAgICAvL2xvZyBvdXIgZGIgZm9yIG91ciBwb29yIGRldlxuICAgICAgICBjb25zb2xlLmxvZyhibG9ncylcbiAgICAgICAgICAgIC8vZ3JhYiB0aGUgYmxvZ19fbGlzdCBkaXYgZnJvbSBpbmRleC5odG1sXG4gICAgICAgICAgICBjb25zdCBibG9nRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmxvZ19fbGlzdFwiKVswXVxuICAgICAgICAgICAgLy9jbGVhciBvdXQgYW55IHVud2FudGVkIHN0dWZmXG4gICAgICAgICAgICBibG9nRWwuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICAgICAgICAgIC8vIGZvciBlYWNoIGtleSBpbiBibG9ncywgcHJpbnQgaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgYmxvZ3MuZm9yRWFjaChiID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYmxvZ0VsLmlubmVySFRNTCArPSBgXG4gICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlIGlkPSR7Yi5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+PHN0cm9uZz4ke2IudGl0bGV9PC9zdHJvbmc+PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJ0ZXh0LWJsb2NrXCIgY2xhc3M9XCJjb2wtMTAgYWxpZ24tc2VsZi1jZW50ZXIgY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4ke2IuZGF0ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiR7Yi50YWdzfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JHtiLmF1dGhvcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JHtiLmNvbnRlbnR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuLy9leHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGJsb2dET00iLCIvLyBBdXRob3I6IEpvaG4gRHVsYW5leVxuLy8gUHVycG9zZTogVGhpcyBtb2R1bGUgZ3JhYnMgY29udGFjdCBwb3N0cyBhbmQgcHJpbnRzIHRoZW0gdG8gdGhlIERPTVxuLy8g4pSMKMKwIM2cypbNocKwKeKUmFxuXG4vL3NldCBpbnRvIGEgZnVuY3Rpb24gZm9yIHNjb3BlLCBhamF4IHJlcXVlc3QgdGhlIGRhdGFiYXNlIGZvciBjb250YWN0c1xuY29uc3QgY29udGFjdERPTSA9ICgpID0+IHskLmFqYXgoe3VybDogXCJodHRwczovL3BlcnNvbmFsLXNpdGUtZmZiOWMuZmlyZWJhc2Vpby5jb20vY29udGFjdC5qc29uXCJ9KVxuICAgIC8vYXNzaWduIC50aGVuIHRvIGhhbHQgSlMgZnJvbSBleGVjdXRpbmcgYmVmb3JlIFhIUiByZXR1cm5zIHdpdGggdGhlIGRhdGFcbiAgICAudGhlbihjb250YWN0ID0+IHtcbiAgICAgICAgLy9sb2cgb3VyIGRiIGZvciBvdXIgcG9vciBkZXZcbiAgICAgICAgY29uc29sZS5sb2coY29udGFjdClcbiAgICAgICAgICAgIC8vZ3JhYiB0aGUgY29udGFjdF9fbGlzdCBkaXYgZnJvbSBpbmRleC5odG1sXG4gICAgICAgICAgICBjb25zdCBjb250YWN0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY29udGFjdF9fbGlzdFwiKVswXVxuICAgICAgICAgICAgLy9jbGVhciBvdXQgYW55IHVud2FudGVkIHN0dWZmXG4gICAgICAgICAgICBjb250YWN0RWwuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICAgICAgICAgIC8vIGZvciBlYWNoIGtleSBpbiBjb250YWN0LCBwcmludCBpbm5lckhUTUxcbiAgICAgICAgICAgICAgICBjb250YWN0LmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3RFbC5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgaWQ9XCJ0ZXh0LWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+JHtjLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke2MudXNlcm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke2MudXJsfVwiPjxpbWcgc3JjPVwiJHtjLmljb259XCIgYWx0PVwiXCIgc3Jjc2V0PVwiXCIgaGVpZ2h0PVwiMzJcIiB3aWR0aD1cIjMyXCI+PC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG4vL2V4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29udGFjdERPTSIsIi8vIEF1dGhvcjogSm9obiBEdWxhbmV5XG4vLyBQdXJwb3NlOiBpZCBnZW5lcmF0b3IgZnVuY3Rpb25cbi8vIOKUjCjCsCDNnMqWzaHCsCnilJhcblxuLy8gaW1wb3J0XG5cbi8vIGNyZWF0ZSBkYlxuY29uc3QgRGF0YWJhc2UgPSBPYmplY3QuY3JlYXRlKG51bGwsIHtcbiAgICBsb2FkOiB7XG4gICAgICAgIHZhbHVlOiAoKSA9PiBhc2RmelxuICAgIH0sXG4gICAgc2F2ZToge1xuICAgICAgICB2YWx1ZTogKGRiLCBmbGFnKSA9PiB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIkRhdGFiYXNlXCIsIEpTT04uc3RyaW5naWZ5KGRiKSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoYW5nZWRLZXlcIiwgSlNPTi5zdHJpbmdpZnkoZmxhZykpXG4gICAgICAgIH1cbiAgICB9XG59KVxuXG4vLyBleHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFiYXNlXG4iLCIvLyBBdXRob3I6IEpvaG4gRHVsYW5leVxuLy8gUHVycG9zZTogTWFpbiBsYW5kaW5nIGZvciBXZWJzaXRlLiBpbml0aWFsaXplcyBmcmFtZXdvcmsgZm9yIHNldmVyYWwgb3RoZXIgbW9kdWxlcy5cbi8vIOKUjCjCsCDNnMqWzaHCsCnilJhcblxuLy8gaW1wb3J0c1xuY29uc3QgZGIgPSByZXF1aXJlKFwiLi9kYXRhYmFzZVwiKVxuY29uc3QgbmF2aWdhdGlvbkJhckRPTSA9IHJlcXVpcmUoXCIuL25hdi9uYXYtY29udHJvbC5qc1wiKVxuY29uc3QgYmxvZ0RPTSA9IHJlcXVpcmUoXCIuL2Jsb2cvYmxvZy1jb250cm9sLmpzXCIpXG5jb25zdCBjb250YWN0RE9NID0gcmVxdWlyZShcIi4vY29udGFjdC9jb250YWN0LWNvbnRyb2wuanNcIilcbmNvbnN0IHByb2plY3RzRE9NID0gcmVxdWlyZShcIi4vcHJvamVjdHMvcHJvamVjdHMtY29udHJvbC5qc1wiKVxuY29uc3QgcmVzdW1lRE9NID0gcmVxdWlyZShcIi4vcmVzdW1lL3Jlc3VtZS1jb250cm9sLmpzXCIpXG5cblxuY29uc3QgbG9hZERPTSA9IGZ1bmN0aW9uKCl7XG4gICAgbmF2aWdhdGlvbkJhckRPTSgpXG4gICAgYmxvZ0RPTSgpXG4gICAgY29udGFjdERPTSgpXG4gICAgcHJvamVjdHNET00oKVxuICAgIHJlc3VtZURPTSgpXG59XG5cbiAgICBsb2FkRE9NKClcblxuLy8gZXhwb3J0cyAgICAgIFxubW9kdWxlLmV4cG9ydHMgPSBsb2FkRE9NICAgIFxuIiwiLy8gQXV0aG9yOiBKb2huIER1bGFuZXlcbi8vIFB1cnBvc2U6IFRoaXMgbW9kdWxlIGdyYWJzIG5hdmlnYXRpb25CYXIgcG9zdHMgYW5kIHByaW50cyB0aGVtIHRvIHRoZSBET01cbi8vIOKUjCjCsCDNnMqWzaHCsCnilJhcblxuLy9zZXQgaW50byBhIGZ1bmN0aW9uIGZvciBzY29wZSwgYWpheCByZXF1ZXN0IHRoZSBkYXRhYmFzZSBmb3IgbmF2aWdhdGlvbkJhclxuY29uc3QgbmF2aWdhdGlvbkJhckRPTSA9ICgpID0+IHskLmFqYXgoe3VybDogXCJodHRwczovL3BlcnNvbmFsLXNpdGUtZmZiOWMuZmlyZWJhc2Vpby5jb20vbmF2QmFyLmpzb25cIn0pXG4gICAgLy9hc3NpZ24gLnRoZW4gdG8gaGFsdCBKUyBmcm9tIGV4ZWN1dGluZyBiZWZvcmUgWEhSIHJldHVybnMgd2l0aCB0aGUgZGF0YVxuICAgIC50aGVuKG5hdmlnYXRpb25CYXIgPT4ge1xuICAgICAgICAvL2xvZyBvdXIgZGIgZm9yIG91ciBwb29yIGRldlxuICAgICAgICBjb25zb2xlLmxvZyhuYXZpZ2F0aW9uQmFyKVxuICAgICAgICAgICAgLy9ncmFiIHRoZSBuYXZpZ2F0aW9uQmFyX19saXN0IGRpdiBmcm9tIGluZGV4Lmh0bWxcbiAgICAgICAgICAgIGNvbnN0IG5hdkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIilcbiAgICAgICAgICAgIC8vY2xlYXIgb3V0IGFueSB1bndhbnRlZCBzdHVmZlxuICAgICAgICAgICAgbmF2RWwuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICAgICAgICAgIC8vIGZvciBlYWNoIGtleSBpbiBuYXZpZ2F0aW9uQmFyLCBwcmludCBpbm5lckhUTUxcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uQmFyLmZvckVhY2goY3VycmVudE5hdiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5hdkVsLmlubmVySFRNTCArPSBgXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWl0ZW0gbmF2LWxpbmtcIiBocmVmPVwiJHtjdXJyZW50TmF2Lmxpbmt9XCI+JHtjdXJyZW50TmF2Lm5hbWV9PC9hPlxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH1cbi8vZXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBuYXZpZ2F0aW9uQmFyRE9NIiwiLy8gQXV0aG9yOiBKb2huIER1bGFuZXlcbi8vIFB1cnBvc2U6IFRoaXMgbW9kdWxlIGdyYWJzIHByb2plY3RzIHBvc3RzIGFuZCBwcmludHMgdGhlbSB0byB0aGUgRE9NXG4vLyDilIwowrAgzZzKls2hwrAp4pSYXG5cbi8vc2V0IGludG8gYSBmdW5jdGlvbiBmb3Igc2NvcGUsIGFqYXggcmVxdWVzdCB0aGUgZGF0YWJhc2UgZm9yIHByb2plY3RzXG5jb25zdCBwcm9qZWN0c0RPTSA9ICgpID0+IHskLmFqYXgoe3VybDogXCJodHRwczovL3BlcnNvbmFsLXNpdGUtZmZiOWMuZmlyZWJhc2Vpby5jb20vbXlQcm9qZWN0cy5qc29uXCJ9KVxuICAgIC8vYXNzaWduIC50aGVuIHRvIGhhbHQgSlMgZnJvbSBleGVjdXRpbmcgYmVmb3JlIFhIUiByZXR1cm5zIHdpdGggdGhlIGRhdGFcbiAgICAudGhlbihwcm9qZWN0cyA9PiB7XG4gICAgICAgIC8vbG9nIG91ciBkYiBmb3Igb3VyIHBvb3IgZGV2XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzKVxuICAgICAgICAgICAgLy9ncmFiIHRoZSBwcm9qZWN0c19fbGlzdCBkaXYgZnJvbSBpbmRleC5odG1sXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0c0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RzX19saXN0XCIpWzBdXG4gICAgICAgICAgICAvL2NsZWFyIG91dCBhbnkgdW53YW50ZWQgc3R1ZmZcbiAgICAgICAgICAgIHByb2plY3RzRWwuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICAgICAgICAgIC8vIGZvciBlYWNoIGtleSBpbiBwcm9qZWN0cywgcHJpbnQgaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNFbC5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBpZD1cInRleHQtYmxvY2tcIiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+JHtwcm9qZWN0Lm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTAgYWxpZ24tc2VsZi1jZW50ZXIgY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGEgaHJlZj1cIiR7cHJvamVjdC51cmx9XCI+PGltZyBzcmM9XCIuLi9pbWFnZXMvZ2l0aHViLnBuZ1wiIGFsdD1cIlwiIHdpZHRoPVwiNjRweFwiIGhlaWdodD1cIjY0cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGluayB0byB0aGUgUHJvamVjdDwvYT48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGF0ZSBjb21wbGV0ZWQ6ICR7cHJvamVjdC5kYXRlQ29tcGxldGVkfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UZWNobm9sb2d5IHVzZWQ6ICR7cHJvamVjdC50ZWNoVXNlZH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGVhbW1hdGVzIGludm9sdmVkOiAke3Byb2plY3QudGVhbW1hdGVzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3Byb2plY3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG4vL2V4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gcHJvamVjdHNET00iLCIvLyBBdXRob3I6IEpvaG4gRHVsYW5leVxuLy8gUHVycG9zZTogVGhpcyBtb2R1bGUgZ3JhYnMgcmVzdW1lIHBvc3RzIGFuZCBwcmludHMgdGhlbSB0byB0aGUgRE9NXG4vLyDilIwowrAgzZzKls2hwrAp4pSYXG5cbi8vc2V0IGludG8gYSBmdW5jdGlvbiBmb3Igc2NvcGUsIGFqYXggcmVxdWVzdCB0aGUgZGF0YWJhc2UgZm9yIHJlc3VtZVxuY29uc3QgcmVzdW1lRE9NID0gKCkgPT4geyQuYWpheCh7dXJsOiBcImh0dHBzOi8vcGVyc29uYWwtc2l0ZS1mZmI5Yy5maXJlYmFzZWlvLmNvbS9yZXN1bWUuanNvblwifSlcbi8vYXNzaWduIC50aGVuIHRvIGhhbHQgSlMgZnJvbSBleGVjdXRpbmcgYmVmb3JlIFhIUiByZXR1cm5zIHdpdGggdGhlIGRhdGFcbiAgICAudGhlbihyZXN1bWUgPT4ge1xuICAgICAgICAvL2xvZyBvdXIgZGIgZm9yIG91ciBwb29yIGRldlxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bWUpXG4gICAgICAgICAgICAvL2dyYWIgdGhlIHJlc3VtZV9fbGlzdCBkaXYgZnJvbSBpbmRleC5odG1sXG4gICAgICAgICAgICBjb25zdCByZXN1bWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJyZXN1bWVfX2xpc3RcIilbMF1cbiAgICAgICAgICAgIC8vY2xlYXIgb3V0IGFueSB1bndhbnRlZCBzdHVmZlxuICAgICAgICAgICAgcmVzdW1lRWwuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICAgICAgICAgIC8vIGZvciBlYWNoIGtleSBpbiByZXN1bWUsIHByaW50IGlubmVySFRNTFxuICAgICAgICAgICAgICAgIHJlc3VtZS5mb3JFYWNoKGpvYnMgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXN1bWVFbC5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEwIGFsaWduLXNlbGYtY2VudGVyIGNvbnRhaW5lclwiIGlkPVwidGV4dC1ibG9ja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPiR7am9icy50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7am9icy5jb21wYW55fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke2pvYnMuZGF0ZXN9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7am9icy5yZXNwb25zaWJpbGl0aWVzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuLy9leHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHJlc3VtZURPTSJdfQ==
