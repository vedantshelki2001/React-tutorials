
import React from 'react'

function List2() {
    const users = [
           {usersName: 'NIKHIL', usersId: 1},
           {usersName: 'SAJAL', usersId: 2},
           {usersName: 'TEJSWINI', usersId: 3},
           {usersName: 'MANTHAN', usersId: 4},
           {usersName: 'VEDANT', usersId: 5},
           {usersName: 'SAURABH', usersId: 6},
           {usersName: 'AYUSH 1', usersId: 7},
           {usersName: 'AYUSH 2', usersId: 8},
       ]

  return (
      <div>
          {/* {
              users.map((val, i) => (
                  <div key={i}>
                      <h1>{val.usersName}</h1>
                      <h1>{val.usersId}</h1>
                  </div>
              ))
          } */}

           {/* {
              users.map((val, i) => (
                  <>
                      <h1>{val.usersName}</h1>
                      <h1>{val.usersId}</h1>
                  </>
              ))
          }  */}
           {
              users.map((val, i) => (
                  <React.Fragment key={i}>
                      <h1>{val.usersName}</h1>
                      <h1>{val.usersId}</h1>
                  </React.Fragment>
              ))
          } 
    </div>
  )
}

export default List2