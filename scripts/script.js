// DOM Nodes Selectors

var containerNode = document.querySelector('.container')
var clockTimeNode = document.querySelector('#clock-time')    
var displayTime = document.querySelector('#display-time')   
var displayHex =  document.querySelector('#display-hex')   
var timerBarNode = document.querySelector('#timer-bar')    
var showHexColor = false

// ************************************************** //

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    if (h > 12) {
        h = h - 12
    }

    if (h < 10) {
        h = "0" + h
    }

    if (m < 10) {
        m = "0" + m
    }

    if (s < 10) {
        s = "0" + s
    }

    var currentTime = h + ':' + m + ':' + s

     if (showHexColor) {
        displayHex.innerHTML = changeHexBG()
        console.log('updating Hex')
    } else {
        displayTime.innerHTML = currentTime
    }

    return currentTime
}

function changeHexBG() {
    var today = new Date()
    var h = today.getHours()
    var m = today.getMinutes()
    var s = today.getSeconds()
// ParseInt with multiplication operator to reach max color value of 255
    h = parseInt(h * 10.625)
    m = parseInt(m * 4.25)
    s = parseInt(s * 4.25)

    var hexHrs = h.toString(16)
    var hexMins = m.toString(16)
    var hexSec = s.toString(16)
    var hexColorCode = '#' + hexHrs + hexMins + hexSec
    containerNode.style.backgroundColor = hexColorCode

    return hexColorCode
}

// *********************************************************

//Hover Action Command

// *********************************************************

function mouseenterClock() {
   // displayTime.innerHTML = changeHexBG()
    showHexColor = true
    displayTime.style.opacity = '0'
    displayHex.style.opacity = '1'

}

function mouseleaveClock() {
    displayTime.innerHTML = startTime()
    showHexColor = false
    displayTime.style.opacity = '1'
    displayHex.style.opacity = '0'
}

function addEvents() {
    displayTime.addEventListener('mouseenter', mouseenterClock)
    displayTime.addEventListener('mouseleave', mouseleaveClock)
}
addEvents()

//*************************************************************

setInterval(function() {
    startTime()
    changeHexBG()
}, 500)

setInterval(function () {
    var seconds = new Date()
    timerBarNode.style.width = ((seconds.getSeconds() / 60) * 600) + 'px'
}, 500)