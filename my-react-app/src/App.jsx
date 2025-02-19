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


function App() {
  return (
    
  <div>I'm an App!
    <nav>
        <Link to='/'>Home</Link> | <Link to='/about'>About</Link> | <Link to='/user/1' >User1</Link> |
        <Link to='form'>Simple Form</Link> | <Link to='logger'>Event Logger</Link> | 
        <Link to='asyncFetch' >Async Fetch </Link> | <Link to='enhancedfetch' >Enhanced Fetcher</Link>
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
    </Routes>
    <ErrorBoundary>
    <Counter />
    <SquareCalculator />
    {/* <DataFetcher /> */}

    </ErrorBoundary>
    </div>
  )
}

export default App;
