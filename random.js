function staircase(n) {

  let myString = ''
  let verticalCounter = n
  
  function drawLine(number) {

    let horizontalCounter = 0
    let lineDrawing  = ''
    while (horizontalCounter <= n) {
      lineDrawing += (horizontalCounter < number ? ' ' : '#')
      horizontalCounter++
    }
    myString += lineDrawing + lineDrawing.split('').reverse().slice(1).join('') + ' line ' + number + ' \n'
  }

  while (verticalCounter >= 0) {
    drawLine(verticalCounter)
    verticalCounter--
  }

  return myString
}


console.log(staircase(3))