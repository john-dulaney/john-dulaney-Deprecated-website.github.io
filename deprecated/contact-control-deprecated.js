// P O P U L A T E

//PAULS WAY
// const storedContact = JSON.parse(localStorage.getItem("Contact"));
// const contactEl = document.getElementsByClassName("contact");
// //loop through nav array
// for (let i = 0; i < storedContact.length; i++) {
//     let currentContact = storedContact[i];


// ORIGINAL
    const storedContact = JSON.parse(localStorage.getItem("Contact"))
    const contactEl = document.getElementsByClassName("contact")[0]
    
    for (var key in storedContact) {
            const currentContact = storedContact[key];
            for (var i = 0; i < currentContact.length; i++) {
                var detail = currentContact[i];
                
    

    contactEl.innerHTML += `
        <section class="${key}">
        <div class="container" id="text-block">
            <h1>${detail.name}</h1>
                <p>${detail.username}</p>
                <a href="${detail.url}"><img src="${detail.icon}" alt="" srcset="" height="32" width="32"></a>
                    
         </div>
                    `
    
}
    }


