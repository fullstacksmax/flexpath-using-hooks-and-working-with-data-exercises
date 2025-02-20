/**Exercise 18: Using useReducer for State Management


Description: 

Implement a counter using the useReducer hook.

Create a component `ReducerCounter` and add it to `src/components`.
It should have a variable 'initialState' defined as `const` and 
initialized to 0.

It should contain a reducer that takes the inputs 'state' and 'action'.
Inside of this reducer, there should be a switch statement that operates on the 'action' value.
- If action equals "increment", return `state + 1`.
- If action equals "decrement", return `state - 1`
- If action equals "reset", return the 'initialState' variable defined 
  outside of the reducer.
- Set the default to return `state`.

Then, use the `useReducer` function by passing it your `reducer` and 
the initial state.

Store the return of `useReducer` to the variables 'count' and 'dispatch'.

Then in the display return of the component, have it render:
- an <h2> element that displays the current 'count'
- a button that when clicked, fires the `dispatch` method with the 
  argument "Increment". Label this button as "Increment"
- a button that when clicked, fires the `dispatch` method with the 
  argument "Decrement". Label this button as "Decrement"
- a button that when clicked, fires the `dispatch` method with the 
  argument "Reset". Label this button as "Reset"

In your App.jsx file, add a new <Link> and <Route> component to point to and 
display this `ReducerCounter` component.
 */
import React from 'react'
import { useState, useReducer } from 'react'


export default function ReducerCounter() {
    

}