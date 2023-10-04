"use strict";
let jokeString;
let stateWeather;
const reportJokes = [];
const button = document.querySelector("button");
let acuditContainer = document.querySelector('.acudit-container');
let tempsContainer = document.querySelector('.temps-container');
window.addEventListener("load", (event) => {
    askJoke();
    getWeather();
});
button.addEventListener("click", (e) => {
    e.preventDefault();
    askJoke();
    saveScores(reportJokes);
    console.log(reportJokes);
});
function askJoke() {
    fetch(`https://icanhazdadjoke.com/`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(res => res.json())
        .then(data => {
        jokeString = data.joke;
        writeJoke(data);
    })
        .catch(function (error) {
        console.log(error);
    });
}
function writeJoke(acudit) {
    acuditContainer.textContent = acudit.joke;
}
function saveScores(reportJokes) {
    let selectedInput = document.querySelector('input[name="punctuation"]:checked');
    let selectedInputValue;
    if (selectedInput == null) {
        selectedInputValue = "No puntuat";
    }
    else {
        selectedInputValue = parseInt(selectedInput.value);
        //Clear radio input checked
        selectedInput.checked = false;
    }
    let currentDate = new Date().toJSON().slice(0, 10);
    reportJokes.push({ joke: jokeString, score: selectedInputValue, date: currentDate });
}
function getWeather() {
    fetch(`https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(res => res.json())
        .then(data => {
        stateWeather = `Hoy, ${data.stateSky.description} ${data.temperatura_actual}ºC`;
        tempsContainer.textContent = stateWeather;
    })
        .catch(function (error) {
        console.log(error);
    });
}
//# sourceMappingURL=index.js.map