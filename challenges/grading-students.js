const gradingStudents = grades => {
  const roundGrade = input => {
    let counter = 0
    let grade = input
    let foundRoundOrNotApply = false

    while (foundRoundOrNotApply == false) {
      if (counter >= 3 || input < 38) {
        foundRoundOrNotApply = true
        return input
      }

      if (grade % 5 != 0) {
        counter++
        grade++
        continue
      }

      foundRoundOrNotApply = true
      break
    }

    return grade
  }

  const adjustGradeList = ar => {
    return ar.map((item, index) => {
      return index > 0 ? roundGrade(item) : item
    })
  }
  
  let result = adjustGradeList(grades)
  result.splice(0, 1)
  return result
}

console.log(gradingStudents([4, 73, 67, 38, 33]))
