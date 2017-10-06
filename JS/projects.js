
// name, date completed, technologies used, teammates (if applicable).

let projOneObject = {
    "name": 'Website',
    "date completed": 'None',
    "technologies used": 'HTML, JS, CSS',
    "teammates": 'None',
  }

  let projTwoObject = {
    "name": 'Class Work',
    "date completed": 'None',
    "technologies used": 'HTML, JS, CSS',
    "teammates": 'None',
  }

  let projThreeObject = {
    "name": 'Capstone',
    "date completed": 'None',
    "technologies used": 'Everything',
    "teammates": 'None',
  }


// Vague attempt(s) to store it
  const projOneString = JSON.stringify(projOneObject)
  localStorage.setItem("The Fresh Market", projOneString)

  const projTwoString = JSON.stringify(projTwoObject)
  localStorage.setItem("United States Army", projTwoString)

  const projThreeString = JSON.stringify(projThreeObject)
  localStorage.setItem("Unemployed", projThreeString)