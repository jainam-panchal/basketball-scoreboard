let homeScore = document.getElementById("home-major-text")
let guestScore = document.getElementById("guest-major-text")

let homeBox = document.getElementById("home-box")
let guestBox = document.getElementById("guest-box")


let home = 0;
let guest = 0;

let home1 = document.getElementById("home-btn-1")
let home2 = document.getElementById("home-btn-2")
let home3 = document.getElementById("home-btn-3")


let guest1 = document.getElementById("guest-btn-1")
let guest2 = document.getElementById("guest-btn-2")
let guest3 = document.getElementById("guest-btn-3")

homeScore.textContent = 0;
guestScore.textContent = 0;

function homeInc1() {
    home += 1
    homeScore.textContent = home;
    highLight()
}

function homeInc2() {
    home += 2
    homeScore.textContent = home;
    highLight()
}

function homeInc3() {
    home += 3
    homeScore.textContent = home;
    highLight()
}

function guestInc1() {
    guest += 1
    guestScore.textContent = guest;
    highLight()
}

function guestInc2() {
    guest += 2
    guestScore.textContent = guest;
    highLight()
}

function guestInc3() {
    guest += 3
    guestScore.textContent = guest;
    highLight()
}

function highLight() {
    if (home > guest) {
        homeBox.style.color = "white"
    }
    else if (home < guest) {
        guestBox.style.color = "white"
    }
    else {
        homeBox.style.color = "black"
        guestBox.style.color = "black"
    }

}