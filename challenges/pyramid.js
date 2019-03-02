const staircase = n => {
  let myString = ''
  let verticalCounter = n

  function drawLine(number) {
    let horizontalCounter = 1
    let lineDrawing = ''
    while (horizontalCounter <= n) {
      lineDrawing += horizontalCounter < number ? ' ' : '#'
      horizontalCounter++
    }
    myString += lineDrawing
  }

  while (verticalCounter > 0) {
    if(verticalCounter < n) myString += '\n'
    drawLine(verticalCounter)
    verticalCounter--
  }

  return myString
}

console.log(staircase(3))
