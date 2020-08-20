# Hangman Game

Simple game of hangman developed for children. It's my first time developing a game solo, so constructive criticism would be very much appreciated. I am uploading it as I go along for testing purposes.  

## Features
* canvas for drawing the hangman, part of man is drawn with each incorrect guess
* dashes to signify the number of letters in the random word.
* keyboard with eventListeners added to each key for choosing letters
* popup alerts to let the user know if their guess was incorrect

#### Features Left to Implement
* reading words in from an API (not decided yet)

## Technologies Used
* HTML5
* CSS3 (gird and Flexbox) for structuring and styling
* JavaScript for creating the functionality of the game

## Acknowledgements

### Conent
Code for choosing a random word from the array was found on [stackoverflow](https://stackoverflow.com/questions/42211863/pick-a-random-item-from-a-javascript-array) 3rd answer.

The code for adding a class at specific index first answer [here](https://stackoverflow.com/questions/49314884/elementindex-addclass-does-not-work/49314942)

Used [this tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial) to help draw the man. 

The background image is by [chenspec](https://pixabay.com/illustrations/brain-mind-light-bulb-bulb-5431134/) and was found on pixabay.

The code to delete the hangman and get ready for a new game was copied from [here](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect)