/**
Exercise 16: Creating a Data Fetching Custom Hook


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



import { useEffect } from 'react'
import { useState } from 'react'

function useFetch(url) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [err, setError] = useState(null)


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(url)
                if (!response.ok) {
                    throw new Error("Network Error")
                }
                const json = await response.json();
                setData(json);


            } catch (error) {
                setError(error.message)

            } finally {
                setLoading(false)
            }


        };
        fetchData();
    },[url]);
    return  {data, loading, err}

}

export default useFetch;