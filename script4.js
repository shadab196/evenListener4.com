let names = document.getElementsByTagName("h1")[0];

function change() {
    names.style.color = "red";
}

document.querySelector("h1").addEventListener("mouseout", change);