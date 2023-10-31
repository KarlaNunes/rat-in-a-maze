document.addEventListener("DOMContentLoaded", function() {
    createBlankMaze();
});


function createBlankMaze() {
    const table1 = [
        [0,1,0,1],
        [0,0,0,0],
        [0,1,0,1],
        [0,1,0,0],
    ]

    const table2 = [
        [0,0,0,1, 0, 1],
        [0,1,0,0, 0, 0],
        [1,1,0,1, 1, 1],
        [0,1,0,0, 0, 0],
        [0,1,0,1, 0, 1],
        [0,0,0,1, 0, 0],
    ]

    const table3 = [
        [0, 1, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 1, 1, 1, 1, 0],
        [0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 1, 1, 1, 0, 1, 1],
        [0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
        [0, 1, 1, 1, 0, 1, 1, 0, 1, 0],
        [0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 1, 1, 1, 0, 1, 1, 0]
    ]

    // const table4 = [
    //     [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
    //     [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
    //     [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
    //     [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
    //     [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
    //     [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
    //     [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
    //     [0, 1, 0, 1, 1, 0, 0, 1, 1, 0],
    //     [1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
    //     [0, 1, 0, 1, 1, 0, 0, 1, 1, 0]
    // ]

    const mazeArray = table3;
    
    const maze = document.getElementById("maze_container")
    // const mouse = document.getElementById("mouse")
    // const cheese = document.getElementById("cheese")

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
    

}
