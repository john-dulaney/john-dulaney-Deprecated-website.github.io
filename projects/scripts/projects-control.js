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
    <section id="text-block" class="${key} container">
    <h2>This ${detail.name}</h2>
        <div class="col-10 align-self-center container">
        
            <p><a href="${detail.url}">Link to the Project</a></p>
            <p>${detail.description}</p>
            <p>Is it complete? ${detail.dateCompleted}</p>
            <p>Technology used: ${detail.techUsed}</p>
            <p>Teammates involved: ${detail.teammates}</p>
                
        </div>
     </section>
                `

}
}
