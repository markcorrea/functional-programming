const kangaroo = (x1, v1, x2, v2) => {
  let front
  let vFront
  let back
  let vBack
  if (x1 > x2) {
    front = x1
    vFront = v1
    back = x2
    vBack = v2
  }
  if (x1 < x2) {
    back = x1
    vBack = v1
    front = x2
    vFront = v2
  }
  if (x1 == x2) return 'YES'

  let distance = front - back

  while (distance > 0) {  
    front += vFront
    back += vBack
    let newDistance = front - back
    if (newDistance >= distance) return 'NO'

    distance = newDistance

    if (distance < 0) return 'NO'
    if (distance == 0) return 'YES'
  }
}

console.log(kangaroo(43, 2, 70, 2))
