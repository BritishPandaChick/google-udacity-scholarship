// Select color input

// Select size input
$('#sizePicker').submit(function makeGrid(grid){
  var rowInput = $('#input_height').val();
  var colInput = $('#input_width').val();

  for (var i = 1; i < rowInput; i++) {
    $('table').append('<tr></tr>');

    for (var j = 1; j <= colInput; j++){
      $('tr:last').append('<td></td>');
      $('td').attr('class', 'cells');
    }
  }
  grid.preventDefault();
});
// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!

}
