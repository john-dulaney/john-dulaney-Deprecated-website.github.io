(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
// Author: John Dulaney
// Purpose: Main landing for Website. initializes framework for several other modules.
// ┌(° ͜ʖ͡°)┘

// imports
const db = require("./database")


const main = function(   ){
        



}













// exports      
module.exports = main

},{"./database":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzY3JpcHRzL2RhdGFiYXNlLmpzIiwic2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBBdXRob3I6IEpvaG4gRHVsYW5leVxuLy8gUHVycG9zZTogaWQgZ2VuZXJhdG9yIGZ1bmN0aW9uXG4vLyDilIwowrAgzZzKls2hwrAp4pSYXG5cbi8vIGltcG9ydFxuXG4vLyBjcmVhdGUgZGJcbmNvbnN0IERhdGFiYXNlID0gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gICAgbG9hZDoge1xuICAgICAgICB2YWx1ZTogKCkgPT4gYXNkZnpcbiAgICB9LFxuICAgIHNhdmU6IHtcbiAgICAgICAgdmFsdWU6IChkYiwgZmxhZykgPT4ge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJEYXRhYmFzZVwiLCBKU09OLnN0cmluZ2lmeShkYikpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjaGFuZ2VkS2V5XCIsIEpTT04uc3RyaW5naWZ5KGZsYWcpKVxuICAgICAgICB9XG4gICAgfVxufSlcblxuLy8gZXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBEYXRhYmFzZVxuIiwiLy8gQXV0aG9yOiBKb2huIER1bGFuZXlcbi8vIFB1cnBvc2U6IE1haW4gbGFuZGluZyBmb3IgV2Vic2l0ZS4gaW5pdGlhbGl6ZXMgZnJhbWV3b3JrIGZvciBzZXZlcmFsIG90aGVyIG1vZHVsZXMuXG4vLyDilIwowrAgzZzKls2hwrAp4pSYXG5cbi8vIGltcG9ydHNcbmNvbnN0IGRiID0gcmVxdWlyZShcIi4vZGF0YWJhc2VcIilcblxuXG5jb25zdCBtYWluID0gZnVuY3Rpb24oICAgKXtcbiAgICAgICAgXG5cblxuXG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGV4cG9ydHMgICAgICBcbm1vZHVsZS5leHBvcnRzID0gbWFpblxuIl19
