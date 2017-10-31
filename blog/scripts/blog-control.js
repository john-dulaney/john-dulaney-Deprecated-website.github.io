//Website way
//brilliant additions to site code added by chris and paul from the Confused Camels. Those guys are great.

let list = (JSON.parse(localStorage.getItem("blogs"))).myBlog
list.sort((p, n) => {return n.id - p.id})
// let list = new Array();
let pageList = [];
let currentPage = 1;
let numberPerPage = 5;
let numberOfPages = 1;
let pageNumberButtons = document.getElementsByClassName("paginatorPageNumber")

//this function loads the initial list on the first page
function load(){
    numberOfPages = getNumberOfPages();
    loadList()
}
// calculate number of pages by dividing the total number of items by the number of items per page
function getNumberOfPages() {
    return Math.ceil(list.length / numberPerPage);
}

// next page will add one to the current page and load that list. nextPage is called on the onclick on the next button in the div with the id "pagination-bar" in blogs.html

function nextPage() {
    currentPage += 1;
    loadList();
}

// previous page will subtract one from the current page and load that list. previousPage is called on the onclick on the previous button in the div with the id "pagination-bar" in blogs.html

function previousPage() {
    currentPage -= 1;
    loadList();
}

// allows user to jump to a particular page number. pageJump is called on the onclick on the page buttons in the div with the id "pagination-bar" in blog.html.
function pageJump(a) {
    currentPage = a
    loadList()
}

// this will calculate which items appear on each page
function loadList() {
    // Enable / disable page button

    for (let index = 0; index < pageNumberButtons.length; index++) {
        if (currentPage == pageNumberButtons[index].value){
            pageNumberButtons[index].disabled = true
        } else {
            pageNumberButtons[index].disabled = false
        } 
    }
    // start point on array is one less than the page number multiplied by 4 (the number of items per page)
    let begin = ((currentPage - 1) * numberPerPage);
    // end point is the beginning point plus 4 (the number of items per page)
    let end = begin + numberPerPage;

    // this will pull the correct 4 items from the array for that page 
    pageList = list.slice(begin, end);
    drawList();  //draws out our data
    check();     //determines the states of the pagination buttons
}

// innerHTML to write to DOM for each page
function drawList() {
    // pageList = pageList.reverse()
    // pageList.sort((n, p) => n.id - p.id)

    document.getElementById("blog-ul").innerHTML = ""
    for (r = 0; r < pageList.length; r++) {
        let detail = pageList[r]
        
        document.getElementById("blog-ul").innerHTML += `
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
}
//this hides the previous button on the first page and next arrow on the last page. 
function check() {
//if current page is equal to 1, then set value of hidden on the previous button to true, if not set it to false
    document.getElementById("next").disabled = currentPage === numberOfPages ? true : false;
 //if current page is the last page, then set the value of hidden on the next button to true, if not, set it to false
    document.getElementById("previous").disabled = currentPage === 1 ? true : false;
}
window.onload = load()




document.getElementById("searchDoc")