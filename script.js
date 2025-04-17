const grid = document.querySelector(".grid");
const clear = document.querySelector(".clear");
const newGrid = document.querySelector(".new-grid");

function renderGrid(numSquares) {
    for (let i = 0; i < numSquares**2; i++) {
        let square = document.createElement("div");
        square.setAttribute("class", "square");
        const squareWidth = 720/numSquares;
        square.style.width = `${squareWidth}px`;
        grid.appendChild(square);
    };
    
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.addEventListener("mouseover", (event) => {
            square.classList.add("hovered");
        })    
    });
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
}

renderGrid(16);