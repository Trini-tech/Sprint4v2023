interface Joke {
    joke: string;
    score: number | string;
    date: string;
} 

let jokeString : string = "I'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later.";

const reportJokes : Joke[] = [];

const button = document.querySelector("button") as HTMLButtonElement;
let acuditContainer = document.querySelector('.acudit-container') as HTMLDivElement;

button.addEventListener("click", (e)=> {
    e.preventDefault();
    askJoke();
    saveScores(reportJokes); console.log(reportJokes);
});

function askJoke(){
    fetch(`https://icanhazdadjoke.com/`, {
        method: 'GET',
        headers:{
            'Accept': 'application/json',
        },
    })
    .then(res => res.json())
    .then(data =>{
        jokeString = data.joke;
        writeJoke(data);
    })


    .catch(function(error) {
        console.log(error);
    });
 }

function writeJoke(acudit:any){
    acuditContainer.textContent = acudit.joke;
}

function saveScores(reportJokes:Joke[]): void {
    let selectedInput = document.querySelector('input[name="punctuation"]:checked') as HTMLInputElement;
    let selectedInputValue : any;
    if (selectedInput == null){
        selectedInputValue = "No puntuat";
    }else{
        selectedInputValue = parseInt(selectedInput.value);
        //Clear radio input checked
        selectedInput.checked=false;
    }
    let currentDate = new Date().toJSON().slice(0, 10);
    reportJokes.push({joke:jokeString , score: selectedInputValue, date:currentDate});

}