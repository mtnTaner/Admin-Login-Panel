function passwordGoster(id, el) {
    let x = document.getElementById(id);
    if (x.type === "password") {
      x.type = "text";
      el.className = 'fa fa-eye-slash parola';
    } else {
      x.type = "password";
      el.className = 'fa fa-eye parola';
    }
}