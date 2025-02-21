/**Exercise 19: Debouncing Input with useEffect


Description: 

Implement an input field that "debounces" the user input before 
making an API call.

"Debounce" means that it delays the call until the user stops typing,
usually for 500-1000ms. Then it fires the request off.

Simulate an api call by using the `setTimeout` method set to fire after 1000ms.

Create this input inside of a component named `DebouncedInput` and 
stored in `src/components.`

In your App.jsx file, add a new <Link> and <Route> component to point to and 
display this `DebouncedInput` component. */
import React, { useEffect } from 'react'
import { useState } from 'react'


export default function DebouncedInput() {
    const [inputValue, setInputValue] = useState("");
    const [debouncedValue, setDebouncedValue] = useState(inputValue);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(inputValue), 500);

        return () => {
            clearTimeout(handler);
        };
    }, [inputValue]);

    useEffect(() => {
        if (debouncedValue) {
            console.log("Making API call with:", debouncedValue);
        }
    }, [debouncedValue]);





    return (
        <div> 
            <h2>Debounced Input</h2>
        <input 
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Type to search'></input>
        </div>
    )
}