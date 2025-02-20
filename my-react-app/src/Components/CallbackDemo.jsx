/**Exercise 14: Optimizing with useCallback


Description: 

Create a file `CallbackDemo.jsx` and add it to `src/components`. 
Have it display a memoized `Button` component defined within the 
CallbackDemo.jsx file.

The button should have a click event and a label passed to it through props.

Then define a component named `MemoizedButton` that just stores 
`React.memo(Button)`.

Then define a component in this file named `CallbackDemo`. 
Create two methods:
    - increment
    - decrement

and a state variable named 'count'. 

When the 'increment' method is run, have count incremented by 1
When the 'decrement' method is run, have count decremented by 1

Then, wrap the 'increment' and 'decrement' functions in the `useCallback` 
react method.

In the CallbackDemo return, display the current 'count' value and 
two MemoizedButton components: 

- One that will handle the 'increment' method and be labeled 'increment'. 
- One will handle the 'decrement' method and be labeled 'decrement'.

In your App.jsx file, add a new <Link> and <Route> component to point to and 
display this `CallbackDemo` component.

See how the CallbackDemo component can efficiently render the updated count 
after either button press due to the MemoizedButton and `useCallback` method. */

import React from 'react'
import {useState, useCallback} from 'react'






function Button({ handleClick, label }) {
    console.log(`rendering button ${label}`)
    return <button onClick={handleClick}>{label}</button>
}
const MemoizedButton = React.memo(Button)

export default function CallbackDemo() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => setCount((c) => c + 1),[]);
    const decrement = useCallback(() => setCount((c) => c - 1),[]); 

    return (
        <div>
            <h1>{count}</h1>
            <MemoizedButton handleClick={increment} label="increment" />
            <MemoizedButton handleClick={decrement} label="decrement" />

        </div>
    );

}