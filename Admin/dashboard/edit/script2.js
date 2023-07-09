// ---------- Root & Storage ------------
var admins;
var counter = -1;
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
            document.getElementById("admin").innerHTML = admins[i].name;
            document.querySelector("#mail").innerHTML = admins[i].mail;
            break;
        }
    }

    if (!(isAdmin)) {
        window.location.href = "../../login/login.html"
    }
}

/* --------- Log out functions --------- */

var logoutBTN = document.querySelector("#logout");

logoutBTN.addEventListener('click', () => {
    admins[counter].loggedIn = false;
    localStorage.setItem('admins', JSON.stringify(admins));
    window.location.href = "../../login/login.html"
})

// ---------------- Variables Declearation -------------------

var allColorInp = document.querySelectorAll('.color');
var allTextInp = document.querySelectorAll('.text');




// ------------------ Events & functions -----------------

document.querySelector('.saving').addEventListener('click', () => {
    saveData();
    divViewer();
})

/* -------------------------------------Saving functions------------------------------------- */
function saveData() {
    var name = document.querySelectorAll(".editName");
    var username = document.querySelectorAll("#editUsername");
    var password = document.querySelectorAll("#editPassword");
    var email = document.querySelectorAll("#editEmail");

    console.log(email[0].value)

    if (name[0].value != "") {
        admins[counter].name = name[0].value;
    }
    if (username[0].value != "")
        admins[counter].userName = username[0].value;
    if (password[0].value != "")
        admins[counter].password = password[0].value;
    if (email[0].value != "")
        admins[counter].mail = email[0].value;

    localStorage.setItem("admins", JSON.stringify(admins));

    window.location.reload();
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

/* ------------------------------ Delete Admins -----------------------------------*/

var selector = document.querySelector("#adminsSellector");
var temp = "";
for (var i = 0; i < admins.length; i++) {
    temp += `<option value="` + i + `">Name: ` + admins[i].name + ` | UserName: ` + admins[i].userName + ` | Email: ` + admins[i].mail +
        loggedIN(i) + `</option>`;
}

function loggedIN(i) {
    if (admins[i].loggedIn) {
        return ` (Connected Now)`
    } else {
        return ``
    }
}

selector.innerHTML = temp;

document.querySelector('.delete').addEventListener('click', () => {
    var x = selector.value;
    deleteAdmin(x);
})

function deleteAdmin(x) {
    var counterDel = x;
    for (var i = x; i < admins.length; i++) {
        admins[counterDel] = admins[++counterDel];
    }
    admins.length--;

    localStorage.setItem('admins', JSON.stringify(admins));
    window.location.reload();
}