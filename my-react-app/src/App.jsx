import React from "react";
import "./App.css";
import Counter from "./Components/Counter";
import SquareCalculator from "./Components/SquareCalculator";
import DataFetcher from "./Components/DataFetcher";
import axios from 'axios'
import ErrorBoundary from "./Components/ErrorCatcher";
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import UserProfile from './pages/UserProfile'
import NotFound from "./pages/NotFound";
import SimpleForm from "./Components/SimpleForm";
import EventLogger from "./Components/EventLogger";
import AsyncDataFetcher from "./Components/AsyncDataFetcher";
import EnhancedDataFetcher from "./Components/EnhancedDataFetcher";
import CallbackDemo from "./Components/CallbackDemo";
import MemoizationDemo from "./Components/MemoizationDemo";
import CustomHookDemo from "./Components/CustomHookDemo";
import ReducerCounter from "./Components/ReducerCounter";
import DebouncedInput from "./Components/DebouncedInput";
import ThrottledScrollLogger from "./Components/ThrottledScrollLogger";
import Fragment from "./Components/Fragment";


function App() {
  return (
    
  <div>I'm an App!
    <nav>
        <Link to='/'>Home</Link> | <Link to='/about'>About</Link> | <Link to='/user/1' >User1</Link> |
        <Link to='form'>Simple Form</Link> | <Link to='logger'>Event Logger</Link> | 
        <Link to='asyncFetch' >Async Fetch </Link> | <Link to='enhancedfetch' >Enhanced Fetcher</Link> |
        <Link to='callback '>Callback</Link> | <Link to='memo' >Memo Demo</Link> | 
        <Link to='customhook' >Custom Fetch Hook</Link> | <Link to='reduce' >Reducer Counter</Link> |
        <Link to='debounce' >Debounced Input</Link> | <Link to='throttled' >Scroll Logger</Link> | <Link to='fragment' >Fragment</Link>
    </nav>
    <hr />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/user/:userId' element={<UserProfile />} />
      <Route path="*" element={<NotFound />} />
      <Route path="form" element={<SimpleForm />} />
      <Route path="logger" element={<EventLogger />} />
      <Route path='asyncFetch' element={<AsyncDataFetcher />} />
      <Route path='enhancedfetch' element={<EnhancedDataFetcher />} />
      <Route path='callback' element={<CallbackDemo />} />
      <Route path='memo' element={<MemoizationDemo />} />
      <Route path='customhook' element={<CustomHookDemo />} />
      <Route path='reduce' element={<ReducerCounter />} />
      <Route path='debounce' element={<DebouncedInput />} />
      <Route path='throttled' element={<ThrottledScrollLogger />} />
      <Route path='fragment' element={<Fragment />} />
      
    </Routes>
    <ErrorBoundary>
    {/* <Counter />
    <SquareCalculator /> 
    <DataFetcher /> */}

    </ErrorBoundary>
    </div>
  )
}

export default App;
