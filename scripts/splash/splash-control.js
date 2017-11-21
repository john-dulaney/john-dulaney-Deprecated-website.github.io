    
const splashDOM = () => {$.ajax({url: "https://personal-site-ffb9c.firebaseio.com/splash.json"})
    .then(splashPop => {
        console.log("splash bio", splashPop)
            const splashEl = document.getElementsByClassName("splash")[0]
            splashEl.innerHTML = ""
                // splashPop.forEach(splash => {
                    splashEl.innerHTML += `
                    <article id="bio" class="class="col-10 align-self-center container">
                        <h2><strong>Welcome to My Personal Site!</strong></h2>
                            <div id="text-block" class="col-10 align-self-center container">
                            <p>${splash.para1}</p>
                            <br>
                            <p>${splash.para2}</p>
                            </div>
                    <br>
                    </article>
                    `
                })
            }
    //     )
    // }
//exports
module.exports = splashDOM