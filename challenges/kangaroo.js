const kangaroo = (x1, v1, x2, v2) => {
  
  let position1 = x1
  let position2 = x2
  let distance = calculateDistance(x1,x2)

  while (distance > 0) {
    const newPosition1 = position1 + v1
    const newPosition2 = position2 + v2
  }

  const calculateDistance = (first, second) => {
    let calcdistance = first - second
    return calcdistance < 0 ? calcdistance*(-1) : calcdistance
  }
    


}

kangaroo(2, 1, 1, 2)