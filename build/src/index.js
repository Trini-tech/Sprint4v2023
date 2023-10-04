"use strict";
let jokeString = "I'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later.";
const reportJokes = [];
const button = document.querySelector("button");
let acuditContainer = document.querySelector('.acudit-container');
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
//# sourceMappingURL=index.js.map