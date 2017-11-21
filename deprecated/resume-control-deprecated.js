// P O P U L A T E

//PAULS WAY
// const storedjobs = JSON.parse(localStorage.getItem("jobs"));
// const jobsEl = document.getElementsByClassName("jobs");
// //loop through nav array
// for (let i = 0; i < storedjobs.length; i++) {
//     let currentjobs = storedjobs[i];


// ORIGINAL
const storedjobs = JSON.parse(localStorage.getItem("jobs"))
const jobsEl = document.getElementsByClassName("jobs")[0]

for (var key in storedjobs) {
        const currentjobs = storedjobs[key];
        for (var i = 0; i < currentjobs.length; i++) {
            var detail = currentjobs[i];
            


jobsEl.innerHTML += `
    <section class="${key}">
    <div class="col-10 align-self-center container" id="text-block">
        <h1>${detail.title}</h1>
            <p>${detail.company}</p>
            <p>${detail.dates}</p>
            <p>${detail.responsibilities}</p>
                
     </div>
                `

}
}
