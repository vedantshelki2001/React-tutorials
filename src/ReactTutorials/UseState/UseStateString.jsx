import React, { usestate } from 'react'

function UseStateString() {

    console.log('component rendered');

    const [age, setage] = usestate(10)
    function changeAge() {
        setage(age + 10)
    }



    return (
        <div>
            <h1>{age}</h1>
            <button onClick={changeAge}>change Age</button>
        </div>
    )
}

export default UseStateString