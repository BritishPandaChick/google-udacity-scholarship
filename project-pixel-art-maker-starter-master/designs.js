$(function (){

// Select color input
  var colorPicker = $('#colorPicker');
// Select size input
  var heightInput = $('#inputHeight');
  var weightInput = $('#inputWeight');
// When size is submitted by the user, call makeGrid()

function makeGrid() {
  canvas.find('tbody').remove();

  //submit button size changes to fit grid size
  var gridRows = heightInput.val();
  var gridCol = weightInput.val();

  //tbody set to the table
  canvas.append('<tbody></tbody>');

  var canvasBody = canvas.find('tbody');

  //drawing grid rows
  for (var i = 0; i < gridRows; i++) {
    canvasBody.append('<tr></tr>');
  }

  //draw grid col
  for (var j = 0; j < gridCol; j++) {
    canvas.find('tr').append('<td class="transparent"></td>');
  }
}

// Your code goes here!
});
