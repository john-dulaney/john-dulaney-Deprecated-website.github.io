// Contact database
let githubObject = {
    "name": 'Github',
    "username": 'odn86',
    "url": 'https://github.com/odn86/odn86.github.io',
    "icon": '../images/github.png',
  }

  let gmailObject = {
    "name": 'Gmail',
    "username": 'John',
    "url": 'mailto:john.s.dulaney1@gmail.com',
    "icon": '../images/gmail.svg',
  }
 


  //create blank nav bar array
const contacts = [gmailObject, githubObject];


let contactsdb = {
  "contact": contacts,
}

//create array of objects into contact
// contacts.push(gmailObject, githubObject);

//pushing to local storage
const contactString = JSON.stringify(contactsdb);
localStorage.setItem("Contact", contactString);