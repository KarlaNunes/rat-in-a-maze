document.addEventListener("DOMContentLoaded", function() {
    createBlankMaze();
    generateAnExit();
});

const mazeWidth = 10;
const mazeHeight = 10;

function createBlankMaze() {

    let rowIndex, colIndex;

    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    for (rowIndex = 1; rowIndex <= mazeHeight; rowIndex++) {

        const row = document.createElement("tr");

        for (colIndex = 1; colIndex <= mazeWidth; colIndex++) {

            const col = document.createElement("td");
            
            const isStartPosition = rowIndex === 1 && colIndex === 1 
            const isFinishPosition = rowIndex === mazeHeight && colIndex === mazeWidth

            if (isStartPosition) {
                col.style.backgroundColor = "rgb(244,0,0)";
                col.setAttribute("type", "start");

            } else if (isFinishPosition) {
                
                col.style.backgroundColor = "rgb(0,244,0)";
                col.setAttribute("type", "finish");

            } else {

                col.style.backgroundColor = "rgb(255,255,255)";

            }
            col.setAttribute("id", "cell_" + rowIndex + "_" + colIndex);

            row.appendChild(col);

        }

        tbody.appendChild(row);

    }
    
    table.appendChild(tbody);

    document.getElementById("maze_container").appendChild(table);
}

function generateAnExit() {
    let currentCell;

    let rowIndex = 1;
    let colIndex = 1;

    const exits = [];

    for (let exit = 1; exit < mazeWidth - 1; exit++) {
        exits.push("right");
        exits.push("bottom");
    }

    for (exitIndex = 0; exitIndex < exits.length; exitIndex++) {

        switch(exits[exitIndex]) {

            case "right":

                colIndex = colIndex + 1;
                break;

            case "bottom":

                rowIndex = rowIndex + 1;
                break;

        }

        currentCell = document.getElementById("cell_" + rowIndex + "_" + colIndex);
        
        currentCell.style.backgroundColor = "#f00000";

    }
}