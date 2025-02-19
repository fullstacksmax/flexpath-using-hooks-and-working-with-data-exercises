/**Exercise 13: Handling Loading States and Errors


Description: 

Create a new component `EnhancedDataFetcher` and add it to `src/components`.

Enhance the previous exercises `AsyncDataFetcher` component to display:

- Text saying "Loading..." when the fetch call is waiting for a return
- Text saying "Error: [error.message]" when the fetch call runs into an error
- Nothing if no data is found with the fetch request.

Use state in your component to store and update variables to get this 
dynamic visual behavior in the component.

In your App.jsx file, add a new <Link> and <Route> component to point to and 
display this `EnhancedDataFetcher` component. */

import React from 'react'
import { useState, useEffect } from 'react';

export default function EnhancedDataFetcher() {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(false)
        const [error, setError] = useState(false)
    
        useEffect(() => {
          const fetchData = async () => {
            setLoading(true)
            try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/invalid-url`)
            const json = await response.json();
            setData(json);
            if(!response.ok){
              throw new Error("network response not ok")
            }
            } catch(error){
                setError(error.message)
            }
            setLoading(false)
          };
          fetchData();  
        }, []);
        
        
        if (loading) return <div>Loading...</div>;
        if (error) return <div>{error}</div>;
        if (!data) return null;
    
        return (
            <h2>async title__ {data.title} 
            <p>async body__ {data.body} </p>
            </h2>
        )
    }
