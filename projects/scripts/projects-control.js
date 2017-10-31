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
    <h2>${detail.title}</h2>
        <div class="col-10 align-self-center container">
        
            <p><a href="${detail.link}"><img src="../images/github.png" alt="" width="64px" height="64px">
                Link to the Project</a></p>
            <p>Date completed: ${detail.date}</p>
            <p>Technology used: ${detail.tech}</p>
            <p>Teammates involved: ${detail.team}</p>
            <p>${detail.content}</p>
                
        </div>
     </section>
                `

}
}
