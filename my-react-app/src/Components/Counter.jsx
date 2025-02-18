import React, {useState} from 'react'


export default function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
       <h1> current count {count}</h1>
        </div>
    )


}
