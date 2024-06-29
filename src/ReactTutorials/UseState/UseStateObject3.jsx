import React, { useState } from 'react'

function USeStateObject3() {

    const [obj, setObj] = useState({
        name: 'saurav',
        age: 100,
        info: {
            city: 'pune',
            state: 'MH',
            contact: {
                phNumber: 1234567890,
                gmail: 'something@gmail.com',
            }
        }
    })


    const handleChangeObject3 = () => {
        setObj(prevState => {
            return {
                ...prevState,

                info: {
                    ...prevState.info,
                    city: 'ngp',
                    contact: {
                        ...prevState.info.contact,
                        gmail: 'Everything@gmail.com',
                    }
                }
            }
        })
    }

    console.log(obj);

    return (
        <div>
            <h1>{obj.name}</h1>
            <h1>{obj.age}</h1>
            <h1>{obj.info.city}</h1>
            <h1>{obj.info.state}</h1>
            <h1>{obj.info.contact.phNumber}</h1>
            <h1>{obj.info.contact.gmail}</h1>
            <button onClick={handleChangeObject}>Change Object</button>
        </div>
    )
}

export default USeStateObject3