/**Exercise 16: Creating a Data Fetching Custom Hook


Description: 

Create a custom hook useFetch to centralize data-fetching logic.
It should take a 'url' as a prop, and manage a GET request to this url.
It should contain state to track the returned 'data', the 'loading' status, 
and if an 'error' is encounter. IWhen the call is finished, it should return 
these three variables, wrapped in an object literal.

Then, create a component `CustomHookDemo`in `src/components`. 

This component should call the custom hook by passing it 
the url "https://jsonplaceholder.typicode.com/posts/3".

It should display the current loading status, an error if one is encountered, 
and finally the data if it is returned. Otherwise, display nothing.

In your App.jsx file, add a new <Link> and <Route> component to point to 
and display this `CustomHookDemo` component. */
import React from 'react'
import useFetch from '../Hooks/UseFetch'




export default function CustomHookDemo() {
    const { data, loading, err } = useFetch(
        "https://jsonplaceholder.typicode.com/posts/3"
    );
    if(loading) return <div>Loading...</div>
    if(!data) return null
    if(err) return <div>there was an error {err} </div>

    return (
        <div>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            </div>
    );

}