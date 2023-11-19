import { mazeArray } from "."
import { getMousePosition } from "./get-mouse-position"

export function handleKeyPress(event: KeyboardEvent) {
    let mouse = document.getElementById("mouse")  
    let mouseDistanceToLeftBorder = mouse.offsetLeft
    let mouseDistanceToTopBorder = mouse.offsetTop
      
    let [currentMousePositionRow, currentMousePositionColumn] = getMousePosition()
  
    
    const cellSize = 50 
  
    const mazeSize = (mazeArray.length - 1) * cellSize
  
    if (event.key == "ArrowRight" && mouseDistanceToLeftBorder < mazeSize) { 
  
      const nextColumn = currentMousePositionColumn + 1
  
      const nextCellIsAValidPath = mazeArray[currentMousePositionRow][nextColumn] == '0'
      const nextCellHasCheese = mazeArray[currentMousePositionRow][nextColumn] == 'e'
  
      if (nextColumn < mazeArray.length && (nextCellIsAValidPath || nextCellHasCheese)) {
        mouseDistanceToLeftBorder += cellSize
        mouse.style.left = mouseDistanceToLeftBorder + "px";
        
        // removing mouse from previous position and setting blank cell
        mazeArray[currentMousePositionRow][currentMousePositionColumn] = '0'
        mazeArray[currentMousePositionRow][currentMousePositionColumn + 1] = 'm'
      }
    }
  
    
    // mouseDistanceToLeftBorder > 5 -> o rato tem uma distância de 5px com a borda da célula
    if (event.key == "ArrowLeft" && mouseDistanceToLeftBorder > 5) {
  
      const nextColumn = currentMousePositionColumn - 1
      const nextCellIsAValidPath = mazeArray[currentMousePositionRow][nextColumn] == '0'
      const nextCellHasCheese = mazeArray[currentMousePositionRow][nextColumn] == 'e'
  
      if (nextColumn >= 0 && (nextCellIsAValidPath || nextCellHasCheese)) {
        mouseDistanceToLeftBorder -= cellSize
        mouse.style.left = mouseDistanceToLeftBorder + "px";
  
        // removing mouse from previous position and setting blank cell
        mazeArray[currentMousePositionRow][currentMousePositionColumn] = '0'
        mazeArray[currentMousePositionRow][currentMousePositionColumn - 1] = 'm'
      }
    }
    
    if (event.key == "ArrowUp" && mouseDistanceToTopBorder > 5) {
  
      const nextRow = currentMousePositionRow - 1 
      const nextCellIsAValidPath = mazeArray[nextRow][currentMousePositionColumn] == '0' 
      const nextCellHasCheese = mazeArray[nextRow][currentMousePositionColumn] == 'e'
  
      if (nextRow >= 0 && (nextCellIsAValidPath || nextCellHasCheese)) {
        mouseDistanceToTopBorder -= cellSize
        mouse.style.top = mouseDistanceToTopBorder + "px";
        
        // removing mouse from previous position and setting blank cell
        mazeArray[currentMousePositionRow][currentMousePositionColumn] = '0'
        mazeArray[currentMousePositionRow - 1][currentMousePositionColumn] = 'm'
      }
    }
  
    if (event.key == "ArrowDown") {
  
      const nextRow = currentMousePositionRow + 1
      const nextCellIsAValidPath = mazeArray[nextRow][currentMousePositionColumn] == '0' 
      const nextCellHasCheese = mazeArray[nextRow][currentMousePositionColumn] == 'e'
  
      if (nextRow < mazeArray.length && (nextCellIsAValidPath || nextCellHasCheese)) {
        mouseDistanceToTopBorder += cellSize
        mouse.style.top = mouseDistanceToTopBorder + "px";
        
        // removing mouse from previous position and setting blank cell
        mazeArray[currentMousePositionRow][currentMousePositionColumn] = '0'
        mazeArray[currentMousePositionRow + 1][currentMousePositionColumn] = 'm'
      }
    }
  }