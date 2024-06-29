import React from 'react'

// array
function JSX2() {
  const arr =[100,200,300,400,500]

  const obj = { 
    name :'vedant',
    age: 2000,
    info : {
      city : 'Ngp',
      state:'MH',
      courses: ['C','C++','Java','Python']
    }
  }
  return (
    <div>
      <h1>{arr}</h1>
      <h1>
        {
             arr.map((val,i) => 
             (`${val}${i === arr.length-1?'. ' : ','} `)
        )
     }
        </h1>
        {
          arr.map((val,i) =>
          (
          <h1 key={i}>
            {val}
            {i === arr.length  - 1 ?'. ' : ','}
          </h1>
          )
        )
        }
    </div>
  )
}

export default JSX2