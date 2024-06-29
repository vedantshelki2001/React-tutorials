import React from 'react'
import CompA from './CompA';
import CompB from './CompB';
import CompCDefaultValues from './CompCDefaultValues';
function ParentComp() {

  const a = 20;
  const b = 30;
  const name = 'vedant';
  const img = ''
  const age = 20
  const courses = ['C', 'C++', 'Java', 'Python', 'C#', 'Javascript']
  const info = {
    city: 'ngp',
    state: 'MH'
  }
  const address = {
    city: 'pune',
    state: 'HM'

  }
  return (
    <div>

      {/* {props passing/sending} */}

      {/* <CompA
        num1={a}
        b={b}
        name={name}
        img={img}
        age={age}
        courses={courses}
        info={info}
        city={info.city}
        state={info.state}

      /> */}

      {/* <CompB */}


      {/* {props passing/sending} */}
      <CompCDefaultValues
        num1={a}
        b={b}
        name={null}
        img={img}
        age={age}
        courses={courses}
        info={info}
        address={address}

      // city={info.city}
      // state={info.state}
      />
    </div>
  )
}

export default ParentComp