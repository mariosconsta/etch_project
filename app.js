const mainContainer = document.getElementById('squaresContainer');
console.log(`main container: ${mainContainer}`)


function createRowDiv() {
    const rowDivContainer = document.createElement('div');
    rowDivContainer.setAttribute('id', 'rowDivContainer');
    console.log(`rowDivContainer: ${rowDivContainer}`)

    for (let k = 0; k < 17; k++) {
        let interactiveDiv = document.createElement('div');
        interactiveDiv.setAttribute('class', 'interactiveDiv');
        rowDivContainer.appendChild(interactiveDiv);
    }
    mainContainer.appendChild(rowDivContainer);
}


function appendRowDiv() {
    for (let i = 0; i < 17; i++) {
        createRowDiv()
    }
}

// createRowDiv()
appendRowDiv()