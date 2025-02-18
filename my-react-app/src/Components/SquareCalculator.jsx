/**Exercise 2: Handling Derived State


Description: 

Create a component `SquareCalculator` that calculates and displays the 
square of a 'number' stored in state. 

Add a number input field to this component, and have it be able to change this
'number' state variable.
Display the number and its square inside <h2> tags in the component.

Then, import and display this component in App.jsx. */


import React, {useState} from 'react'

export default function SquareCalculator() {
    const [mynum, setNum] = useState(0)
    const squared = mynum ** 2
    return (
        <>
        <div>
        <label>
            num to be squared:
            <input value={mynum}
            onChange={e => setNum(e.target.value)} />
        </label>
    <h2>{mynum} squared is {squared}</h2>
    </div>
    </>

        
    )
}
