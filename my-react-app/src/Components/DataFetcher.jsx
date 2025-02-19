/**Exercise 3: Using useEffect for Side Effects


Description: 

Create a component `DataFetcher` that fetches a post record from a 
mock API when it mounts.

Use this string for the url:

`https://jsonplaceholder.typicode.com/posts/5`

Or use this template literal string for the url if you want different posts 
to be pulled back each time the component mounts:

 `https://jsonplaceholder.typicode.com/posts/${Math.ceil(
        Math.random() * 100
  )}`

Display the retrieved post records 'title' and 'body' properties inside of the 
return of the `DataFetcher` component, using an <h2> tag for the 'title' 
value and a <p> tag for the 'body' value.

Then, import and display this component in App.jsx. */
import { useState, useEffect } from "react"

export default function DataFetcher() {
    const [data, setData] = useState("null")

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/5`)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(`error parsing json ${error}`))
    })
    
    if (!data) return <div>Loading...</div>
    //purposeful error
    //throw new Error("there was an error")

    return (
        <h2>title__ {data.title} 
        <p>body__ {data.body} </p>
        </h2>
    )

}