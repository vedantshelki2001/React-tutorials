import React from 'react'

 function JSX3() {
  
    const obj = {
        name :'vedant',
        age: 2000,
        info: {
            city: 'Ngp',
            state:"MH",
            courses:['c','c++','java','python']

        }
    }
    return (

    <div>
        <h1>{obj.name}</h1>
        <h2>{obj.age}</h2>
        
       
    </div>
  )
}
export default JSX3
