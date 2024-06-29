import React, { useState } from 'react'

function UseStateArray1() {
  const [arr, setarr] = useState([100, 200])

  const arr1 = [1000, 2000];
  const arr2 = ['abc', 'xyz'];
  const changeArr = () => {
    setarr([...arr1, arr, arr2, 'something'])
  }



  return (

    <div>
      <h1>{arr}</h1>
      <button onClick={changeArr}> Change Array </button>
    </div>
  )
}

export default UseStateArray1