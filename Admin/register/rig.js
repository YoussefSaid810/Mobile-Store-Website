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

function add() {
    validation()
}


document.getElementById('reg').addEventListener('click', add)


function divViewer() {
    $(() => {
        $("#MSGsccess").fadeIn(500);
        $("#MSGsccess").css({
            display: 'flex',
        });
    })
}

function validation() {
    let name = document.getElementById('Name').value,
        username = document.getElementById('UserName').value,
        pass = document.getElementById('Password').value,
        mail = document.getElementById('Mail').value;

    if (!(name == "" || pass == "" || username == "" || mail == "")) {

        if (mail.includes('@') && mail.includes('.com')) {

            if (pass.length > 5) {

                if (checkUser(username)) {

                    var admin = {
                        name: name,
                        userName: username,
                        password: pass,
                        mail: mail,
                        loggedIn: false,
                    }

                    admins.push(admin);

                    localStorage.setItem('admins', JSON.stringify(admins));

                    name = "";
                    username = "";
                    pass = "";
                    mail = "";

                    divViewer();
                } else {
                    document.getElementById("details").innerHTML = "Username is existed";
                    err();
                }
            } else {
                document.getElementById("details").innerHTML = "Password should be more than 5 digits";
                err();
            }

        } else {
            document.getElementById("details").innerHTML = "Mail should contain \"@\" and \".\"";
            err();
        }

    } else {
        document.getElementById("details").innerHTML = "All Fields are required";
        err();
    }
}

function checkUser(user) {
    for (var i = 0; i < admins.length; i++) {
        if (user == admins[i].userName) {
            return false;
        }
    }
    return true;
}

function err() {
    $(() => {
        $("#missing_val").fadeIn(500);
        $("#missing_val").css({
            display: 'flex',
        });
    })
}

function divRemover() {
    $(() => {
        $(".active").fadeOut(500)
    })
}