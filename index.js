let homePoints = document.getElementById("home-points");
let guestPoints = document.getElementById("guest-points");

function add1PointHome() {
    homePoints.innerText = parseInt(homePoints.innerText) + 1
}

function add2PointsHome() {
    homePoints.innerText = parseInt(homePoints.innerText) + 2
}

function add3PointsHome() {
    homePoints.innerText = parseInt(homePoints.innerText) + 3
}

function add1PointGuest() {
    guestPoints.innerText = parseInt(guestPoints.innerText) + 1
}

function add2PointsGuest() {
    guestPoints.innerText = parseInt(guestPoints.innerText) + 2
}

function add3PointsGuest() {
    guestPoints.innerText = parseInt(guestPoints.innerText) + 3
}