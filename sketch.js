

//classes

class Grid {
  constructor(width, height, cellSize){
    this.width = width;
    this.height = height;
    this.cellSize = cellSize;
  }
    getCell(x, y){
        return this.gridArray[y][x];
    } 

    setCell(x, y, cl){
        this.gridArray[y][x] = cl;
    }

    clearGrid (){
        let ar = [];
        for (let i = 0; i < this.width; i++){
            let row = [];
            for (let j = 0; j < this.height; j++){
                row.push (new Cell ("E"));
            }
            ar.push(row);
        }
        this.gridArray = ar;
    }

    randomizeArray(){
        for (let i = 0; i < this.height; i++){
            for (let j = 0; j < this.width; j++){
                //random integer from 0 to 1
                let ran = Math.floor(Math.random() * 3);
                if (ran == 0){
                    this.setCell(i, j, new Cell ("E"));
                }
                else if (ran == 1){
                    this.setCell(i, j, new Cell ("W"));
                }
                else{
                    this.setCell(i, j, new Cell ("F"));
                }
            }
        }
    }
}

class Cell {
    constructor(state){
        this.state = state;
        this.getColor();
    }
    getColor (){
        //empty
        if (this.state == "E"){
        this.color = "#E2E2E2";
        }
        //wall
        else if (this.state == "W"){
        this.color = "#353B3C";
        }
        //start
        else if (this.state == "S"){
        this.color = "#EE6C4D";
        }
        //finish
        else if (this.state == "F"){
            this.color = "#188FA7"
        }
        else{
        this.color = "#1C110A";
        }
    }
}





//creates a grid from width and height, has every cell as empty ("E")
function createGrid(width, height){
    var row = []
    var grid = []
    for (i = 0; i < width; i++){
        row.push("E");
    }
    for (i = 0; i < height; i++){
        grid.push(row);
    }
    return grid;
}

var mainGrid;

function drawGrid(grid){
    for (i = 0; i < grid.height; i++){
        //draw one row
        let row = grid.gridArray[i];
        let rowLength = row.length;
        for (j = 0; j < rowLength; j++){
            let currentCell = row[j];
            let xPos = j * grid.cellSize;
            let yPos = i * grid.cellSize;
            fill(currentCell.color);
            square(xPos, yPos, grid.cellSize);
        }
    }
}



function setup() {
    createCanvas(1000, 1000);
    mainGrid = new Grid (100, 100, 10);
    mainGrid.clearGrid();
    background(51);
    frameRate(30);
}


function draw() {
    drawGrid(mainGrid);
    mainGrid.randomizeArray();
}