
//  const blogs = JSON.parse(localStorage.getItem("blogs"))
 const blogEl = document.getElementsByClassName("blogs")[0]
 
//  for (var key in blogs) {
//      // if (homeInventory.hasOwnProperty(key)) {
//          const currentBlog = blogs[key];
//          for (var i = 0; i < currentBlog.length; i++) {
//              var detail = currentBlog[i];

             blogEl.innerHTML += `
             <div class="page"  id="pagination-bar">
             <input type="button" class="buttstyle" id="previous" onclick="previousPage()" value="previous" />
             <input type="button" class ="paginatorPageNumber buttstyle" id="1" onclick="pageJump(1)" value="1" />
             <input type="button" class ="paginatorPageNumber buttstyle" id="2" onclick="pageJump(2)" value="2" />
             <input type="button" class ="paginatorPageNumber buttstyle" id="3" onclick="pageJump(3)" value="3" />
             <input type="button" class ="paginatorPageNumber buttstyle" id="4" onclick="pageJump(4)" value="4" />
             <input type="button" class ="paginatorPageNumber buttstyle" id="5" onclick="pageJump(5)" value="5" />
             <input type="button" class="buttstyle" id="next" onclick="nextPage()" value="next" />
            </div>