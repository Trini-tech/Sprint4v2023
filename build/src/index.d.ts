interface Joke {
    joke: string;
    score: number | string;
    date: string;
}
declare let jokeString: string;
declare const reportJokes: Joke[];
declare const button: HTMLButtonElement;
declare let acuditContainer: HTMLDivElement;
declare function askJoke(): void;
declare function writeJoke(acudit: any): void;
declare function saveScores(reportJokes: Joke[]): void;
