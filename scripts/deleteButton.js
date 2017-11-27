// Author: John Dulaney
// Purpose: This module creates a delete button that deletes both on the DOM and in Firebase. Work in Progress.
// ┌(° ͜ʖ͡°)┘  
  
const deleteButton = () => $(document).on("click", e => {
    if (e.target.id && e.target.id.includes("delete_")){
    const pid = e.target.id.split("_")[1]

        $.ajax({
            url: `https://personal-site-ffb9c.firebaseio.com/myBlog/${pid}`,
            method: "DELETE"
        }).then(
            //repopulate the DOM
        )
    }
})

module.exports = deleteButton