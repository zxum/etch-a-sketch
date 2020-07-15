const resizeBtn = document.querySelector('#resizebtn');
const sizeInput = document.querySelector('#size-input');
sizeInput.value = "";
checkInput();

//DEFAULT SIZE OF CANVAS
function checkInput() {
    if (sizeInput.value == "") {
        resizeInput = 16;
        createCanvas();
        drawCell();
    } else if (sizeInput.value != "") {
        resizeInput = sizeInput.value;
        createCanvas();
        drawCell();
    } else {
        console.log("Error in creating canvas")
    }
}

//RESIZE BUTTON RESIZES CANVAS
resizeBtn.addEventListener('click', resizeCanvas);

function resizeCanvas() {
    checkInput();
    sizeInput.value = "";
}

//CREATES A CANVAS WITH CELLS
function createCanvas() {
    let canvasSize = '<div id="box">';
    for (let i = 0; i < resizeInput; i++) {
        canvasSize += '<div class="row">'

        for (let j = 0; j < resizeInput; j++) {
            canvasSize += `<div class="cell" id="${i+1},${j+1}"></div>`;
        }

        canvasSize += '</div>'
    }
    canvasSize += '</div>'

    const canvas = document.querySelector("#container");
    canvas.innerHTML = canvasSize;
}

//DRAW INSIDE THE CELLS
function drawCell() {
    var cells = document.getElementsByClassName('cell');

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseenter', colorChange);
    }

    function colorChange() {
        this.classList.add("changed");
    }
}

//CLEAR BUTTON CLEARS CANVAS
const clearBtn = document.querySelector('#clearbtn');
clearBtn.addEventListener('click', clearCanvas)

function clearCanvas() {
    var cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].classList.remove("changed");
        cells[i].style.backgroundColor = "";
    }
}

//GRADIENT BUTTON CHANGES THE COLOR OUTPUT

const paletteBtn = document.querySelector('#palettebtn');
paletteBtn.addEventListener('click', gradientDrawCells)


function gradientDrawCells() {
    const cells = document.querySelectorAll('.cell');

    cells.forEach(eachCell => {
        let colorCounter = 0;
        let colorGradient = ['#cbd1ad', '#b5bb94', '#a0a67d', '#8a9064', '#616551', '#35383d']
        eachCell.addEventListener('mouseover', e => {
            eachCell.style.backgroundColor = colorGradient[colorCounter];
            if (colorCounter <= 5) {
                colorCounter += 1;
            } else {
                colorCounter += 0;
            }

        })
    })
}