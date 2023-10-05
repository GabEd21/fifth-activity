import React from 'react'

const Textboxinput = ({value, onChange}) => {
  return (
    <>
    <input type='text' value={value} onChange={onChange}></input>
    </>
  )
}

export default Textboxinput
