
//The first step is to design what each object's properties should be -
//title, date of publication, tags, author, and content


let fourOct2017 = {
    "title": 'Hump Day',
    "date": 'Wednesday October 4, 2017',    
    "tags": 'rough',
    "author": 'John Dulaney',
    "content": 'Chicharrones single-origin coffee wolf, farm-to-table yuccie pitchfork viral vinyl deep v man braid roof party literally vape pinterest. Pok pok kale chips chambray freegan 3 wolf moon man braid bicycle rights ennui whatever artisan disrupt pickled readymade. Taiyaki venmo normcore, slow-carb tilde irony tofu polaroid forage. Flannel tbh stumptown put a bird on it pour-over fixie bespoke jean shorts fanny pack hell of affogato blue bottle intelligentsia. '
  }

  let fiveOct2017 = {
    "title": 'Almost There',
    "date": 'Thursday October 5, 2017',    
    "tags": 'fun',
    "author": 'John Dulaney',
    "content": 'Chicharrones single-origin coffee wolf, farm-to-table yuccie pitchfork viral vinyl deep v man braid roof party literally vape pinterest. Pok pok kale chips chambray freegan 3 wolf moon man braid bicycle rights ennui whatever artisan disrupt pickled readymade. Taiyaki venmo normcore, slow-carb tilde irony tofu polaroid forage. Flannel tbh stumptown put a bird on it pour-over fixie bespoke jean shorts fanny pack hell of affogato blue bottle intelligentsia. '
  }

  let sixOct2017 = {
    "title": 'We Made It!!!!',
    "date": 'Friday October 6, 2017',    
    "tags": 'okay',
    "author": 'John Dulaney',
    "content": 'Chicharrones single-origin coffee wolf, farm-to-table yuccie pitchfork viral vinyl deep v man braid roof party literally vape pinterest. Pok pok kale chips chambray freegan 3 wolf moon man braid bicycle rights ennui whatever artisan disrupt pickled readymade. Taiyaki venmo normcore, slow-carb tilde irony tofu polaroid forage. Flannel tbh stumptown put a bird on it pour-over fixie bespoke jean shorts fanny pack hell of affogato blue bottle intelligentsia. '
  }

  let nineOct2017 = {
    "title": "Looks like someone's got a case of the mondays",
    "date": 'Monday October 9, 2017',    
    "tags": 'rough',
    "author": 'John Dulaney',
    "content": 'CSS Selector practice with a side of tears. WHY ISNT IT CHANGING COLOR!??!'
  }

  let tenOct2017 = {
    "title": 'Tuesdays baby.',
    "date": 'Tuesday October 10, 2017',    
    "tags": 'fun',
    "author": 'John Dulaney',
    "content": 'Tuesdays are fun. Finally did an exercise right!!'
  }

  let elevenOct2017 = {
    "title": 'Hump day 2',
    "date": 'Wednesday October 11, 2017',    
    "tags": 'okay',
    "author": 'John Dulaney',
    "content": 'Wheelchair Basketball tonight, very tired!'
  }



let rough = [fourOct2017, nineOct2017]
let okay = [sixOct2017, elevenOct2017]
let fun =[fiveOct2017, tenOct2017]

let blogsdb = {
  "rough": rough,
  "okay": okay,
  "fun": fun
}

const blogsString = JSON.stringify(blogsdb)
localStorage.setItem("blogs", blogsString)

 //P O P U L A T E

 const blogs = JSON.parse(localStorage.getItem("blogs"))
 const blogEl = document.getElementsByClassName("blogs")[0]
 
 for (var key in blogs) {
     // if (homeInventory.hasOwnProperty(key)) {
         const currentBlog = blogs[key];
         for (var i = 0; i < currentBlog.length; i++) {
             var detail = currentBlog[i];
             
 
             blogEl.innerHTML += `
         <section class="${key}">
             <h2><strong>${detail.title}</strong></h2>
             <div>${detail.date}</div>
             <div>${detail.tags}</div>
             <div>${detail.author}</div>
             <div>${detail.content}</div>
         </section>
         <br>
             
             `    
         }
 }