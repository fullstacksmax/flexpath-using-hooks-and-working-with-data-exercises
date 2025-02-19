/**Exercise 11: Using React's Synthetic Event System


Description: 

Explain how React's synthetic events work. 

Create a component `EventLogger` and add it to `src/components`.
The component should just render a <button>, that when clicked will log the 
'type' and 'target' of the event to the console.

In your App.jsx file, add a new <Link> and <Route> component to point to and 
display this `EventLogger` component.*/


import React from 'react'

export default function EventLogger() {
    const handleClick = (e) => console.log(`target ${e.target}, type ${e.type}`)
    return (
        <div>
        <button onClick={handleClick} >Click logger</button>
        </div>
    )
}