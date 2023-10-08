import { useState } from 'react';
import './App.css';
import Table from './Components/Table';
import Textboxinput from './Components/Textboxinput';
function App() {
  const [courseData, setCourseData] = useState([]);
  const addCourse = (course) => {
    setCourseData([...courseData, course]);
  };

  return (
    <div className="App">
      <div className='beside'>
      <Textboxinput onAddCourse={addCourse}/>
      <Table courseData={courseData}/>
      </div>
    </div>
  );
}

export default App;
