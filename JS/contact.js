// Contact database
let githubObject = {
    "name": 'github',
    "username": 'odn86',
    "url": 'github.com/odn86/odn86.github.io',
    "icon": '../images/github.png',
  }

  let gmailObject = {
    "name": 'gmail',
    "username": 'John',
    "url": 'john.s.dulaney1@gmail.com',
    "icon": '../images/gmail.svg',
  }


// Vague attempt(s) to store it
  const githubString = JSON.stringify(githubObject)
  localStorage.setItem("Github", githubString)

  const gmailString = JSON.stringify(gmailObject)
  localStorage.setItem("gmail", gmailString)