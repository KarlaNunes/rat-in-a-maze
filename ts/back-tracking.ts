import { mazeArray } from ".";
import { getMousePosition } from "./get-mouse-positon";
import { Stack } from "./stack";

export function backTracking(): boolean {
    const stack = new Stack<number[]>();
    const start = getMousePosition()

    stack.push(start);


    while (!stack.isEmpty()) {
        const currentPosition = stack.top

        if (mazeArray[currentPosition.data[0]][currentPosition.data[1]] === 'e') {
            console.log("Found the exit!");
            return true;
        }

        // Right, Left, Down, Up
        const moves = [ [0, 1], [0, -1], [1, 0], [-1, 0] ];

        let moved = false;
        for (const move of moves) {
            const newX = currentPosition.data[0] + move[0]; // ex: 0 + 0
            const newY = currentPosition.data[1] + move[1];

            if (isValidMove(newX, newY)) {
                stack.push([newX, newY]);
                moved = true;
                break;
            }
        }

        if (!moved) {
            stack.pop(); // Backtrack
        }
    }

    console.log("No exit found.");
    return false;
}

function isValidMove(x: number, y: number) {
    return (
        x >= 0 &&
        x < mazeArray.length &&
        y >= 0 &&
        y < mazeArray[0].length &&
        mazeArray[x][y] !== '0'
    );
}