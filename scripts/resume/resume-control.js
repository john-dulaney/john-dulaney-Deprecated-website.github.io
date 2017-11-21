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