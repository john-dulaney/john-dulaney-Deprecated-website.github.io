
$(document).on("click", e => {
    if (e.target.id && e.target.id.includes("delete_")){
    const pid = e.target.id.split("_")[1]

        $.ajax({
            url: `https://personal-site-ffb9c.firebaseio.com/myBlog/${pid}`,
            method: "DELETE"
        }).then(repopDOM())
    }
})