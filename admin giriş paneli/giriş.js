var kullanicilar = [{
        user: "admin",
        password: "admin"
    },
    {
        user: "taner",
        password: "taner123"
    },
    {
        user: "özgür",
        password: "özgür"
    }
];

var girilenkullaniciadi;
var girilenparola;
var x;
var login = false;

function girisonay() {
    girilenkullaniciadi = document.getElementById("user").value;
    girilenparola = document.getElementById("password").value;
    for (x of kullanicilar) {
        if ((x.user == girilenkullaniciadi) && (x.password == girilenparola)) {
            login = true;

        }
    }
    if (login) {

        alert("giriş başarılı.");
        if (chckbx.checked) {

            document.cookie = girilenkullaniciadi + "," + girilenparola;
            
        }

        

    } else if (!login) {
        alert("giriş bilgileri hatalı. Yeniden Deneyiniz..." + girilenkullaniciadi + girilenparola);
        document.getElementById("user").value = "";
        document.getElementById("password").value = "";
    }
}

window.onload = function () {
    if (document.cookie.length > 0) {
        var parcala = document.cookie.split(",");
        document.getElementById("user").value = parcala[0];
        document.getElementById("password").value = parcala[1];
        
    }
    
}