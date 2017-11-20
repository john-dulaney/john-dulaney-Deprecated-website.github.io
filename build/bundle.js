(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Author: John Dulaney
// Purpose: This module grabs blog posts and prints them to the DOM
// ┌(° ͜ʖ͡°)┘

//set into a function for scope, ajax request the database for blogs
const blogDOM = () => {$.ajax({url: "https://personal-site-ffb9c.firebaseio.com/myBlog.json"})
    //assign .then to halt JS from executing before XHR returns with the data
    .then(blogs => {
        //log our db for our poor dev
        console.log(blogs)
            //grab the blog__list div from index.html
            const blogEl = document.getElementsByClassName("blog__list")[0]
            //clear out any unwanted stuff
            blogEl.innerHTML = ""
                // for each key in blogs, print innerHTML
                blogs.forEach(b => {
                    blogEl.innerHTML += `
                    <article id=${b.id}>
                        <h2><strong>${b.title}</strong></h2>
                            <li id="text-block" class="col-10 align-self-center container">
                            <div>${b.date}</div>
                            <div>${b.tags}</div>
                            <div>${b.author}</div>
                                <hr>
                            <div>${b.content}</div>
                            </li>
                    <br>
                    </article>
                    `
                })
            }
        )
    }
//exports
module.exports = blogDOM
},{}],2:[function(require,module,exports){
// Author: John Dulaney
// Purpose: id generator function
// ┌(° ͜ʖ͡°)┘

// import

// create db
const Database = Object.create(null, {
    load: {
        value: () => asdfz
    },
    save: {
        value: (db, flag) => {
            localStorage.setItem("Database", JSON.stringify(db));
            localStorage.setItem("changedKey", JSON.stringify(flag))
        }
    }
})

// exports
module.exports = Database

},{}],3:[function(require,module,exports){
// Author: John Dulaney
// Purpose: Main landing for Website. initializes framework for several other modules.
// ┌(° ͜ʖ͡°)┘

// imports
const db = require("./database")
const blogDOM = require("./blog/blog-control.js")


const main = function(){
       return blogDOM()



}
main()

// exports      
module.exports = main

},{"./blog/blog-control.js":1,"./database":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY3JpcHRzL2Jsb2cvYmxvZy1jb250cm9sLmpzIiwic2NyaXB0cy9kYXRhYmFzZS5qcyIsInNjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIEF1dGhvcjogSm9obiBEdWxhbmV5XG4vLyBQdXJwb3NlOiBUaGlzIG1vZHVsZSBncmFicyBibG9nIHBvc3RzIGFuZCBwcmludHMgdGhlbSB0byB0aGUgRE9NXG4vLyDilIwowrAgzZzKls2hwrAp4pSYXG5cbi8vc2V0IGludG8gYSBmdW5jdGlvbiBmb3Igc2NvcGUsIGFqYXggcmVxdWVzdCB0aGUgZGF0YWJhc2UgZm9yIGJsb2dzXG5jb25zdCBibG9nRE9NID0gKCkgPT4geyQuYWpheCh7dXJsOiBcImh0dHBzOi8vcGVyc29uYWwtc2l0ZS1mZmI5Yy5maXJlYmFzZWlvLmNvbS9teUJsb2cuanNvblwifSlcbiAgICAvL2Fzc2lnbiAudGhlbiB0byBoYWx0IEpTIGZyb20gZXhlY3V0aW5nIGJlZm9yZSBYSFIgcmV0dXJucyB3aXRoIHRoZSBkYXRhXG4gICAgLnRoZW4oYmxvZ3MgPT4ge1xuICAgICAgICAvL2xvZyBvdXIgZGIgZm9yIG91ciBwb29yIGRldlxuICAgICAgICBjb25zb2xlLmxvZyhibG9ncylcbiAgICAgICAgICAgIC8vZ3JhYiB0aGUgYmxvZ19fbGlzdCBkaXYgZnJvbSBpbmRleC5odG1sXG4gICAgICAgICAgICBjb25zdCBibG9nRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmxvZ19fbGlzdFwiKVswXVxuICAgICAgICAgICAgLy9jbGVhciBvdXQgYW55IHVud2FudGVkIHN0dWZmXG4gICAgICAgICAgICBibG9nRWwuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICAgICAgICAgIC8vIGZvciBlYWNoIGtleSBpbiBibG9ncywgcHJpbnQgaW5uZXJIVE1MXG4gICAgICAgICAgICAgICAgYmxvZ3MuZm9yRWFjaChiID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYmxvZ0VsLmlubmVySFRNTCArPSBgXG4gICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlIGlkPSR7Yi5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+PHN0cm9uZz4ke2IudGl0bGV9PC9zdHJvbmc+PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9XCJ0ZXh0LWJsb2NrXCIgY2xhc3M9XCJjb2wtMTAgYWxpZ24tc2VsZi1jZW50ZXIgY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4ke2IuZGF0ZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiR7Yi50YWdzfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JHtiLmF1dGhvcn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+JHtiLmNvbnRlbnR9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuLy9leHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGJsb2dET00iLCIvLyBBdXRob3I6IEpvaG4gRHVsYW5leVxuLy8gUHVycG9zZTogaWQgZ2VuZXJhdG9yIGZ1bmN0aW9uXG4vLyDilIwowrAgzZzKls2hwrAp4pSYXG5cbi8vIGltcG9ydFxuXG4vLyBjcmVhdGUgZGJcbmNvbnN0IERhdGFiYXNlID0gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgbG9hZDoge1xuICAgICAgICB2YWx1ZTogKCkgPT4gYXNkZnpcbiAgICB9LFxuICAgIHNhdmU6IHtcbiAgICAgICAgdmFsdWU6IChkYiwgZmxhZykgPT4ge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJEYXRhYmFzZVwiLCBKU09OLnN0cmluZ2lmeShkYikpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaGFuZ2VkS2V5XCIsIEpTT04uc3RyaW5naWZ5KGZsYWcpKVxuICAgICAgICB9XG4gICAgfVxufSlcblxuLy8gZXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBEYXRhYmFzZVxuIiwiLy8gQXV0aG9yOiBKb2huIER1bGFuZXlcbi8vIFB1cnBvc2U6IE1haW4gbGFuZGluZyBmb3IgV2Vic2l0ZS4gaW5pdGlhbGl6ZXMgZnJhbWV3b3JrIGZvciBzZXZlcmFsIG90aGVyIG1vZHVsZXMuXG4vLyDilIwowrAgzZzKls2hwrAp4pSYXG5cbi8vIGltcG9ydHNcbmNvbnN0IGRiID0gcmVxdWlyZShcIi4vZGF0YWJhc2VcIilcbmNvbnN0IGJsb2dET00gPSByZXF1aXJlKFwiLi9ibG9nL2Jsb2ctY29udHJvbC5qc1wiKVxuXG5cbmNvbnN0IG1haW4gPSBmdW5jdGlvbigpe1xuICAgICAgIHJldHVybiBibG9nRE9NKClcblxuXG5cbn1cbm1haW4oKVxuXG4vLyBleHBvcnRzICAgICAgXG5tb2R1bGUuZXhwb3J0cyA9IG1haW5cbiJdfQ==
