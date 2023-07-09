$(() => {
    $('body').ready(() => {
        $(".bg .right").css("top", "0");
        $(".bg .left").css("bottom", "0");
        $(".login").css({
            "opacity": "1",
            'top': "40%",

        }, 500);
        $(".reg").css({
            "opacity": "1",
            'top': "20%",

        }, 500);
    })
})

var admins;

if (localStorage.getItem('admins') == null) {
    admins = [];
} else {
    admins = JSON.parse(localStorage.getItem('admins'));
}

function logIn() {
    var username = document.querySelector("#userName").value;
    var password = document.querySelector("#password").value;

    for (var i = 0; i < admins.length; i++) {
        if (username == admins[i].userName && password == admins[i].password) {
            admins[i].loggedIn = true;
            localStorage.setItem('admins', JSON.stringify(admins));
            window.location.href = "../../test.html";
        }
    }

    function divViewer() {
        $(() => {
            $(".active").fadeIn(500)
        })
    }

    divViewer()

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