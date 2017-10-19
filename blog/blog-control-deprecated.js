//I BROKE THIS WHOLE THING WITH PAGINATE 
//MODULAR JS WHEN?

 //P O P U L A T E

 const blogs = JSON.parse(localStorage.getItem("blogs"))
 const blogEl = document.getElementsByClassName("blogs")[0]
 
 for (var key in blogs) {
     // if (homeInventory.hasOwnProperty(key)) {
         const currentBlog = blogs[key];
         for (var i = 0; i < currentBlog.length; i++) {
             var detail = currentBlog[i];
             
 
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
             
             `    
         }
 }        
 
 
 
 
//  <section id="text-block" class="${key} col-10 align-self-center container">
//              <h2><strong>${detail.title}</strong></h2>
//              <div>${detail.date}</div>
//              <div>${detail.tags}</div>
//              <div>${detail.author}</div>
//              <hr>
//              <div>${detail.content}</div>
//          </section>
//          <br>