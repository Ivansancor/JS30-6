const searchbar = document.querySelector("input[type=text]");
const button = document.querySelector("input[type=button");
const resultBlock = document.querySelector(".suggestions");

searchbar.value = "";

function filterResults() {
    resultBlock.innerHTML += `<li>${this.value}</li>`;
}

searchbar.addEventListener("input", filterResults);