// Main.js
import RaceCar from "./racecar2.js";
import Track from "./track.js";

// Define global variables
const CANVAS = document.getElementById('canvas');
const CTX = CANVAS.getContext('2d');
const CAR = new RaceCar(600,400,0, 'sprites/bucat2.png');
const TRACK = new Track(CANVAS,CTX);

// Function to update the game state
function updateGame() {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
    TRACK.draw()
    // Draw the car
    CAR.draw(CTX);
   
    
    // Request the next animation frame
    requestAnimationFrame(updateGame);
}

// Start the game loop
updateGame();
