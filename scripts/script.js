// grab variables from the css and html
let container = document.querySelector(".container");
let color = 'black';

// creates the grid for the etch a sketch
for (i=0;i<16;i++){
    let temp = document.createElement("div");
    temp.classList.add("grid");
    container.appendChild(temp);
}

// attachs an event listener to each grid to set to hovers
let grids = document.querySelectorAll(".grid");
grids.forEach((grid) => { 
    grid.addEventListener("mouseover",draw)
});

// updates the root variable for the active selected color
function changeColor(color){
    document.documentElement.style.setProperty('--active',color);
}

// function that changes the class of a grid based on if it is hovered
function draw(e){
    e.target.classList.add("drawn");
}

// function that changes the class of a grid based on if it is hovered
function erase(e){
    e.target.classList.remove("drawn");
}

// attachs the reset function to the reset button
const resetButton = document.getElementById("resetbutton");
// resetButton.style.backgroundColor = "blue";
resetButton.addEventListener("click",reset);

// erase button
const eraseButton = document.getElementById("erasebutton");
eraseButton.addEventListener("click",function(){
    let grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => { 
        grid.addEventListener("mouseover",erase);
    });
});

// black button
const blackButton = document.getElementById("blackbutton");
blackButton.addEventListener("click",function(){
    let grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => { 
        grid.removeEventListener("mouseover",erase);
    });
});

// random



// function that resets the all of the grids
function reset(e) {
    grids.forEach((grid) => {
        grid.classList.remove("drawn")
    });
    newGrid()
}

// function that asks the user for a size of grid and filters to 1 to 100
function askSize(){
    number = prompt("Enter grid size between 1 to 100:");
    if (number<=100 && number>=1){
        return number
    }
    else {
        alert("Incorrect grid size, resetting to default.")
        return 4
    }
}

// function reset the grid with the new grid size
function newGrid() {
    let number = askSize();
    container.style.gridTemplateColumns = `repeat(${number},1fr)`;
    container.style.gridTemplateRows = `repeat(${number},1fr)`;

    container.innerHTML = "";
    
    changeSize(number);

    for (i=0;i<number**2;i++){
        let temp = document.createElement("div");
        temp.classList.add("grid");
        container.appendChild(temp);
    }
    let grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => { 
        grid.addEventListener("mouseover",draw) 
    });
    
}

// function calculates the of each of the grid elements
function changeSize(number){
    divide = 80/number;
    ans = divide + 'vh';
    document.documentElement.style.setProperty('--fraction',ans);
}