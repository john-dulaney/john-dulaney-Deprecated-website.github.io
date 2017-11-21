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