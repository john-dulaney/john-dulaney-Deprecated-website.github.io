

 //P O P U L A T E

 const blogs = JSON.parse(localStorage.getItem("blogs"))
 const blogEl = document.getElementsByClassName("blogs")[0]
 
 for (var key in blogs) {
     // if (homeInventory.hasOwnProperty(key)) {
         const currentBlog = blogs[key];
         for (var i = 0; i < currentBlog.length; i++) {
             var detail = currentBlog[i];
             
 
             blogEl.innerHTML += `
         <section class="${key} container">
             <h2><strong>${detail.title}</strong></h2>
             <div>${detail.date}</div>
             <div>${detail.tags}</div>
             <div>${detail.author}</div>
             <hr>
             <div>${detail.content}</div>
         </section>
         <br>
             
             `    
         }
 }