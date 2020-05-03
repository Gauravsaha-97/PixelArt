// Select color input
// Select size input
var height, color, width;

$('#sizePicker').submit(function(event) {
    event.preventDefault();
    height = $('#inputHeight').val(); //get the value of height from the user
    width = $('#inputWidth').val(); //get the value of width from the user
    // When size is submitted by the user, call makeGrid()
    makeGrid(height, width);

});


function makeGrid(height, width) {

    $('tr').remove();
    // Your code goes here!
    for (var i = 1; i <= height; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (var j = 1; j <= width; j++) {
            $('#table' + i).append('<td></td>');
        }
    }

    //Apply colors on clicking each cell
    $('td').click(function fillColor() {
        color = $('#colorPicker').val();
        //Check if 'this' attribute has already a styling in it
        if ($(this).attr('style')) {
            $(this).removeAttr('style') //if yes, then remove it
        } else {
            $(this).attr('style', 'background-color:' + color); //else, add the style to ir
        }

    });
}