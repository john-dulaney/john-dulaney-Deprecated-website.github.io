
// name, date completed, techUsed, teammates (if applicable).

let projOneObject = {
    "name": 'Website',
    "dateCompleted": 'None',
    "techUsed": 'HTML, JS, CSS',
    "teammates": 'None',
  }

  let projTwoObject = {
    "name": 'Class Work',
    "dateCompleted": 'None',
    "techUsed": 'HTML, JS, CSS',
    "teammates": 'None',
  } 

  let projThreeObject = {
    "name": 'Capstone',
    "dateCompleted": 'None',
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