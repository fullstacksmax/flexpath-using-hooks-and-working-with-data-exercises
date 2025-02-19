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
    
        useEffect(() => {
          const fetchData = async () => {
            try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/5`)
            const json = await response.json();
            setData(json);
            } catch(error){
                console.error(`there was an error ${error}`)
            }
          };
          fetchData();  
        }, []);
        
        
        if (!data) return <div>Loading...</div>
    
        return (
            <h2>async title__ {data.title} 
            <p>async body__ {data.body} </p>
            </h2>
        )
    }
