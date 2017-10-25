//created nav bar object
const home = {
    'name' : 'Home',
    'link' : "../index.html"
}

const resume = {
    'name' : 'Resume',
    'link' : "../resume/index.html"
}

const blog = {
    'name' : 'Blog',
    'link' : "../blog/index.html"
}

const contact = {
    'name' : 'Contact',
    'link' : "../contact/index.html"
}

const projects = {
    'name' : 'Projects',
    'link' : "../projects/index.html"
}

//create blank nav bar array
const navBar = [];

//create array of objects into navBar
navBar.push(home, resume, projects, blog, contact);

//pushing to local storage
const navBarString = JSON.stringify(navBar);
localStorage.setItem("navBarTastic", navBarString);