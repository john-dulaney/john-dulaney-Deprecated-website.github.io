// Author: John Dulaney
// Purpose: This module grabs my bio and prints it to the DOM
// ┌(° ͜ʖ͡°)┘  
  
const splashDOM = () => {$.ajax({url: "https://personal-site-ffb9c.firebaseio.com/splash.json"})
    .then(splashPop => {
        console.log("splash bio", splashPop)
            const splashEl = document.getElementsByClassName("splash")[0]
            splashEl.innerHTML = ""
                splashPop.forEach(splash => {
                    splashEl.innerHTML += `
                    <article id="bio" class="class="col-10 align-self-center container">
                            <div id="text-block" class="${splash.id} col-10 align-self-center container">
                            <p>${splash.content}</p>
                    <br>
                    </article>
                    `
                })
            }
        )
    }
//exports
module.exports = splashDOM