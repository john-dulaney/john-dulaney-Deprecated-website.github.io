

const $ = require("jquery")

// Get the modal
// const modal = document.getElementById('logModal');

// When the user clicks anywhere outside of the modal, close it
const modal = () => $(document).on("click", e => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})


module.exports = modal



// const deleteButton = () => $(document).on("click", e => {
//     if (e.target.id && e.target.id.includes("delete_")){
//     const pid = e.target.id.split("_")[1]

//         $.ajax({
//             url: `https://personal-site-ffb9c.firebaseio.com/myBlog/${pid}`,
//             method: "DELETE"
//         }).then(
//             //repopulate the DOM
//         )
//     }
// })

// module.exports = deleteButton