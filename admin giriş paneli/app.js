function sohbeteBasla() {
   
    if (myName.value.length > 0) {
      
        gizleGoster('canlı');
    }
}

function mesajGonder() {
    var msg = document.getElementById("myInput").value;
    if (msg.length > 0) {
        var html = '';
        html += '<li class="message mine">';
        html += '<span class="sender">'+myName.value +'</span>'; 
        html += '<p class="text">' + msg  + '</p>';
        html += '<span class="date">12:00</span>';
        html += '</li>';
        messages.innerHTML += html;
        messages.scroll({ behavior: "smooth", top: 999999999999999999999 });
    }
    document.getElementById("myInput").value = "";
}



var messages = document.querySelector(".messages");