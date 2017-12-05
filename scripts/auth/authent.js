const firebase = require("firebase")
const $ = require("jquery")
// const observe = require("auth/observer")
// const notify = require("humane-js")

// Initialize Firebase
var config = {
apiKey: "AIzaSyD_w-miDKvl2jeZP6-Km94bc0TCfOhHBj4",
authDomain: "personal-site-ffb9c.firebaseapp.com",
databaseURL: "https://personal-site-ffb9c.firebaseio.com",
projectId: "personal-site-ffb9c",
storageBucket: "personal-site-ffb9c.appspot.com",
messagingSenderId: "126279178759"
}

const auth = Object.create(null, {
    "activeUser": {
        value: null,
        writable: true
    },
    "init": {
        value: function () {
            firebase.initializeApp(config)

            $(".login__submit").on("click", e => {
                // Validate login information
                this.validate(
                    $(".login__email").val(),
                    $(".login__password").val()
                )

                // Clear the form
                $(".login__email").val("")
                $(".login__password").val("")
            })

            // Set up authentication observer
            observe.init(this)
        }
    },
    "validate": {
        value: function (email, password) {
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .catch(function (error) {
                    const errorCode = error.code
                    const errorMessage = error.message

                    notify.log("Email or password is invalid")
                })
        }
    },
    "logout": {
        value: function () {
            firebase.auth().signOut().then(function() {
                // Sign-out successful.
            }).catch(function(error) {
                // An error happened.
            });
        }
    }
})

module.exports = auth