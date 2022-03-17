const searchbar = document.querySelector("input[type=text]");
const resultBlock = document.querySelector(".suggestions");

function filterResults() {
    resultBlock.innerHTML += `<li>${this.value}</li>`;
}

searchbar.addEventListener("input", filterResults);