// Small functions that do one thing and join together.

let mylist = [
  [ 'Mark Johansson', 'waffle iron', '80', '1'],
  [ 'Mark Johansson', 'blender', '200', '2'],
  [ 'Mark Johansson', 'knife', '10', '4'],
  [ 'Nikita Smith', 'waffle iron', '80', '1'],
  [ 'Nikita Smith', 'knife', '10', '2'],
  [ 'Nikita Smith', 'pot', '20', '3']
]

var output = mylist.reduce((customers, line) => {
  customers[line[0]] = customers[line[0]] || []
  customers[line[0]].push({
    name: line[1],
    price: line[2],
    quantity: line[3]
  })
  return customers
}, {})

console.log('output', JSON.stringify(output, null, 2))