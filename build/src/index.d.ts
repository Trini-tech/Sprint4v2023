interface Joke {
    joke: string;
    score: number | string;
    date: string;
}
declare let twoJokesAPI: string[];
declare let jokeString: string;
declare let stateWeather: string;
declare const reportJokes: Joke[];
declare const button: HTMLButtonElement;
declare let acuditContainer: HTMLDivElement;
declare let tempsContainer: HTMLDivElement;
declare function askJoke(): void;
declare function saveScores(reportJokes: Joke[]): void;
declare function getWeather(): void;
declare function replaceBg(): void;
