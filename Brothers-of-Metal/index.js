function darkMode() {
    if (document.getElementById("dark-toggle-check").checked) {
        document.body.className = 'dayMode';

    }
    else {
        document.body.className = '';
    }
}

window.onload = function () {
    const btn = document.getElementById('dark-toggle');
    btn.onclick = darkMode;
}

