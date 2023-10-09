interface Joke {
    joke: string;
    score: number | string;
    date: string;
} 
let twoJokesAPI : string[]=[];
let jokeString : string;
let stateWeather: string;
const reportJokes : Joke[] = [];

const button = document.querySelector("button") as HTMLButtonElement;
let acuditContainer = document.querySelector('.acudit-container') as HTMLDivElement;
let tempsContainer = document.querySelector('.temps-container') as HTMLDivElement;

window.addEventListener("load", (event) => {
    askJoke();
    getWeather();
  });

button.addEventListener("click", (e)=> {
    e.preventDefault();
    askJoke();
    saveScores(reportJokes); console.log(reportJokes);
    replaceBg();
});

  
function askJoke(){
    // First endpoint to fetch data from
    const endpoint1 = 'https://icanhazdadjoke.com/';
    
    // Fetch data from first endpoint
    fetch(endpoint1, {
        headers:{
            'Accept': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data1 => {
            twoJokesAPI[0] = data1.joke;
        
        // Second endpoint to fetch data from
        const endpoint2 = 'https://api.chucknorris.io/jokes/random';
        
        // Fetch data from second endpoint
        return fetch(endpoint2, {
            headers:{
                'Accept': 'application/json',
            },
        });
        })
        .then(response => response.json())
        .then(data2 => {
            twoJokesAPI[1] = data2.value;
            jokeString = twoJokesAPI[(Math.random() * twoJokesAPI.length) | 0];
            // Writes joke
            acuditContainer.textContent = jokeString;
        })
        .catch(error => console.error(error));
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

function getWeather(){
    fetch(`https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019`, {
        method: 'GET',
        headers:{
            'Accept': 'application/json',
        },
    })
    .then(res => res.json())
    .then(data =>{
        stateWeather = `${data.stateSky.description} ${data.temperatura_actual}ºC`
        tempsContainer.textContent = stateWeather;

        })
    .catch(function(error) {
        console.log(error);
    });
 }

 function replaceBg(){
    let svgContainer = document.getElementById("svg-container") as HTMLDivElement;
    
    if(svgContainer.classList.contains("magicpattern")){
        svgContainer.classList.replace("magicpattern", "pattern2");
    }else{
        svgContainer.classList.replace("pattern2", "magicpattern");
    }

 }