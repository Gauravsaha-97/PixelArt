document.getElementById('sizePicker').addEventListener('submit', function(event) {
    event.preventDefault();
    makeGrid(); //call the makeGrid function
});


function makeGrid() {

    const height = document.getElementById('inputHeight').value; //storing the height of the grid
    const width = document.getElementById('inputWidth').value; //storing the width of the grid
    const canvas = document.getElementById('pixelCanvas'); //selecting the element with specified id and store it in variable canvas.

    canvas.innerHTML = '';


    for (let r = 0; r < height; r++) { //add the rows
        let row = canvas.insertRow(r);


        for (let c = 0; c < width; c++) {
            let cell = row.insertCell(c); //add the cells


            cell.addEventListener('click', function(event) {

                event.target.style.backgroundColor = document.getElementById('colorPicker').value;
            }); //fill the selected color in the selected cell on clicking
        }
    }
}