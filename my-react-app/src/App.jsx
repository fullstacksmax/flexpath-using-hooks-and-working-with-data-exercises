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


function App() {
  return (
    
  <div>I'm an App!
    <nav>
        <Link to='/'>Home</Link> | <Link to='/about'>About</Link> | <Link to='/user/1' >User1</Link>
    </nav>
    <hr />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/user/:userId' element={<UserProfile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <ErrorBoundary>
    <Counter />
    <SquareCalculator />
    <DataFetcher />
    </ErrorBoundary>
    </div>
  )
}

export default App;
