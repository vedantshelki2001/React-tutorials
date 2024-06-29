import React from 'react'

function List1() {
    
    const arr = ['C', 'C++', 'HTML', 'CSS', 'JAVA', 'JS']
    const obj = {
         name: ['AYUSH', ]
     }

  return (
      <div>
          {/* type 1 */}
          {/* rendering single HTML Element  */}
            {
              arr.map((val, i) => (
                  <h1>{ val}</h1>
              ))
          }

             {/* <h1>===============================================</h1>
          <h1>{arr.map((val, i) => (`${val}, `))}</h1> */}
    </div>
  )
}

export default List1