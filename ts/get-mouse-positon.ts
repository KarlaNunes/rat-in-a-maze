import { mazeArray } from "."

export function getMousePosition() {
    let mousePosition = [-1, -1]
  
    for (let rowIndex = 0; rowIndex < mazeArray.length; rowIndex++) {
      for (let column = 0; column < mazeArray[rowIndex].length; column++) {
          if (mazeArray[rowIndex][column] == 'm') {
            mousePosition[0] = rowIndex
            mousePosition[1] = column
          }
      }
    }
  
    return [mousePosition[0], mousePosition[1]]
}