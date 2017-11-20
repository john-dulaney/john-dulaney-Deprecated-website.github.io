// Author: Steve Brownlee with some John
// Purpose: Pagination function to be used by other modules that need a paginate feature
// ┌(° ͜ʖ͡°)┘

//Code borrowed from the Warlock Steve. He killed several gnomes to enchant this grimoire.
console.log("pagination")

//set into a function for both scope and utility
const paginate = (items, paginationElClass, outputElClass) => {
    // define how many items will be in the pagination
    const totalItems = items.length
    // define how many items per page will be displayed
    const itemsPerPage = 4
    // divide total amount of items by the amount requested per page (4)
    const numberOfPages = Math.ceil(totalItems / itemsPerPage)
    //these are used to get the unique css selectors of theelements to be paginated, not 100% on how it knows
    const paginationEl = document.querySelector(`.${paginationElClass}`)
    const outputEl = document.querySelector(`.${outputElClass}`)

    // Build the DOM string for the pagination links in the footer
    //begin string as an unordered list
    let paginationString = "<ul>"
    //add to string an anchor tag with a previous arrow
    paginationString += "<a id='previous' href='#'>&lt;</a>"
    //for loop iterating over the number of pages
    for (var i = 0; i < numberOfPages; i++) {
        // add list items, anchor tag with unique class selectors of i+1
        paginationString += ` <li><a class="page page-${i+1}" href="#">${i+1}</a></li>`
    }
    // add another anchor tag with an arrow that displays 'next'
    paginationString += " <a id='next' class='page-2' href='#'>&gt;</a>"
    //ending unordered list tag to keep good semantic html
    paginationString += "</ul>"

    // Update the DOM with the unordered list we just built
    //^^^^ lol 'we'
    paginationEl.innerHTML = paginationString

    // Store references to the next and previous arrows we just added
    // these 2 variables work with the queryselectors at the beginning
    const previousEl = document.getElementById("previous")
    const nextEl = document.getElementById("next")

    /*
        Function that will be invoked each time the user clicks
        on one of the pagination links at the bottom of the page
    */
    function produceArticles (event) {
        // Clear the cheeses first before displaying the new ones
        outputEl.innerHTML = ""

        // Which number did the user click on?

        // Convert DOMTokenList to Array
        const classes = event.target.classList
        const classArray = Array.from(classes)

        // Find the class we want that match pattern "page-n"
        const targetClass = classArray.find(clazz => {
            if (clazz.startsWith("page-")) return clazz
        })

        // Split the class into an array on the dash
        const pageNumberArray = targetClass.split("-")

        // Get the actual page number ["page", "1"]
        const actualPageNumber = pageNumberArray[1]

        // Convert the string into an integer
        const integerPageNumber = parseInt(actualPageNumber)

        const pageNumber = parseInt(
            Array.from(event.target.classList)
            .find(clazz => {
                if (clazz.startsWith("page-")) return clazz
            })
            .split("-")[1]
        )

        // Change the class name of the previous arrow
        if ((pageNumber - 1) === 0) {
            previousEl.style.visibility = "hidden"
        } else {
            previousEl.style.visibility = "visible"
            previousEl.className = `page-${pageNumber - 1}`
        }

        // Change the class name of the next arrow
        if ((pageNumber + 1) > numberOfPages) {
            nextEl.style.visibility = "hidden"
        } else {
            nextEl.style.visibility = "visible"
            nextEl.className = `page-${pageNumber + 1}`
        }

        // Determine which items to display by slicing the array
        const itemsToDisplay = items.slice(
            (pageNumber - 1) * itemsPerPage, 
            pageNumber * itemsPerPage
        )

        // Display a <section> representation of each data object
        for (let i = 0; i < itemsToDisplay.length; i++) {
            let currentCheese = itemsToDisplay[i];
            addArticleToDOM(currentCheese)
        }
    }

    // Get the array of pagination anchor tags we added to the DOM
    const pageLinks = document.getElementsByClassName("page")

    // Add event listeners to each <a> element in the pagination
    for (let j = 0; j < pageLinks.length; j++) {
        let link = pageLinks[j];
        link.addEventListener("click", produceArticles, false);
    }

    produceArticles({
        "target": {
            "classList": ["page-1"]
        }
    })

    previousEl.addEventListener("click", produceArticles)
    nextEl.addEventListener("click", produceArticles)
}

// exports
module.exports = paginate