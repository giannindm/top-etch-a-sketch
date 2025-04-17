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
        square.style.opacity = 0;
        grid.appendChild(square);
    };

    squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.classList.add("hovered");
            let currentOpacity = parseFloat(square.style.opacity) || 0;
            if (currentOpacity < 1) {
            square.style.opacity = (currentOpacity + 0.1).toFixed(2);
            }
        });    
    });
}

// Set up event listeners
clear.addEventListener("click", () => {
    squares.forEach(square => {
        square.classList.remove("hovered");
        square.style.opacity = 0;
    });
});

newGrid.addEventListener("click", () => {
    const input = parseInt(prompt("How many squares per side do you want in the new grid?"));
    squares.forEach(square => {
        square.remove();
    });
    if (!isNaN(input) && input > 0 && input <= 100) {
        renderGrid(input);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});

// Initial render
renderGrid(16);