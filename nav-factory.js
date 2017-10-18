//created nav bar object
const home = {
    'name' : 'Home',
    'link' : "../index.html"
}

const resume = {
    'name' : 'Resume',
    'link' : "../resume/resume.html"
}

const blog = {
    'name' : 'Blog',
    'link' : "../blog/blog.html"
}

const contact = {
    'name' : 'Contact',
    'link' : "../contact/contact.html"
}

const projects = {
    'name' : 'Projects',
    'link' : "../projects/projects.html"
}

//create blank nav bar array
const navBar = [];

//create array of objects into navBar
navBar.push(home, resume, projects, blog, contact);

//pushing to local storage
const navBarString = JSON.stringify(navBar);
localStorage.setItem("navBarTastic", navBarString);