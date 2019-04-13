import { gradingStudents } from './grading-students'

describe('Grading students function', () => {
  it('Should return gradingStudents', () => {
    expect(gradingStudents(1)).toEqual(true)
  })
})
