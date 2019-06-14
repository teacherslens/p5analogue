let containerWidth
let containerHeight
let containerInitX
let containerInitY

let columnsCount = 50
let columnWidth 
let columnHeight

function setup() {
  createCanvas(windowWidth, windowHeight)
  background(51)
  
  containerWidth = windowWidth * 0.8
  containerHeight = windowHeight * 0.8
  containerInitX = (windowWidth - containerWidth) / 2
  containerInitY = (windowHeight - containerHeight) / 2
  
  print(windowWidth)
  print(containerWidth)
  print(containerInitX)
  
  columnWidth = containerWidth / (columnsCount * 2 - 1)
  columnHeight = containerHeight
  
  print(columnWidth)
}

function draw() {
  
  
  for (let i=0; i<columnsCount*2-1; i++) {
    if (i%2 === 0) {
      rect(containerInitX + columnWidth*i, containerInitY, columnWidth, columnHeight); 
    }
  }
  
}