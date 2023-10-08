import React, {useState} from 'react'

const Textboxinput = ({onAddCourse}) => {
    const [courseNo, setCourseNo] =  useState('');
    const [courseName, setCourseName] =  useState('');
    const [units, setUnits] =  useState(0);
    const [grade, setGrade] =  useState('A');

  const submitbut = (e) => {
    e.preventDefault();
    if(courseNo && courseName && units){
      onAddCourse({courseNo, courseName, units, grade})
      setCourseNo('');
      setCourseName('');
      setUnits(0);
      setGrade('A');
    }
  }
  const gradeChange = (e) => {
    setGrade(e.target.value);
  }
  return (
    <div>
      <h3>Add Course</h3>
      <form onSubmit={submitbut}>
        <div>
        <input type='text' placeholder='Course No' value={courseNo} onChange={(e) => setCourseNo(e.target.value)}/>
        </div>
        <div>
        <input type='text' placeholder='Subject' value={courseName} onChange={(e) => setCourseName(e.target.value)}/>
        </div>
        <div>
        <input type='number' placeholder='Units' value={units} onChange={(e) => setUnits(parseInt(e.target.value))}/>
        </div>
        <div>
          <label>Grade: </label>
          <div>
          <label>
            <input type='radio' value='A' checked={grade === 'A'} onChange={gradeChange}/>A
          </label>
          </div>
          <div>
          <label>
          <input type='radio' value='B' checked={grade === 'B'} onChange={gradeChange}/>B
          </label>
          </div>
          <div>
          <label>
          <input type='radio' value='C' checked={grade === 'C'} onChange={gradeChange}/>C
          </label>
          </div>
          <div>
          <label>
          <input type='radio' value='D' checked={grade === 'D'} onChange={gradeChange}/>D
          </label>
          </div>
        </div>
        <button type='submit'>Add Course</button>
      </form>
    </div>
  )
}

export default Textboxinput
