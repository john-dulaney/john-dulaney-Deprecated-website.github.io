
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

  let eighteenOct2017 = {
    "title": 'Hump day 3',
    "date": 'Wednesday October 18, 2017',    
    "tags": 'okay',
    "author": 'John Dulaney',
    "content": 'Long time no post. Spent last week working with 2 different groups on 2 different websites. I learned quite alot, especially that I need to catch up to some people in terms of JS knowledge. Some people I worked with had outstanding knowledge and they should be proud of their current progress. No basketball tonight, but I for sure am going for a long push, 6 mile route, game chair?'
  }


let myBlog = [eighteenOct2017, elevenOct2017, tenOct2017, nineOct2017, sixOct2017, fiveOct2017, fourOct2017] 

let blogsdb = {
  "myBlog": myBlog,
}
const blogsString = JSON.stringify(blogsdb)
localStorage.setItem("blogs", blogsString)
