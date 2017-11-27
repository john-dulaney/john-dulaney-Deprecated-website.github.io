// Author: John Dulaney
// Purpose: This module grabs my bio and prints it to the DOM
// ┌(° ͜ʖ͡°)┘  
// Free code from NSS Instructor Steve Thanks! 

// imports
const idGenerator = require("../idGenerator")

const adminBlogForm = () => {$.ajax({url: "https://personal-site-ffb9c.firebaseio.com/myBlog.json"})
    const lastId = blogs.myBlog[0] || { id: 0 }
    const articleUUIDGen = idGenerator(lastId.id)
    // Add click event listener to the save button
    const saveButtonEl = document.getElementById("articleForm__saveButton")
        .addEventListener("click", event => {
            // Create a new article object
            const newArticle = articleFactory(
                document.querySelector("input[name='articleForm__title']").value,
                document.querySelector("input[name='articleForm__date']").value,
                document.querySelector("input[name='articleForm__tags']").value,
                document.querySelector("input[name='articleForm__author']").value,
                document.querySelector("textarea[name='articleForm__body']").value
            )
            // Serialize and store database
            
            document.forms["blog--form"].reset();
        })
    }
