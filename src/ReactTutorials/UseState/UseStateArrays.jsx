import React, { useState } from 'react'

function UseStateArrays() {

    const [arr, setarr] = useState([])

    const arr1 = [10, 20, 30]
    const changeArr = () => {
        // setarr = ([...arr, 10])
        // state -> 10
        // state -> 1010
        // state -> 101010
        setarr(prevState => [...arr1, 'something', ...prevState])
    }

    console.log(arr);
    return (
        <div>
            <h1>{arr}</h1>
            <button onClick={changeArr}> Change Array </button>
        </div>
    )
}

export default UseStateArrays