//I BROKE THIS WHOLE THING WITH PAGINATE 
//MODULAR JS WHEN?

 //P O P U L A T E

 const buttons = JSON.parse(localStorage.getItem("Buttons"))
 const buttonEl = document.getElementsByClassName("buttons")[0]
 
//Wrapper for the iterated buttons
let paginationString = `<input type="button" class="buttstyle" id="previous" onclick="previousPage()" value="&lt" />` 
buttonEl.innerHTML +=  paginationString

for (var key in buttons) {
     // if (homeInventory.hasOwnProperty(key)) {
         const currentButtons = buttons[key];
          for (var i = 0; i < currentButtons.length; i++) {
             var detail = currentButtons[i];
             buttonEl.innerHTML +=  `
             <input type="button" class ="paginatorPageNumber buttstyle" id="${detail.id}" onclick="${detail.onclick}" value="${detail.value}" />
             `    
         }
 }
 buttonEl.innerHTML += `<input type="button" class="buttstyle" id="next" onclick="nextPage()" value="&gt" />`
 


 