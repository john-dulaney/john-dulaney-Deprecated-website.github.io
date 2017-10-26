
  let buttonOne= {
    "id": '1',
    "onclick": 'pageJump(1)', 
    "value": '1',   
  }

  let buttonTwo= {
    "id": '2',
    "onclick": 'pageJump(2)', 
    "value": '2',   
  }

  let buttonThree= {
    "id": '3',
    "onclick": 'pageJump(3)', 
    "value": '3',   
  }

  let buttonFour= {
    "id": '4',
    "onclick": 'pageJump(4)', 
    "value": '4',   
  }

  let buttonFive= {
    "id": '5',
    "onclick": 'pageJump(5)', 
    "value": '5',   
  }



let myButton = [buttonOne, buttonTwo, buttonThree, buttonFour, buttonFive] 

let buttondb = {
  "myButton": myButton,
}
const buttonString = JSON.stringify(buttondb)
localStorage.setItem("Buttons", buttonString)