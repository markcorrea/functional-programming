const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  const appleTree = a
  const orangeTree = b
  const houseStart = s
  const houseFinish = t

  const calculatePosition = (tree, position) => {
    return tree + position
  }

  const checkInsideItems = (start, finish) => {
    let inside = [0, 0]

    apples.map(apple => {
      const position = calculatePosition(apple, appleTree)
      if (position >= start && position <= finish) inside[0]++
    })

    oranges.map(orange => {
      const position = calculatePosition(orange, orangeTree)
      if (position >= start && position <= finish) inside[1]++
    })

    return inside
  }

  let result = checkInsideItems(houseStart, houseFinish)
  console.log(`${result[0]}\n${result[1]}`)
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4])
