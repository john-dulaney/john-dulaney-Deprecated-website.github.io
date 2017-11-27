// Author: John Dulaney
// Purpose: This module is intended to be a projects form for admin. this is a work in progress.
// ┌(° ͜ʖ͡°)┘  
  
    console.log("cells within cells interlinked, interlinked")
    // Free code from NSS Instructor Steve Thanks!
        // Get the database from local storage, or empty object if null
        const projects = JSON.parse(
            localStorage.getItem("projects")
        ) || {}
    
        // Create `myProject` key if it doesn't exist
        projects.myProject = projects.myProject || []
    
        // Generator function definition
        const idGenerator = function* (from) {
            let id = 1
            while (true) {
                yield from + id
                id++
            }
        }
    
        const lastId = projects.myProject[0] || { id: 0 }
        const projectUUIDGen = idGenerator(lastId.id)
    
        // Factory function for new myProject
        const projectFactory = function (title, link, date, tech, team, content) {
            return Object.create(null, {
                "id": {
                    value: projectUUIDGen.next().value,
                    enumerable: true
                },
                "title": {
                    value: title,
                    enumerable: true
                },
                "link": {
                    value: link,
                    enumerable: true
                },
                "date": {
                    value: date,
                    enumerable: true
                },
                "tech": {
                    value: tech,
                    enumerable: true
                },
                "team": {
                    value: team,
                    enumerable: true
                },
                "content": {
                    value: content,
                    enumerable: true
            }   
        })
    
        
    }
    
    
    // Add click event listener to the save button
    const saveButtonEl = document.getElementById("projectForm__saveButton")
        .addEventListener("click", event => {
    
            // Create a new project object
            const newProject = projectFactory(
                document.querySelector("input[name='projectForm__title']").value,
                document.querySelector("input[name='projectForm__link']").value,
                document.querySelector("input[name='projectForm__date']").value,
                document.querySelector("input[name='projectForm__tech']").value,
                document.querySelector("input[name='projectForm__team']").value,
                document.querySelector("textarea[name='projectForm__body']").value
            )
    
            // Add new project to array
            projects.myProject.unshift(newProject)
    
            // Serialize and store database
    
            // reverse order our new array. This doesnt work
            // projects.myProject.sort((p, n) => p.id - n.id) 
    
            // store information into our local DB
            localStorage.setItem("projects", JSON.stringify(projects))
            document.forms["project--form"].reset();
            
        })
    
    
    



 