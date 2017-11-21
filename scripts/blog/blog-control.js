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