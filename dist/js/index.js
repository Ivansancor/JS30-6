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

function displayResults(){
    const results = filterResults(this.value, cities);
    const html = results.map(result => {
        return `<li>${result.city}, ${result.state}</li>`;
    }
    ).join("");
    resultBlock.innerHTML = html;
}

searchbar.addEventListener("change", displayResults);
searchbar.addEventListener("keyup", displayResults);