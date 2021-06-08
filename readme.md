# Hangman Game

Simple game of hangman developed for children. When the page loads a series of dashes, corresponding to the number of letters in the particular word, are generated to the screen. If a guess is incorrect an alert box will pop up informing the user that they need to try again and a component of the hangman appear on the canvas. If the guess is correct the chosen letter will appear just above the corresponding dash. Once the word is complete, or the hangman fully drawn, an alert box informs the user what the word was and invites them to play again. 
It's my first time developing a game solo, so constructive criticism would be very much appreciated.

This game looks best on tablet and laptop screens.

## Features
* canvas for drawing the hangman, part of man is drawn with each incorrect guess
* dashes to signify the number of letters in the randomly chosen word.
* keyboard with eventListeners added to each key for choosing letters
* popup alerts to inform the user if a guess is incorrect
* popup confirm box asking the user if the wish to play again if:
        * they have exceeded the number of incorrect guesses
        * they guessed the word

## Technologies Used
* HTML5
* CSS3 (gird and Flexbox) for structuring and styling
* JavaScript for creating the functionality of the game

## Acknowledgements

### Content
Code for choosing a random word from the array was found on [stackoverflow](https://stackoverflow.com/questions/42211863/pick-a-random-item-from-a-javascript-array) 3rd answer.

The code for adding a class at specific index first answer [here](https://stackoverflow.com/questions/49314884/elementindex-addclass-does-not-work/49314942)

I used [this tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial) to help draw the man. 

The code to delete the hangman and get ready for a new game was copied from [here](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect)

I received inspiration for the words in the array from [Oxford Owl](https://home.oxfordowl.co.uk/english/primary-spelling/spelling-year-5-age-9-10/) and from [kidspot](https://www.kidspot.com.au/parenting/preschool/spelling-bee-words-910/news-story/d2c32eb9af7b81043c71eb0a7d484809). I was looking for words suitable or 9 and 10 year olds. 