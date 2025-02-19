/**Exercise 10: Handling Form Submissions


Description: 

Create a new component `SimpleForm` and add it to `src/components`. 
Have the component manage two values in state: 'inputValue' and 'submittedValue'.

Create a simple form that contains a single "text" input that updates the 
'inputValue' state variable. Also, add a submit button for the form.

Define an onSubmit event for the form that will prevent the default behavior of 
the submission event, set the state variable 'submittedValue', and set the 
'inputValue' state variable to a blank string.

Then, edit the JSX of the component to display the value of the 
'submittedValue' variable below the form inside of a <p> tag, 
with the message "You submitted: [submittedValue]".

In your App.jsx file, add a new <Link> and <Route> component to point to 
and display this `SimpleForm` component. */

import React from 'react'
import { useState } from 'react';


export default function SimpleForm() {
    const [inputValue, setInputValue] = useState("");
    const [submittedValue, setSubmittedValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedValue(inputValue);
        setInputValue("");
    };

    return (
        <div>
            <h2>Simple Form</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter Something"
                />

            
            <button type="submit">Submit </button>
            </form>
            <p>You submitted: {submittedValue}</p>
        </div>
    )
}