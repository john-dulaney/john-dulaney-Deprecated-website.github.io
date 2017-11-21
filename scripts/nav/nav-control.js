// Author: John Dulaney and Paul Ellis
// Purpose: This module grabs navbar links and prints them to the DOM
// ┌(° ͜ʖ͡°)┘

//set into a function for scope, ajax request the database for navigationBar
const navigationBarDOM = () => {$.ajax({url: "https://personal-site-ffb9c.firebaseio.com/navBar.json"})
    //assign .then to halt JS from executing before XHR returns with the data
    .then(navigationBar => {
        //log our db for our poor dev
        console.log("navigationBar", navigationBar)
            //grab the navigationBar__list div from index.html
            const navEl = document.getElementById("nav")
            //clear out any unwanted stuff
            navEl.innerHTML = ""
                // for each key in navigationBar, print innerHTML
                navigationBar.forEach(currentNav => {
                    navEl.innerHTML += `
                    <a class="nav-item nav-link" href="${currentNav.link}">${currentNav.name}</a>
                    `
                })
            }
        )
    }
//exports
module.exports = navigationBarDOM