document.addEventListener("DOMContentLoaded", () => {
  const inputUploadFile = document.getElementById("input-upload-file")

  inputUploadFile.addEventListener("change", (event) => {
      const uploadedFile = event.target.files[0];

      createBlankMaze(uploadedFile)
  })
})

function createBlankMaze(file) {

  const maze = document.getElementById("maze_container")
  // const mouse = document.getElementById("mouse")
  // const cheese = document.getElementById("cheese")
  
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
            
            if (mazeArray[rowIndex][column] == 1) {
                cell.classList.add("wall")
            }

            row.appendChild(cell)
        }

        maze.appendChild(row)
    }

    maze.classList.add("visible")

  }
  

  reader.readAsText(file)
}
