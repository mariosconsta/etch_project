const mainContainer = document.getElementById('squaresContainer');



function createRowDiv() {
    const rowDivContainer = document.createElement('div');
    rowDivContainer.setAttribute('id', 'rowDivContainer');

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

function getRandomColor() {
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
appendRowDiv()


console.log()
// const interactiveDivs = mainContainer.querySelectorAll('#rowDivContainer').querySelectorAll('.interactiveDiv')
// let interactiveRowDivs = document.querySelector('#rowDivContainer')

mainContainer.addEventListener('mouseover', (e) => {
    let target = e.target

    // console.log(target.classList)
    if (target.classList.contains('interactiveDiv')) {
        console.log('weeee')
        let randomColor = getRandomColor()
        target.setAttribute('style', `background-color:${randomColor}`)
    }
})