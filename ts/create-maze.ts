import { updateMaze } from ".";

export function createMaze(file: File) {

    const maze = document.getElementById("maze_container")
  
    maze.innerHTML = ""
    
    const reader = new FileReader();
  
    reader.onload = (event) => {
      const fileContent = event.target.result
  
      if (typeof fileContent === 'string') {
        const lines = fileContent.trim().split("\n");
        
        let newMazeArray = lines.map(line => line.replace(/\r/g, '').split(''));

        updateMaze(newMazeArray)
      
        for (let rowIndex = 0; rowIndex < newMazeArray.length; rowIndex++) {
            let row = document.createElement("div")
            row.classList.add("row")
  
            for (let column = 0; column < newMazeArray[rowIndex].length; column++) {
                let cell = document.createElement("div")
                cell.classList.add("cell")
                
                if (newMazeArray[rowIndex][column] == '1') {
                    cell.classList.add("wall")
                }
  
                // mouse position
                if (newMazeArray[rowIndex][column] == 'm') {
                  const mouse = document.createElement("img")
                  mouse.setAttribute("src", "./images/mouse.svg")
                  mouse.setAttribute("id", "mouse")
                  mouse.setAttribute("alt", "Mouse")
                  cell.appendChild(mouse)
                }
  
                // cheese position
                if (newMazeArray[rowIndex][column] == 'e') {
                  const cheese = document.createElement("img")
                  cheese.setAttribute("src", "./images/cheese.svg")
                  cheese.setAttribute("id", "cheese")
                  cheese.setAttribute("alt", "Cheese")
                  cell.appendChild(cheese)
                }
  
  
                row.appendChild(cell)
            }
  
            maze.appendChild(row)
        }
  
        maze.classList.add("visible")
  
      }
    }
    
    reader.readAsText(file)
}