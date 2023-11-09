var mazeArray = [];
document.addEventListener("DOMContentLoaded", function () {
    var inputUploadFile = document.getElementById("input-upload-file");
    inputUploadFile.addEventListener("change", function (event) {
        var inputElement = event.target;
        var uploadedFile = inputElement.files[0];
        createMaze(uploadedFile);
    });
    document.addEventListener("keydown", function (event) {
        var mouse = document.getElementById("mouse");
        var cheese = document.getElementById("cheese");
        var mouseDistanceToLeftBorder = mouse.offsetLeft;
        var mouseDistanceToTopBorder = mouse.offsetTop;
        var _a = getMousePosition(), currentMousePositionRow = _a[0], currentMousePositionColumn = _a[1];
        var cellSize = 50;
        var mazeSize = (mazeArray.length - 1) * cellSize;
        if (event.key == "ArrowRight" && mouseDistanceToLeftBorder < mazeSize) {
            var nextColumn = currentMousePositionColumn + 1;
            var nextCellIsAValidPath = mazeArray[currentMousePositionRow][nextColumn] == '0';
            var nextCellHasCheese = mazeArray[currentMousePositionRow][nextColumn] == 'e';
            if (nextColumn < mazeArray.length && (nextCellIsAValidPath || nextCellHasCheese)) {
                mouseDistanceToLeftBorder += cellSize;
                mouse.style.left = mouseDistanceToLeftBorder + "px";
                // removing mouse from previous position and setting blank cell
                mazeArray[currentMousePositionRow][currentMousePositionColumn] = '0';
                mazeArray[currentMousePositionRow][currentMousePositionColumn + 1] = 'm';
            }
        }
        // mouseDistanceToLeftBorder > 5 -> o rato tem uma distância de 5px com a borda da célula
        if (event.key == "ArrowLeft" && mouseDistanceToLeftBorder > 5) {
            var nextColumn = currentMousePositionColumn - 1;
            var nextCellIsAValidPath = mazeArray[currentMousePositionRow][nextColumn] == '0';
            var nextCellHasCheese = mazeArray[currentMousePositionRow][nextColumn] == 'e';
            if (nextColumn >= 0 && (nextCellIsAValidPath || nextCellHasCheese)) {
                mouseDistanceToLeftBorder -= cellSize;
                mouse.style.left = mouseDistanceToLeftBorder + "px";
                // removing mouse from previous position and setting blank cell
                mazeArray[currentMousePositionRow][currentMousePositionColumn] = '0';
                mazeArray[currentMousePositionRow][currentMousePositionColumn - 1] = 'm';
            }
        }
        if (event.key == "ArrowUp" && mouseDistanceToTopBorder > 5) {
            var nextRow = currentMousePositionRow - 1;
            var nextCellIsAValidPath = mazeArray[nextRow][currentMousePositionColumn] == '0';
            var nextCellHasCheese = mazeArray[nextRow][currentMousePositionColumn] == 'e';
            if (nextRow >= 0 && (nextCellIsAValidPath || nextCellHasCheese)) {
                mouseDistanceToTopBorder -= cellSize;
                mouse.style.top = mouseDistanceToTopBorder + "px";
                // removing mouse from previous position and setting blank cell
                mazeArray[currentMousePositionRow][currentMousePositionColumn] = '0';
                mazeArray[currentMousePositionRow - 1][currentMousePositionColumn] = 'm';
            }
        }
        if (event.key == "ArrowDown") {
            var nextRow = currentMousePositionRow + 1;
            var nextCellIsAValidPath = mazeArray[nextRow][currentMousePositionColumn] == '0';
            var nextCellHasCheese = mazeArray[nextRow][currentMousePositionColumn] == 'e';
            if (nextRow < mazeArray.length && (nextCellIsAValidPath || nextCellHasCheese)) {
                mouseDistanceToTopBorder += cellSize;
                mouse.style.top = mouseDistanceToTopBorder + "px";
                // removing mouse from previous position and setting blank cell
                mazeArray[currentMousePositionRow][currentMousePositionColumn] = '0';
                mazeArray[currentMousePositionRow + 1][currentMousePositionColumn] = 'm';
            }
        }
    });
});
function createMaze(file) {
    var maze = document.getElementById("maze_container");
    maze.innerHTML = "";
    var reader = new FileReader();
    reader.onload = function (event) {
        var fileContent = event.target.result;
        if (typeof fileContent === 'string') {
            var lines = fileContent.trim().split("\n");
            var matrix = lines.map(function (line) { return line.split(''); });
            mazeArray = lines.map(function (line) { return line.replace(/\r/g, '').split(''); });
            for (var rowIndex = 0; rowIndex < mazeArray.length; rowIndex++) {
                var row = document.createElement("div");
                row.classList.add("row");
                for (var column = 0; column < mazeArray[rowIndex].length; column++) {
                    var cell = document.createElement("div");
                    cell.classList.add("cell");
                    if (mazeArray[rowIndex][column] == '1') {
                        cell.classList.add("wall");
                    }
                    // mouse position
                    if (mazeArray[rowIndex][column] == 'm') {
                        var mouse = document.createElement("img");
                        mouse.setAttribute("src", "./images/mouse.svg");
                        mouse.setAttribute("id", "mouse");
                        mouse.setAttribute("alt", "Mouse");
                        cell.appendChild(mouse);
                    }
                    // cheese position
                    if (mazeArray[rowIndex][column] == 'e') {
                        var cheese = document.createElement("img");
                        cheese.setAttribute("src", "./images/cheese.svg");
                        cheese.setAttribute("id", "cheese");
                        cheese.setAttribute("alt", "Cheese");
                        cell.appendChild(cheese);
                    }
                    row.appendChild(cell);
                }
                maze.appendChild(row);
            }
            maze.classList.add("visible");
        }
    };
    reader.readAsText(file);
}
function getMousePosition() {
    var mousePosition = [-1, -1];
    for (var rowIndex = 0; rowIndex < mazeArray.length; rowIndex++) {
        for (var column = 0; column < mazeArray[rowIndex].length; column++) {
            if (mazeArray[rowIndex][column] == 'm') {
                mousePosition[0] = rowIndex;
                mousePosition[1] = column;
            }
        }
    }
    return [mousePosition[0], mousePosition[1]];
}
