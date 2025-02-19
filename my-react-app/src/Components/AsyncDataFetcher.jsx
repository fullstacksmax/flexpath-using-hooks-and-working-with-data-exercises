/**Exercise 12: Fetching Data with Async/Await


Description: 

Create a component `AsyncDataFetcher` and add it to `src/components`.
Inside of it, write an async/await version of the `DataFetcher` 
component from exercise 3.

In your App.jsx file, add a new <Link> and <Route> component to point to and 
display this `AsyncDataFetcher` component. */

import React, {useState, useEffect} from 'react'


export default function  AsyncDataFetcher() {
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