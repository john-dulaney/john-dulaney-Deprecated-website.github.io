// Author: John Dulaney
// Purpose: This module grabs contact posts and prints them to the DOM
// ┌(° ͜ʖ͡°)┘

//set into a function for scope, ajax request the database for contacts
const contactDOM = () => {$.ajax({url: "https://personal-site-ffb9c.firebaseio.com/contact.json"})
    //assign .then to halt JS from executing before XHR returns with the data
    .then(contact => {
        //log our db for our poor dev
        console.log("contact", contact)
            //grab the contact__list div from index.html
            const contactEl = document.getElementsByClassName("contact__list")[0]
            //clear out any unwanted stuff
            contactEl.innerHTML = ""
                // for each key in contact, print innerHTML
                contact.forEach(c => {
                    contactEl.innerHTML += `
                    <section class="">
                    <div class="container" id="text-block">
                        <h1>${c.name}</h1>
                            <p>${c.username}</p>
                            <a href="${c.url}"><img src="${c.icon}" alt="" srcset="" height="32" width="32"></a>
                    </div>
                    `
                })
            }
        )
    }
//exports
module.exports = contactDOM