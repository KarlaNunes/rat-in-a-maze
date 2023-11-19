// import { mazeArray } from ".";
import { getMousePosition } from "./get-mouse-position";
import { Stack } from "./stack";

export function backTracking(mazeArray: string[][]) {
    const stack = new Stack<number[]>();
    const start = getMousePosition();

    stack.push(start);

    let foundExit = false

    while (!foundExit) {
        const currentPosition = stack.top

        if (mazeArray[currentPosition.data[0]][currentPosition.data[1]] === 'e') {
            foundExit = true
            break
        }

        // Right, Left, Down, Up
        const moves = [ [0, 1], [0, -1], [1, 0], [-1, 0] ];

        let moved = false;
        
        for (const move of moves) {
            const newX = currentPosition.data[0] + move[0]; // ex: 0 + 0
            const newY = currentPosition.data[1] + move[1];

            if (isValidMove(newX, newY, mazeArray)) {
                if (mazeArray[newX][newY] === 'e') {
                    foundExit = true;
                    console.log("Found the cheese!")
                    console.log("Position: ", newX, ",", newY)
                    break
                }

                stack.push([newX, newY]);
                mazeArray[currentPosition.data[0]][currentPosition.data[1]] = '2'
                mazeArray[newX][newY] = 'm'
                moved = true;
                break;
            }
        }

        if (!moved) {
            stack.pop(); // Backtrack
        }
    }

    if (!foundExit) {
        console.log("No exit found.");
    }

    return foundExit;
}

function isValidMove(x: number, y: number, mazeArray: string[][]) {
    return (
        x >= 0 &&
        x < mazeArray.length &&
        y >= 0 &&
        y < mazeArray[0].length &&
        (mazeArray[x][y] === '0' || mazeArray[x][y] === 'e') 
    );
} 