const searchbar = document.querySelector("input[type=text]");
const resultBlock = document.querySelector(".suggestions");

const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));


window.onload = function() {
    (searchbar.value="");
}

function filterResults(wordToMatch, array) {
    return array.filter(place => {
        const regex = new RegExp(wordToMatch, "gi");
        return place.city.match(regex) || place.state.match(regex);
        }
    );
}

function numberWithCommas(n) {
    var parts=n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
}

function displayResults(){
    const results = filterResults(this.value, cities);
    const html = results.map(result => {
        const regex = new RegExp(this.value, "gi");
        const cityName = result.city.replace(regex, `<span class="high">${this.value}</span>`);
        const stateName = result.state.replace(regex, `<span class="high">${this.value}</span>`);
        return `<li>${cityName}, ${stateName}<span class="pop">${numberWithCommas(result.population)}</span></li>`;
    }
    ).join("");
    if (this.value === "") {
        resultBlock.innerHTML = "";
    } else {
    resultBlock.innerHTML = html;
    }
}

searchbar.addEventListener("change", displayResults);
searchbar.addEventListener("keyup", displayResults);