// ---------- Root & Storage ------------
var admins;
var counter;
var isAdmin = false;
var colors = JSON.parse(localStorage.getItem("Colors"));
if (localStorage.getItem('admins') == null) {
    admins = [];
} else {
    admins = JSON.parse(localStorage.getItem('admins'));
}

load();

function load() {
    for (var i = 0; i < admins.length; i++) {
        if (admins[i].loggedIn) {
            counter = i;
            isAdmin = true;
            document.getElementById("name").innerHTML = admins[i].name;
            document.querySelector("#mail").innerHTML = admins[i].mail;
            break;
        }
    }

    if (!(isAdmin)) {
        window.location.href = "../login/login.html"
    }
}

/* --------- Log out functions --------- */

var logoutBTN = document.querySelector("#logout");

logoutBTN.addEventListener('click', () => {
    admins[counter].loggedIn = false;
    localStorage.setItem('admins', JSON.stringify(admins));
    window.location.href = "../login/login.html"
})

// ---------------- Variables Declearation -------------------

var allColorInp = document.querySelectorAll('.color');
var allTextInp = document.querySelectorAll('.text');




// ------------------ Events & functions -----------------

document.querySelector('.saving').addEventListener('click', () => {
    saveColors();
    divViewer();
})

/* -------------------------------------coloring functions------------------------------------- */



for (var i = 0; i < allColorInp.length; i++) {


    allColorInp[i].addEventListener('input', coloeringinp)

    allTextInp[i].addEventListener('keydown', coloeringtxt)
}

function coloeringinp() {
    var i = 0;
    for (i; i < allColorInp.length; i++) {
        if (this == allColorInp[i]) {
            break;
        }
    }
    let x = allColorInp[i].value;
    document.documentElement.style.setProperty(colors[i].name, x);
    colors[i].value = x;
    allTextInp[i].value = x;
}

function coloeringtxt(e) {
    var i = 0;
    for (i; i < allTextInp.length; i++) {
        if (this == allTextInp[i]) {
            break;
        }
    }
    if (e.keyCode == 13) {
        var x = coloerValue(allTextInp[i].value);
        allTextInp[i].value = x;
        document.documentElement.style.setProperty(colors[i].name, x);
        colors[i].value = x;
        if (x != "Wrong value") {
            allColorInp[i].value = x;
        }
    }

}

function coloerValue(e) {
    if (e.length == 4) {
        var x = "#";
        for (var i = 1; i < e.length; i++) {
            x += e[i] + e[i]
        }
        return x;
    } else if (e.length < 4 || (e.length > 4 && e.length < 7) || e.length > 7) {
        return "Wrong value";
    } else {
        return e;
    }
}

/* -------------------------------------Saving Functions------------------------------------- */

function saveColors() {
    localStorage.setItem("Colors", JSON.stringify(colors));
}

function divViewer() {
    $(() => {
        $(".active").fadeIn(500);
        $(".active").css({
            display: 'flex',
        });
    })
}

function divRemover() {
    $(() => {
        $(".active").fadeOut(500)
    })
}


