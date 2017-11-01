// Are there any articles? If so, add articles to DOM

let blist = (JSON.parse(localStorage.getItem("blogs"))).myBlog
blist.sort((p, n) => {return n.id - p.id})

blist.articles = blist.articles || []
if (blist.articles.length) {
    const articleEl = document.getElementById("blog-ul")

    // For displaying single articles
    const updateDOM = (article) => {
        articleEl.innerHTML += `
        <article id=${detail.id}>
            <h2><strong>${detail.title}</strong></h2>
                <li id="text-block" class="col-10 align-self-center container">
                    <div>${detail.date}</div>
                    <div>${detail.tags}</div>
                    <div>${detail.author}</div>
                        <hr>
                    <div>${detail.content}</div>
                </li>
                        <br>
            </article>
        `
    }

    
// Sort the articles by id, descending, and inject into the DOM
// Some sort of function that the Wizard Steve conjured in a cauldron high in a castle in the woods.
    const displayArticles = () => {
        articleEl.innerHTML = ""

        blist.articles
        .forEach(function (article) {
            updateDOM(article)
        })
    }
    // .sort((p, n) => n.id - p.id)

    displayArticles()

    document.querySelector("input[name='search']").addEventblistener(
        "keyup", event => {
            if (event.target.value.length >= 3) {

                // Filter all the things
                const userFilterString = event.target.value.toLowerCase()
                const filteredArticles = blist.articles.filter(
                    article => {
                        return article.title.toLowerCase().includes(userFilterString) ||
                               article.body.toLowerCase().includes(userFilterString)
                    }
                )

                // Clear the DOM first
                articleEl.innerHTML = ""

                // Display only filtered articles
                filteredArticles.forEach( article => updateDOM(article) )
            } else {
                displayArticles()
            }
        }
    )
}