

//classes

class Grid {
  constructor(width, height, cellSize){
    this.width = width;
    this.height = height;
    this.cellSize = cellSize;
  }
    getCell(x, y){
        return this.gridArray[x][y];
    } 

    setCell(x, y, cl){
        this.gridArray[x][y] = cl;
    }

    setCellSet(x, y, s){
        this.gridArray[x][y].changeSet(s);
    }

    clearGrid (){
        let ar = [];
        for (let i = 0; i < this.height; i++){
            let row = [];
            for (let j = 0; j < this.width; j++){
                row.push (new Cell ("E", 0));
            }
            ar.push(row);
        }
        this.gridArray = ar;
    }

    randomizeArray(){
        for (let i = 0; i < this.height; i++){
            for (let j = 0; j < this.width; j++){
                //random integer from 0 to 1
                let ran = Math.floor(Math.random() * 20);
                if (ran == 0){
                    this.setCell(i, j, new Cell ("F", 0));
                }
                else if (ran == 1){
                    this.setCell(i, j, new Cell ("W", 0));
                }
                else if (ran == 2){
                    this.setCell(i, j, new Cell ("S", 0 ));
                }
                else{
                    this.setCell(i, j, new Cell ("E", 0 ));
                }
            }
        }
    }

    buildOuterWall(){
        this.gridArray[0].fill(new Cell("W", 0));
        this.gridArray[this.gridArray.length - 1].fill(new Cell("W", 0));
        for (let i = 0; i < this.height; i++){
            this.gridArray[i][0] = new Cell ("W", 0);
            this.gridArray[i][this.width - 1] = new Cell("W", 0);
        }
    }

    eller_alg(){
        //let firstRow = this.gridArray[0];
        //firstRow.fill(new Cell ("W", 0));
        
        //creates individual sets for the first row
        for (let i = 0; i < this.width; i++){

        }
    }
}

class Cell {
    constructor(state, set){
        this.state = state;
        this.getColor();
        this.set = set;
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
    changeSet(set){
        this.set = set;
    }
}





var mainGrid;




function drawGrid(grid){
    for (i = 0; i < grid.height; i++){
        //draw one row
        let row = grid.gridArray[i];
        let rowLength = grid.width; // same as row.length
        for (j = 0; j < rowLength; j++){
            let currentCell = row[j];
            let xPos = j * grid.cellSize;
            let yPos = i * grid.cellSize;
            fill(currentCell.color);
            noStroke();
            square(xPos, yPos, grid.cellSize);
            fill(255, 204, 0);
            text(currentCell.set, xPos, yPos, grid.cellSize, grid.cellSize);
        }
    }
}


function setup() {
    createCanvas(displayWidth, displayHeight);
    mainGrid = new Grid (25, 30, 10);
    mainGrid.clearGrid();
    background(120);
    frameRate(10);
}


function draw() {
    drawGrid(mainGrid);
    //mainGrid.randomizeArray();
    mainGrid.eller_alg();
    mainGrid.buildOuterWall();
}