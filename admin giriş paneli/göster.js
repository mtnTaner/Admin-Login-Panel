function gizleGoster(ID) {
    var chat = document.getElementById("chat");
    var secilenID = document.getElementById(ID);
    if (secilenID.style.display == "none") {
        secilenID.style.display= "";
        chat.style.display="none";
    } else {
        chat.style.display="";
        secilenID.style.display= "none";
    }
}