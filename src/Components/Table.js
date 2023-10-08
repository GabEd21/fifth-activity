import React, {useState} from 'react'

const Table = ({courseData}) => {
  const qpigrade = (grade) => {
    switch (grade) {
      case 'A':
        return 4;
      case 'B':
        return 3;
      case 'C':
        return 2;
      case 'D':
        return 1;
      case 'F':
        return 0;
      default:
        return 0;
    }
  }

  const calculate = () => {
    const totalscore = courseData.reduce(
      (total, course) => total + qpigrade(course.grade) * course.units,
      0
    );
    const totalUnits = courseData.reduce(
      (total, course) => total + parseFloat(course.units),
      0
    );
    return totalUnits !== 0 ? totalscore / totalUnits : 0;
  };

  const [searchText, setSearchText] = useState('');

  const filteredCourses = courseData.filter(
    (course) => 
    course.courseNo.toLowerCase().includes(searchText.toLowerCase()) ||
    course.courseName.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <div className='center'>
      <h4>Course</h4>
      <input type='text' placeholder='Search Course No' value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
      <table className='table'>
        <thead>
        <tr>
          <th className='th'>Course No</th>
          <th className='th'>Subject</th>
          <th className='th'>Units</th>
          <th className='th'>Grade</th>
        </tr>
        </thead>
        <tbody>
          {filteredCourses.map((course, index) => (
             <tr key={index}>
             <td className='td'>{course.courseNo}</td>
             <td className='td'>{course.courseName}</td>
             <td className='td'>{course.units}</td>
             <td className='td'>{course.grade}</td>
           </tr>
          ))}
          <tr>
            <td className='td' colSpan='2'></td>
            <td className='td'>Total: </td>
            <td className='td'>{calculate().toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
