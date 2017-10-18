// WWork History database

//Consider your written resume, and think about 
//what information your provide to describe each job - 
//title, company, dates, responsibilities

let fmObject = {
    "title": 'Produce Clerk',
    "company": 'The Fresh Market',
    "dates": '2006',
    "responsibilities": 'Chop fruit and keep the aisles lookoing good',
  }

  let armyObject = {
    "title": 'Platoon Leader',
    "company": 'Missouri National Guard',
    "dates": '2007-2012',
    "responsibilities": 'Ensure my platoon of 36 men were as lethal as possible and that all the needs of my commanders were met',
  }

  let noJobObject = {
    "title": 'Stay at home son/student',
    "company": 'Home llc',
    "dates": '2012- 2017',
    "responsibilities": 'Keep the house clean and make life easy for elderly parents/recover from broken back/go to school',
  }
 

// Vague attempt(s) to store it
  const fmString = JSON.stringify(fmObject)
  localStorage.setItem("The Fresh Market", fmString)

  const armyString = JSON.stringify(armyObject)
  localStorage.setItem("United States Army", armyString)

  const noJobString = JSON.stringify(noJobObject)
  localStorage.setItem("Unemployed", noJobString)