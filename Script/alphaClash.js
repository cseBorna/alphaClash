// function play() {
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playgroundSection = document.getElementById('playground');
//     playgroundSection.classList.remove('hidden');
// }

// function handleKeyboardKeyUpEvent(event){
//     const playerPressed = event.key;
//     const expectedAlphabet = playerPressed.toUpperCase();
//     console.log('Player Pressed ',expectedAlphabet);

//     //get the expected to press
//     const currentAlphabetElement = document.getElementById('current-alphabet');
//     const currentAlphabet = currentAlphabetElement.innerText;
//     console.log(expectedAlphabet, currentAlphabet);

//     //check equal or not
//     if(expectedAlphabet === currentAlphabet){
//         console.log('you get a point');
//     }else{
//         console.log('you lose a life');
//     }
// }

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;

    ////key player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    //check whether right or wrong key pressed
    if (expectedAlphabet === playerPressed) {
        console.log('you get a point');

        const currentScore = getTextElementValueById('current-score');
        // console.log(currentScore);
        const updatedScore = currentScore + 1;

        setTextElementValueById('current-score', updatedScore);

        // ------------------------------------------------------
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScoreValue = parseInt(currentScoreText);

        // //increase score
        // const newScore = currentScoreValue+1;

        // currentScoreElement.innerText = newScore;

       
        removeBackgroundColorById(expectedAlphabet);
        continueGame();

    } else {
        console.log('you lose a life');

        const currentLife = getTextElementValueById('current-life');

        const updatedLife = currentLife - 1;

        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }

// ----------------------------------------------------------------------
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLifeValue = parseInt(currentLifeText);

        // //increase score
        // const newLife = currentLifeValue - 1;

        // currentLifeElement.innerText = newLife;

    }

}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame() {
    const alphabet = getRandomAlphabet();
    console.log('Your Random Alphabet ', alphabet);

    //get random generated alphabet on the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('playground');

    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    // removeBackgroundColorById('alphabet');

    continueGame();
}

function gameOver(){
    hideElementById('playground');
    showElementById('final-score');

    //update final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}