import React from 'react'

function JSX4() {
    const handleKeypress =() => {
        console.log('key pressed'); 
    }
    const handleClick = () => {
        console.log('button Clicked');
        }
  return (
    <div>
        <br/>
        <input onKeyPress={ handleKeypress } type ='text' placeholder='type hear'/>

        <br/>
        <br/>
        <button onClick={ handelClick }>click</button>
    </div>
  )
}

export default JSX4