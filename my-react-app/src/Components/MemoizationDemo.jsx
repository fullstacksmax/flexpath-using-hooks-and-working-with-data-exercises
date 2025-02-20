/**Exercise 15: Optimizing with useMemo


Description: 

Use useMemo to memoize the expensive calculation below
```
const expensiveCalculation = (num) => {
    console.log('Calculating...');
    // Simulate heavy computation
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  };
```

Create a component `MemoizationDemo` in `src/components`. 
It should have two state variables: 'number' and 'toggle'.

It should have the `expensiveCalculation` above defined on it.
You should then create a function expression named `calculatedValue` that 
stores the result of calling `expensiveCalculation(number)`, properly wrapped 
in the `useMemo` React method.

In the return, render:
- an <h2> tag displaying the 'calculatedValue' value.
- an <input> of "number" type that will update the 'number' state variable 
  when it is changed. 
- a button that when clicked simply toggles the 'toggle' variable between 
  true and false and displays its current value. This toggle button will 
  exist to show that by wrapping the `expensiveCalculation` that runs every 
  render with `useMemo`, we still have the performance to update and display 
  the new 'toggle' state every time we click the button.

In your App.jsx file, add a new <Link> and <Route> component to point to and 
display this `MemoizationDemo` component. */
import React, {useState, useMemo} from 'react'

export default function MemoizationDemo() {
    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(true);


const expensiveCalculation = (num) => {
    console.log('Calculating...');
    // Simulate heavy computation
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  };



    const calculatedValue = useMemo(() => expensiveCalculation(number), [number]);

    return (
        <div>
            <h2>Calculated Value: {calculatedValue}</h2>
            <input
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value) || 0)} />
            <button onClick={() => setToggle(!toggle)}>
                Toggle: {toggle.toString()}
            </button>
        </div>
    );
  }