let mazeArray = []

document.addEventListener("DOMContentLoaded", () => {
  const inputUploadFile = document.getElementById("input-upload-file")

  inputUploadFile.addEventListener("change", (event) => {
    const inputElement = event.target as HTMLInputElement

      const uploadedFile = inputElement.files[0];

      createMaze(uploadedFile)
  })


  document.addEventListener("keydown", (event) => {
    let mouse = document.getElementById("mouse")
    let cheese = document.getElementById("cheese")
  
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
  })
})

function createMaze(file) {

  const maze = document.getElementById("maze_container")

  maze.innerHTML = ""
  
  const reader = new FileReader();

  reader.onload = (event) => {
    const fileContent = event.target.result

    if (typeof fileContent === 'string') {
      const lines = fileContent.trim().split("\n");
      
      const matrix = lines.map(line => line.split(''));

    mazeArray = lines.map(line => line.replace(/\r/g, '').split(''));
    
    for (let rowIndex = 0; rowIndex < mazeArray.length; rowIndex++) {
        let row = document.createElement("div")
        row.classList.add("row")

        for (let column = 0; column < mazeArray[rowIndex].length; column++) {
            let cell = document.createElement("div")
            cell.classList.add("cell")
            
            if (mazeArray[rowIndex][column] == '1') {
                cell.classList.add("wall")
            }

            // mouse position
            if (mazeArray[rowIndex][column] == 'm') {
              const mouse = document.createElement("img")
              mouse.setAttribute("src", "./images/mouse.svg")
              mouse.setAttribute("id", "mouse")
              mouse.setAttribute("alt", "Mouse")
              cell.appendChild(mouse)
            }

            // cheese position
            if (mazeArray[rowIndex][column] == 'e') {
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

function getMousePosition() {
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

