{
console.log("cells within cells interlinked, interlinked")
// Free code from NSS Instructor Steve Thanks!
    // Get the database from local storage, or empty object if null
    const blogs = JSON.parse(
        localStorage.getItem("blogs")
    ) || {}

    // Create `myBlog` key if it doesn't exist
    blogs.myBlog = blogs.myBlog || []

    // Sort the myBlog by their `id` property, descending
    // blogs.myBlog.sort((p, n) => {return n.id - p.id})

    // Generator function definition
    const idGenerator = function* (from) {
        let id = 1
        while (true) {
            yield from + id
            id++
        }
    }

    const lastId = blogs.myBlog[0] || { id: 0 }
    const articleUUIDGen = idGenerator(lastId.id)

    // Factory function for new myBlog
    const articleFactory = function (title, date, tags, author, content) {
        return Object.create(null, {
            "id": {
                value: articleUUIDGen.next().value,
                enumerable: true
            },
            "title": {
                value: title,
                enumerable: true
            },
            "date": {
                value: date,
                enumerable: true
            },
            "tags": {
                value: tags,
                enumerable: true
            },
            "author": {
                value: author,
                enumerable: true
            },
            "content": {
                value: content,
                enumerable: true
        }   
    })

    
}


// Add click event listener to the save button
const saveButtonEl = document.getElementById("articleForm__saveButton")
    .addEventListener("click", event => {

        // Create a new article object
        const newArticle = articleFactory(
            document.querySelector("input[name='articleForm__title']").value,
            document.querySelector("input[name='articleForm__date']").value,
            document.querySelector("input[name='articleForm__tags']").value,
            document.querySelector("input[name='articleForm__author']").value,
            document.querySelector("textarea[name='articleForm__body']").value,
        )
        
        // Add new article to array
        blogs.myBlog.push(newArticle)
        
        // Serialize and store database
        // store information into our local DB
        localStorage.setItem("blogs", JSON.stringify(blogs))
        document.forms["blog--form"].reset();
    })
    
    
}  
