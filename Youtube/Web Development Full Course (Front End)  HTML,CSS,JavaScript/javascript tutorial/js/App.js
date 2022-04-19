function message(msg) {
    document.getElementById("output").innerHTML = msg + " event";
}

function displayDate() {
    document.getElementById("date").innerHTML = Date();
}

function firstButton() {
    document.getElementById("change").innerHTML = "Clicked First Button";
}

function secondButton() {
    document.getElementById("change").innerHTML = "Clicked Second Button";
}

function openMe() {
    x = document.getElementById("openclose");
    // x.style.display = "block";
    x.className = "opened";
}

function closeMe() {
    x = document.getElementById("openclose");
    // x.style.display = "none";
    x.className = "closed";
}