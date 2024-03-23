function randomGuessGame()
{
    const randomNumber = Math.floor(Math.random()*100)+1;
    let guess;

    while(true)
    {
        guess=parseInt(prompt("Enter the number between 1 to 100"));

        if(isNaN(guess) || guess<1 || guess >100)
        {
            alert("Please enter a valid number between 1 to 100")
        }

        if(guess === randomNumber)
        {
            alert("Congratulations! You guessed right number")
        }

        if(guess< randomNumber)
        {
            alert("The number is higher. Try again!")
        }
        if(guess > randomNumber)
        {
            alert("The number is lower. Tru again!")
        }
    }
}
randomGuessGame();