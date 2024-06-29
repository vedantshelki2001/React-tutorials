import React, { useState } from 'react'

function UseStateNumbers() {
    const [age, setage] = useState(100)

    function changeAge() {
        setage(prevState => prevState + 10)
        setage(prevState => prevState + 70)
        setage(prevState => prevState + 30)
    }
    return (
        <div>
            <h1>{age}</h1>
            <button onClick={changeAge}>change Age</button>
        </div>
    );
}

export default UseStateNumbers;