# Full-Stack War Card Game Simulator 

The application allows the user to choose whether they want to be player one or player two. It then simulates a game of war on the server side and returns a message to the user telling them if the game resulted in a win, loss, or draw. The goal of this project was to practice building a functional, multi-step program and learn how to build a working server with vanilla Node. 

** ADD LINK AND SCREENSHOT

**Link to project:** https://war-lxwr.onrender.com/

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js

The server.js file contains routes for the homepage and the API, as well as the CSS and JS files. The HTTP module is used to create the server, the file system module is used to read all the required documents from the disk, the URL module is used to parse the URL from the request and save the pathname in a variable called page, the querystring module is used to access any queries in the URL and their corresponding parameters and save them in a variable called params, and the figlet module is used to return a stylized 404 page in case of any errors.

The player starts by choosing to be either player one or player two and submitting their choice via form containing a text input. An event listener on the submit button triggers an async function in the JS file that submits a fetch request containing the player’s choice to the API route. The game is then simulated on the server side. 

First, a deck of cards is generated dynamically by looping through an array of symbols and an array of face values. Each card is an object containing a display property, which is equal to its face value and suit, and a value property, which is a number ranging from 0 for twos up to 12 for aces.

Then the cards are dealt to each player using Math.random(). Once the cards are dealt, the game can begin. A function called playHand runs in a loop until either 5,000 hands have been simulated or there is a winner. It pushes one card from each player’s hand to an two-dimensional array called playedCards. It then submits that array as an argument to a function called checkForWin. checkForWin compares the last card in each of the subarrays. If there is a winner it pushes the cards in both subarrays to their hand. If there isn’t it calls the war function, passing playedCards as an argument. The war function pushes four more cards to each player’s subarray, checking to make sure each player has enough cards to play. It then resubmits playedCards to checkForWin which either determines a winner or initiates another round of war.

Once the loop terminates the program determines the outcome and saves it to a variable called winner. The value of that variable is then compared to the player number received in the fetch request and the result is returned to the async function as a JSON object, which is then plugged in to the DOM so the player can see it. 

## Optimizations
One thing I thought of after finishing the code for this project was that instead of writing separate functions for playHand and war I could have written one function that takes the playedCards array and an integer representing the number of cards to be played. Then if there was a pair of matching cards the checkForWin function could just call playHand(playedCards, 4) to play a round of war.

## Lessons Learned:

This project taught me the basics of building fulls tack applications with vanilla Node. It also taught me the importance of planning out my projects and thinking about architecture and logic before I start coding. I ran into a few bugs that resulted from logical errors in the program that took much longer to fix than they would have taken to simply think through methodically before I got started. 
