const grid = document.querySelector(".grid");
const clear = document.querySelector(".clear");
const newGrid = document.querySelector(".new-grid");
let squares;

function renderGrid(numSquares) {
    for (let i = 0; i < numSquares**2; i++) {
        let square = document.createElement("div");
        square.setAttribute("class", "square");
        const squareWidth = 720/numSquares;
        square.style.width = `${squareWidth}px`;
        grid.appendChild(square);
    };

    squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.classList.add("hovered");
        });    
    });
}

// Set up event listeners
clear.addEventListener("click", () => {
    squares.forEach(square => {
        square.classList.remove("hovered");
    });
});

newGrid.addEventListener("click", () => {
    let input = prompt("How many squares per side do you want in the new grid?");
    squares.forEach(square => {
        square.remove();
    });
    renderGrid(input);
});

// Initial render
renderGrid(16);