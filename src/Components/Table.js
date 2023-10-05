import React from 'react'

const Table = () => {
    const TableHeader =  {
        border: '1px solid black',
        padding: '8px',
        textAlign: 'left',
        backgroundColor: '#f2f2f2',
      };
    
      const TableCell = {
        border: '1px solid black',
        padding: '8px',
        textAlign: 'left',
      };
  return (
    <>
    <table style={{borderCollapse: 'collapse', width: '40%' } }>
        <tr>
            <th style={TableHeader}>Course No</th>
            <th style={TableHeader}>Course Name</th>
            <th style={TableHeader}>Units</th>
            <th style={TableHeader}>Grade</th>
        </tr>
        <tr>
            <td style={TableCell}>IT 2014</td>
            <td style={TableCell}>Elective 2</td>
            <td style={TableCell}>4</td>
            <td style={TableCell}>A</td>
        </tr>
        <tr>
            <td style={TableCell}> IS 2140</td>
            <td style={TableCell}>Software Engineering</td>
            <td style={TableCell}>5</td>
            <td style={TableCell}>B</td>
        </tr>
    </table>
    </>
  )
}

export default Table
