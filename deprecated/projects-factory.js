
// name, date completed, techUsed, teammates (if applicable).

let projOneObject = {
    "name": 'Website',
    "url":'https://github.com/odn86/odn86.github.io',
    "description":'This website you are currently on is one of my starting projects at Nashville Software School. It will continue to grow as my knowledge of programming expands. I intend to keep this bad boy updated.',
    "dateCompleted": 'Working on it',
    "techUsed": 'HTML, JS, CSS',
    "teammates": 'None',
  }

  let projTwoObject = {
    "name": 'Class Work',
    "url":'https://github.com/odn86/exercises',
    "description":'These are a few exercises assigned by NSS instructors to help use practice certain skills. Paired with the team oriented website building practice, I am developing a great working knowledge of the industry.',
    "dateCompleted": 'Working on it',
    "techUsed": 'HTML, JS, CSS',
    "teammates": 'None',
  } 

  let projThreeObject = {
    "name": 'Capstone',
    "url":'',
    "description":'We are 100% on the demands of this project yet, but we have seen our sister cohorts examples. Something along the lines of our own Application! Sounds fun.',
    "dateCompleted": 'Have not begun',
    "techUsed": 'Everything',
    "teammates": 'None',
  }

const projectsArray = [projOneObject, projTwoObject, projThreeObject];


let projectsdb = {
  "projects": projectsArray,
}

//create array of objects into projects
// projects.push(O B J E C T S);

//pushing to local storage
const projectstring = JSON.stringify(projectsdb);
localStorage.setItem("projects", projectstring);


