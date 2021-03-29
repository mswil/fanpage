window.onload = function () {

    var form = document.getElementsByTagName("form")[0];

    form.addEventListener("submit", redirect);
}

function redirect(event) {
    event.preventDefault();
    location.href ="index.html";
}