# Simon Says Game

This project is an implementation of the classic Simon Says game, created using HTML, CSS, and JavaScript. The game involves the system generating a random sequence of colors, and the player has to repeat the sequence by clicking on the corresponding colored buttons. With each correct input, the game advances to the next level, increasing the sequence length. If the player makes a mistake, the game ends, and the player's highest score is displayed.

## Features

- Random Color Sequence: The game generates a random sequence of colors, and the player must follow the sequence by pressing the corresponding colored buttons.
- Levels: Each time the player correctly follows the sequence, the level increases, and the length of the sequence grows.
- Game Over: If the player makes a mistake, the game ends, and the highest score achieved is displayed.


# How to Play

1. Start the Game: Press any key to start the game.
2. Follow the Sequence: The system will show a color pattern by flashing colored buttons. Click on the buttons in the same order.
3. Progressing Levels: Each time you correctly repeat the sequence, the game moves to the next level with an added color.
4. Game Over: If you click the wrong button, the game will end and show your highest score.

# How It Works

- The game starts when the user presses any key on the keyboard.
- A random color from a predefined set of colors (`yellow`, `red`, `green`, `purple`) is chosen, and the sequence grows as the game progresses.
- The user has to repeat the sequence by clicking the corresponding colored buttons.
- If the user presses the wrong button, the game is over, and the highest score is displayed.
- The game resets, and the player can start again by pressing any key.

# Technologies Used

- HTML: Used for creating the structure of the game, including buttons and headings.
- CSS: Used for styling the game interface, including button colors and flashing effects.
- JavaScript: Used to implement the game logic, including sequence generation, button pressing, validation, and game state management.

# Code Explanation

Key Variables:
- `gameSeq`: Stores the generated sequence of colors.
- `userSeq`: Stores the user's sequence of button presses.
- `started`: A flag to check if the game has started.
- `level`: The current level of the game.
- `Heighest_Score`: Tracks the highest score achieved.
- `btns`: An array of colors representing the available buttons.

Event Listeners:
- `keypress` event: Starts the game when any key is pressed for the first time.
- `click` event: Listens for button clicks and checks if the user's input matches the sequence.

Game Flow:
1. Game Start: The game starts when a key is pressed, and the sequence starts at level 1.
2. Sequence Generation: On each level, the game randomly selects a color and adds it to the sequence.
3. Button Flashing: The button corresponding to the selected color flashes to indicate which color the player needs to click.
4. User Input: The user clicks buttons in the same order as the generated sequence.
5. Validation: If the user makes a mistake, the game ends and displays the highest score.


Game Over:
When the player clicks a wrong button, the game displays a Game Over message along with the highest score. The background color of the page will flash red, signaling that the game is over.

Game Reset:
After the game ends, the sequence and score are reset, and the player can press any key to start a new game.

# How to Run

1. Clone the repository or download the project files.
2. Open the `index.html` file in a web browser.
3. Play the game by pressing any key to start.

---
..
# Enjoy playing Simon Says!
