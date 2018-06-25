// function for makeGrid
function makeGrid() {
  // Select size input
  const height = document.getElementById("inputHeight");
  const width = document.getElementById("inputWidth");
  //select canvas
  const canvas = document.getElementById("pixelCanvas");

  canvas.innerHTML = "";

  for (let i = 0; i < height.value; i++) {
    let tr = document.createElement("tr");
    canvas.appendChild(tr);

    for (let j = 0; j < width.value; j++) {
      let td = document.createElement("td");
      tr.appendChild(td);
    }
  }

  //toggle grid color
  let color = document.getElementById("colorPicker");
  canvas.addEventListener("click", function(e) {
    if (e.target.nodeName === "TD") {
      e.target.style.backgroundColor = color.value;
    }
  });
}

// When size is submitted by the user, call makeGrid()

sizePicker.addEventListener("submit", function(e) {
  e.preventDefault();
  makeGrid();
});
