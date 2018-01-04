console.log('sanity check');
let currentColor = null;
let  selcell = document.getElementsByClassName('cells');

function getRandomColor() {
  var hex = Math.floor(Math.random() * 0xFFFFFF);
  return "#" + ("000000" + hex.toString(16)).substr(-6);
}

function clearGrid() {
  colorCells.style.background = '#FFFFFF';
}

let pixelPainter = document.getElementById('pixelPainter');
let grid = document.createElement('div');
pixelPainter.appendChild(grid);
for (let i = 0; i < 12; i++) {
  let row = document.createElement('div');
  row.id = 'row' + i + 1;
  for (let j = 0; j < 12; j++) {
    let cell = document.createElement('div')
    cell.className = 'cells';
    cell.id = 'cellId' + i + '' + j;
    cell.addEventListener('mousedown', function () {
      this.style.backgroundColor = currentColor;
    }, true)
    row.appendChild(cell);
  }
  grid.appendChild(row);
}
let colors = document.createElement('div');
for (let i = 0; i < 4; i++) {
  let colorRow = document.createElement('div');
  for (let j = 0; j < 5; j++) {
    let colorCells = document.createElement('div');
    colorCells.className = 'colorCells';
    colorCells.style.backgroundColor = getRandomColor();
    colorCells.addEventListener('click', function () {
      currentColor = this.style.backgroundColor;
    })
    colorRow.appendChild(colorCells);
  }
  colors.appendChild(colorRow);
}
pixelPainter.appendChild(colors);
let clearButton = document.createElement('button');g
clearButton.id = 'allClear';
clearButton.innerHTML = 'Clear';
for(let i = 0; i < selcell.length; i++){
clearButton.addEventListener('click', function () {
  selcell[i].style.backgroundColor = '#FFFFFF';
})
}
colors.appendChild(clearButton);

let erase = document.createElement('button');
erase.id = 'erase';
erase.innerHTML = 'erase';
for(let j = 0; j <selcell.length; j++){
  erase.addEventListener('click',function(){
    currentColor = '#FFFFFF';
  })
}
clearButton.appendChild(erase);