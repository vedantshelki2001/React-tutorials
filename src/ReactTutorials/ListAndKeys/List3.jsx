import React from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB';

function List3() {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div>
      {/* {
        arr.map((val, i) => (
          <ComponentA key={i} />
        ))
      } */}
      {
        arr.map((val, i) => (
          <>
            <ComponentA key={i} />
            <ComponentB key={i} />
            <React.Fragment />
          </>
        ))
      }
    </div>
  )
}

export default List3