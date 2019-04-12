const birthdayCakeCandles = ar => {
  const tallestNumber = Math.max(...ar)
  let tallestCount = 0

  ar.map(item => (item == tallestNumber ? tallestCount++ : ''))

  return tallestCount
}

console.log(birthdayCakeCandles([1, 2, 4, 4]))
