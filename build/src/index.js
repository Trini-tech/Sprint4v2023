"use strict";
const button = document.querySelector("button");
let acuditContainer = document.querySelector('.acudit-container');
button.addEventListener("click", (e) => {
    e.preventDefault();
    askJoke();
});
function askJoke() {
    fetch(`https://icanhazdadjoke.com/`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
        .then(res => res.json())
        .then(data => (writeJoke(data)));
}
function writeJoke(acudit) {
    acuditContainer.textContent = acudit.joke;
    console.log(acudit);
}
//# sourceMappingURL=index.js.map