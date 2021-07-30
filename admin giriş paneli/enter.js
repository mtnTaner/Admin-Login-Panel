var input = document.getElementById("myInput");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13)/* 13 key enter tusu */ {
   event.preventDefault();
   document.getElementById("msjgndr").click();
  }
});
var input = document.getElementById("myName");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13)/* 13 key enter tusu */ {
   event.preventDefault();
   document.getElementById("shbtbslt").click();
  }
});