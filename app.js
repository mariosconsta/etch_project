const mainContainer = document.getElementById('squaresContainer');
const gridSizeLabel = document.getElementById('gridSizeLabel');
let gridSizeElem = document.createElement('b');
let colorMode = false;

gridSizeElem.textContent = 16;
gridSizeLabel.appendChild(gridSizeElem);

let gridSize = parseInt(gridSizeElem.textContent)

const sketchToggle = document.getElementById('sketchToggle')
sketchToggle.addEventListener('click', (e) => {
    target = e.target
    switch (target.checked) {
        case false:
            console.log('Toggle is not checked');
            mainContainer.removeEventListener('mouseover', startDrawing)
            break;
        case true:
            console.log('Toggle is checked');
            mainContainer.addEventListener('mouseover', startDrawing)
            break;
    }
})

const colorToggle = document.getElementById('colorToggle')
console.log(`Color toggle is: ${colorToggle.checked}`)

let startDrawing = function (e) {
    let target = e.target
    if (target.classList.contains('interactiveDiv')) {
        let drawingColor = setColor(colorMode)
        target.setAttribute('style', `background-color:${drawingColor}`)
    }
}
function createRowDiv(gridSize) {
    const rowDivContainer = document.createElement('div');
    rowDivContainer.setAttribute('class', 'rowDivContainer');

    for (let k = 0; k < gridSize; k++) {
        // console.log(k)
        let interactiveDiv = document.createElement('div');
        interactiveDiv.setAttribute('class', 'interactiveDiv');
        rowDivContainer.appendChild(interactiveDiv);
    }
    mainContainer.appendChild(rowDivContainer);
}

function appendRowDiv(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        createRowDiv(gridSize)
    }

}

function setColor() {

    if (colorToggle.checked) {
        // Generate random values for Red, Green, and Blue components
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);

        // Convert decimal to hexadecimal and ensure two digits
        var hexR = r.toString(16).padStart(2, '0');
        var hexG = g.toString(16).padStart(2, '0');
        var hexB = b.toString(16).padStart(2, '0');

        // Concatenate the components to form the final Hex color
        var hexColor = '#' + hexR + hexG + hexB;

        return hexColor;
    }
    else {
        return '#000000'
    }

}

function clearGrid() {
    [...mainContainer.childNodes].forEach(element => {
        if (element.tagName === 'DIV') {
            element.parentNode.removeChild(element)
        }
    });
}
appendRowDiv(gridSize = gridSize)

const increaseGridSizeBtn = document.getElementById('increaseSizeBtn')
increaseGridSizeBtn.addEventListener('click', (e) => {
    clearGrid()
    gridSize = gridSize + 2;
    gridSizeElem.textContent = gridSize;
    console.log(gridSize)
    appendRowDiv(gridSize = gridSize)
})

const decreaseGridSizeBtn = document.getElementById('decreaseSizeBtn')
decreaseGridSizeBtn.addEventListener('click', (e) => {
    clearGrid()
    gridSize = gridSize - 2;
    gridSizeElem.textContent = gridSize;
    console.log(gridSize)
    appendRowDiv(gridSize = gridSize)
})

const resetButton = document.getElementById('resetSketchBtn');
resetButton.addEventListener('click', (e) => {
    clearGrid()
    appendRowDiv(gridSize = gridSize)
})