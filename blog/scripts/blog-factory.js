
//The first step is to design what each object's properties should be -
//title, date of publication, tags, author, and content


let fourOct2017 = {
  "id": "",
  "title": 'Hump Day',
  "date": 'Wednesday October 4, 2017',    
  "tags": 'rough',
  "author": 'John Dulaney',
  "content": 'Chicharrones single-origin coffee wolf, farm-to-table yuccie pitchfork viral vinyl deep v man braid roof party literally vape pinterest. Pok pok kale chips chambray freegan 3 wolf moon man braid bicycle rights ennui whatever artisan disrupt pickled readymade. Taiyaki venmo normcore, slow-carb tilde irony tofu polaroid forage. Flannel tbh stumptown put a bird on it pour-over fixie bespoke jean shorts fanny pack hell of affogato blue bottle intelligentsia. '
}

let fiveOct2017 = {
  "id": "",
  "title": 'Almost There',
  "date": 'Thursday October 5, 2017',    
  "tags": 'fun',
  "author": 'John Dulaney',
  "content": 'Chicharrones single-origin coffee wolf, farm-to-table yuccie pitchfork viral vinyl deep v man braid roof party literally vape pinterest. Pok pok kale chips chambray freegan 3 wolf moon man braid bicycle rights ennui whatever artisan disrupt pickled readymade. Taiyaki venmo normcore, slow-carb tilde irony tofu polaroid forage. Flannel tbh stumptown put a bird on it pour-over fixie bespoke jean shorts fanny pack hell of affogato blue bottle intelligentsia. '
}

let sixOct2017 = {
  "id": "",
  "title": 'We Made It!!!!',
  "date": 'Friday October 6, 2017',    
  "tags": 'okay',
  "author": 'John Dulaney',
  "content": 'Chicharrones single-origin coffee wolf, farm-to-table yuccie pitchfork viral vinyl deep v man braid roof party literally vape pinterest. Pok pok kale chips chambray freegan 3 wolf moon man braid bicycle rights ennui whatever artisan disrupt pickled readymade. Taiyaki venmo normcore, slow-carb tilde irony tofu polaroid forage. Flannel tbh stumptown put a bird on it pour-over fixie bespoke jean shorts fanny pack hell of affogato blue bottle intelligentsia. '
}

let nineOct2017 = {
  "id": "",
  "title": "Looks like someone's got a case of the mondays",
  "date": 'Monday October 9, 2017',    
  "tags": 'rough',
  "author": 'John Dulaney',
  "content": 'CSS Selector practice with a side of tears. WHY ISNT IT CHANGING COLOR!??!'
}

let tenOct2017 = {
  "id": "",
  "title": 'Tuesdays baby.',
  "date": 'Tuesday October 10, 2017',    
  "tags": 'fun',
  "author": 'John Dulaney',
  "content": 'Tuesdays are fun. Finally did an exercise right!!'
}

let elevenOct2017 = {
  "id": "",
  "title": 'Hump day 2',
  "date": 'Wednesday October 11, 2017',    
  "tags": 'okay',
  "author": 'John Dulaney',
  "content": 'Wheelchair Basketball tonight, very tired!'
}

let eighteenOct2017 = {
  "id": "",
  "title": 'Hump day 3',
  "date": 'Wednesday October 18, 2017',    
  "tags": 'okay',
  "author": 'John Dulaney',
  "content": 'Long time no post. Spent last week working with 2 different groups on 2 different websites. I learned quite alot, especially that I need to catch up to some people in terms of JS knowledge. Some people I worked with had outstanding knowledge and they should be proud of their current progress. No basketball tonight, but I for sure am going for a long push, 6 mile route, game chair?'
}


let nineteenOct2017 = {
  "id": "",
  "title": 'Pagination Nation',
  "date": 'Thursday October 19, 2017',    
  "tags": 'Success!',
  "author": 'John Dulaney',
  "content": "Today we tackled Some pretty crazy Javascript. We hit generator functions as well as the Steve way of making a paginator, which is pretty insane. It's crazy the amount of work and code it takes to make some stupid buttons iterate through pages of conent, grey out at the right times, as well as do this all with buttons. I learned alot, but pulled most my code from a previous project. I'm not where I need to be ijn this class yet."
}

let twentyOct2017 = {
  "id": "",
  "title": 'Reindeer Games',
  "date": 'Friday October 20, 2017',    
  "tags": 'tired, Ben Affleck',
  "author": 'John Dulaney',
  "content": "Stayed up till 1 am last night working on some exercises. Would have been in bed at 9:30 if Steve hadnt have slacked me about my incomplete exercises. I'm still afraid I'm not picking this stuff up as quick as some of my peers. Reindeer Exercise looming and I dont know where to start. Bright side is I knocked out some CSS ex in like an hour. Very tired, ready for the weekend!"
}

let twentyFourOct2017 = {
  "id": "",
  "title": 'Piles upon Piles',
  "date": 'Tuesday October 24, 2017',    
  "tags": 'Wew',
  "author": 'John Dulaney',
  "content": "Would have written yesterday but wayyyyy too much work. The worst part is knowing that you spend 30-40 minutes just getting a line or two completed rather than pages of working code. Really spinning my wheels on quite a few concepts. It's all on me as far as practice and attention to detail go i guess. Primus concert tonight, so tired and full of back pain might not go."
  }

let twentyFiveOct2017 = {
  "id": "",
  "title": "Hump Day 4",
  "date": "Wednesday October 25, 2017",    
  "tags": "Back pain, Pop Tarts",
  "author": "John Dulaney",
  "content": "Last week of the month. Steve still throwing knowledge at us like a mad man. Immense Back pain from sitting upright and still all day. I want to lay on a couch and code. Basketball practice tonight, I'm going. I took 7 years off to rest and jack around, I have the energy. Need the workout anyway."
  }
// let Oct2017 = {
  // "id": "",
//   "title": "",
//   "date": "x October x, 2017",    
//   "tags": "",
//   "author": "John Dulaney",
//   "content": ""
// }


let myBlog = [twentyFiveOct2017, twentyFourOct2017, twentyOct2017, nineteenOct2017, eighteenOct2017, elevenOct2017, tenOct2017, nineOct2017, sixOct2017, fiveOct2017, fourOct2017] 

let blogsdb = { 
  "myBlog": myBlog,
}

const blogsString = JSON.stringify(blogsdb)
localStorage.setItem("blogs", blogsString)




// //create blank nav bar array
// const myBlog = [];

// //create array of objects into myBlog
// myBlog.push(twentyFiveOct2017, twentyFourOct2017, twentyOct2017, nineteenOct2017, eighteenOct2017, elevenOct2017, tenOct2017, nineOct2017, sixOct2017, fiveOct2017, fourOct2017);

// const blogsString = JSON.stringify(myBlog)
// localStorage.setItem("blogs", blogsString)

















