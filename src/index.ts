const button = document.querySelector("button") as HTMLButtonElement;
let acuditContainer = document.querySelector('.acudit-container') as HTMLDivElement;

button.addEventListener("click", (e)=> {
    e.preventDefault();
    askJoke();

});

function askJoke(){
    fetch(`https://icanhazdadjoke.com/`, {
        method: 'GET',
        headers:{
            'Accept': 'application/json',
        },
    })
    .then(res => res.json())
    .then(data =>
        (writeJoke(data))
    );
}

function writeJoke(acudit:any){
    acuditContainer.textContent = acudit.joke;
    console.log(acudit)  
}