 import React from "react";
function JSX1() {

     const name = 'Vedant_something';
     const age = 2000;
     const placeHolder ='My name is vedant';
     const imgpath ='https:/picsum.photos/200/300';
     const textcolor = 'red'


  return (
    <div>
        <h1 style={{color:textcolor }}>{name}</h1>
        <h2>my name is {name} and i am {age} years old</h2>
        <input type="text" placeholder= {placeHolder} />
        <img src={imgpath} width={'200px'} alt=""/>
    </div>
  )
}

export default JSX1