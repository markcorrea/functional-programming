const miniMaxSum = (arr) => {
  let minimal = 0
  let maximal = 0

  arr.sort().map((item, index) => {
    if (index < 4) minimal += item
    if (index >= arr.length - 4) maximal += item
  })

  console.log(`${minimal} ${maximal}`)
}

miniMaxSum([1, 2, 3, 4, 5])
