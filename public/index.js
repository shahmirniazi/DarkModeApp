const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");
const appContainer = document.querySelector(".container");
const toggleContainer = document.querySelector(".darkmode-app")
const modeText = document.querySelector("h1");
const toggleButton = document.querySelector("button")

moonIcon.addEventListener("click", toggleDark);
sunIcon.addEventListener("click", toggleLight);

function toggleDark() {
    moonIcon.style.display = "none";
    sunIcon.style.display = "block";
    sunIcon.style.paddingLeft = "40px";
    toggleContainer.style.backgroundColor = '#1F6E8C';
    appContainer.style.backgroundColor = "#0E2954"
    modeText.innerHTML = "Toggle for Light Mode";
    toggleButton.style.backgroundColor = "#C8E4B2"

}

function toggleLight() {
    moonIcon.style.display = "block";
    sunIcon.style.display = "none";
    moonIcon.style.paddingLeft = "40px";
    toggleContainer.style.backgroundColor = '#C8E4B2';
    appContainer.style.backgroundColor = "#7EAA92"
    modeText.innerHTML = "Toggle for Dark Mode";
    toggleButton.style.backgroundColor = "#1F6E8C"




}