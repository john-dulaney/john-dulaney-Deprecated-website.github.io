    
//     const blogDOM = () => {$.ajax({url: "https://personal-site-ffb9c.firebaseio.com/myBlog.json"})
//         .then(blogs => {
//             console.log(blogs)
//                 const blogEl = document.getElementsByClassName("blog__list")[0]
//                 blogEl.innerHTML = ""
//                     blogs.forEach(b => {
//                         // debugger
//                         blogEl.innerHTML += `
//                         <article id=${b.id}>
//                             <h2><strong>${b.title}</strong></h2>
//                                 <li id="text-block" class="col-10 align-self-center container">
//                                 <div>${b.date}</div>
//                                 <div>${b.tags}</div>
//                                 <div>${b.author}</div>
//                                     <hr>
//                                 <div>${b.content}</div>
//                                 </li>
//                         <br>
//                         </article>
//                         `
//                     })
//                 }
//             )
//         }
// //exports
// module.exports = blogDOM