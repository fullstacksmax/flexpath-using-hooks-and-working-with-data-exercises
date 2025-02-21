/**Exercise 21: Using React.Fragment and Short Syntax


Description: 

Explain and demonstrate the use of React.Fragment and its shorthand syntax.

Create a simple example component using React.Fragment.

Then in your App.jsx file, add a new <Link> and <Route> component to point to 
and display this component. */

import React from 'react'
import ReducerCounter from './ReducerCounter'
import EnhancedDataFetcher from './EnhancedDataFetcher'

export default function Fragment() {

    return (
        <>
        <ReducerCounter />
        <EnhancedDataFetcher />
        </>
    );
}