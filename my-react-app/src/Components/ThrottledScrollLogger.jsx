/**Exercise 20: Throttling Scroll Events


Description: 

Implement a component `ThrottledScrollLogger` that logs the user's scroll 
position to the console, throttled to fire once every 500ms.

Create this component in the `src/components` directory.

In your App.jsx file, add a new <Link> and <Route> component to point to and 
display this `ThrottledScrollLogger` component. */

import React from 'react'
import { useEffect } from 'react'


export default function ThrottledScrollLogger() {
    useEffect(() => {
        let lastScrollTime = 0;

        const handleScroll = () => {
            const now = Date.now();
            if (now - lastScrollTime >= 500) {
                console.log(`the cursor is at ${window.scrollY}`);
                lastScrollTime = now;
            }
        
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

 
    
   
    


    return( 
        <div style = {{ height: "200vh"}}>Scroll to see the effect</div>
    )
}