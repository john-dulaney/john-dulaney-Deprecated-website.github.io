// P O P U L A T E

//PAULS WAY
// const storedProjects = JSON.parse(localStorage.getItem("Projects"));
// const projectsEl = document.getElementsByClassName("Projects");
// //loop through nav array
// for (let i = 0; i < storedProjects.length; i++) {
//     let currentProjects = storedProjects[i];


// ORIGINAL
const storedProjects = JSON.parse(localStorage.getItem("projects"))
const projectsEl = document.getElementsByClassName("projects")[0]

for (var key in storedProjects) {
        const currentProjects = storedProjects[key];
        for (var i = 0; i < currentProjects.length; i++) {
            var detail = currentProjects[i];
            


projectsEl.innerHTML += `
    <section class="${key}">
    <div class="container" id="text-block">
        <h1>${detail.name}</h1>
            <p>${detail.dateCompleted}</p>
            <p>${detail.techUsed}</p>
            <p>${detail.teammates}</p>
                
     </div>
                `

}
}
