
//The first step is to design what each object's properties should be -
//title, date of publication, tags, author, and content


let postOneObject = {
    "Title": 'Hump Day',
    "Publication date": 'Wednesday October 4, 2017',    
    "Tags": 'n/a',
    "Author": 'John Dulaney',
    "Content": 'the same thing'
  }

  let postTwoObject = {
    "Title": 'Almost There',
    "Publication date": 'Thursday October 5, 2017',    
    "Tags": 'n/a',
    "Author": 'John Dulaney',
    "Content": 'the same thing'
  }

  let postThreeObject = {
    "Title": 'We Made It!!!!',
    "Publication date": 'Friday October 6, 2017',    
    "Tags": 'n/a',
    "Author": 'John Dulaney',
    "Content": 'the smae thing'
  }


// Vague attempt(s) to store it
  const postOneString = JSON.stringify(postOneObject)
  localStorage.setItem("Hump Day", postOneString)

  const postTwoString = JSON.stringify(postTwoObject)
  localStorage.setItem("Almost There", postTwoString)

  const postThreeString = JSON.stringify(postThreeObject)
  localStorage.setItem("We Made It!!!!", postThreeString)