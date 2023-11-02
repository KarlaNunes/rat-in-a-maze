document.addEventListener("DOMContentLoaded", () => {
  const inputUploadFile = document.getElementById("input-upload-file")

  inputUploadFile.addEventListener("change", (event) => {
      const uploadedFile = event.target.files[0];

      createMaze(uploadedFile)
  })
})

function createMaze(file) {

  const maze = document.getElementById("maze_container")
  
  const reader = new FileReader();

  reader.onload = (event) => {
    const fileContent = event.target.result
    
    const lines = fileContent.trim().split("\n")

    const matrix = lines.map(line => line.split(''));

    const mazeArray = matrix.map(row => row.map(column => column.split("")))
    
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
  

  reader.readAsText(file)
}
