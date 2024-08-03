let film = "";
let dfilm = "";
let chances = 20;
let gameStarted = false;

function startGame() {
    film = document.getElementById("film").value.toLowerCase();
    if (!film) {
        alert("Please enter a film name.");
        return;
    }
    dfilm = film.replace(/./g, char => (char === ' ' ? ' ' : '-'));
    document.getElementById("startScreen").style.display = 'none';
    document.getElementById("game").style.display = 'flex';
    document.getElementById("message").innerText = "";
    document.getElementById("guess").disabled = false;
    document.getElementById("restartButton").style.display = 'none';
    updateGameDisplay();
    gameStarted = true;
}

function updateGameDisplay() {
    document.getElementById("maskedFilm").innerText = dfilm;
    document.getElementById("chances").innerText = `Chances remaining: ${chances}`;
}

function makeGuess() {
    if (!gameStarted) {
        alert("Game has not started yet. Please start the game.");
        return;
    }

    const guess = document.getElementById("guess").value.toLowerCase();
    document.getElementById("guess").value = "";

    if (guess.length !== 1) {
        alert("Please enter a single character.");
        return;
    }

    let found = false;
    let newDfilm = "";
    for (let i = 0; i < film.length; i++) {
        if (film[i] === guess) {
            newDfilm += guess;
            found = true;
        } else {
            newDfilm += dfilm[i];
        }
    }
    dfilm = newDfilm;

    if (!found) {
        chances--;
        if (chances === 0) {
            document.getElementById("message").innerText = `YOU LOSE, the film was "${film}"`;
            document.getElementById("message").classList.remove("win");
            document.getElementById("guess").disabled = true;
            document.getElementById("restartButton").style.display = 'block';
            return;
        }
    } else if (dfilm === film) {
        document.getElementById("maskedFilm").innerText = dfilm;
        document.getElementById("message").innerText = "YOU WIN!";
        document.getElementById("message").classList.add("win");
        document.getElementById("guess").disabled = true;
        document.getElementById("restartButton").style.display = 'block';
        return;
    }

    updateGameDisplay();
}

function restartGame() {
    film = "";
    dfilm = "";
    chances = 9;
    document.getElementById("film").value = "";
    document.getElementById("startScreen").style.display = 'flex';
    document.getElementById("game").style.display = 'none';
    gameStarted = false;
}
