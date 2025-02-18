/**Description: 

Create an error boundary component to catch errors in child components.

Then, inside of App.jsx, wrap the `DataFetcher` component from exercise 3 in 
this new Error Boundary component.

Then, from within `DataFetcher` right before the display `return`, 
throw a new error with the message "Data Fetcher failed!"

The wrapping error boundary component should catch this error and display
an error message in the App. */
import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error){
        return { hasError: true};
    }
    componentDidCatch(error, errorInfo){
        console.error("ErrorBoundary caught an error ", error, errorInfo)
    }
    render() {
        if (this.state.hasError) {
            return <h1>Something went horribly wrong.</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary