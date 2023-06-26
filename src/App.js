import logo from './logo.svg';
import './App.css';
import EmailList from './EmailList';
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewEmail from './ViewEmail';
import { useState } from 'react';
import Home from './Home';

function App() {

  const [data, setData] = useState()
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/list" element={<EmailList data={data} setData={setData}/>}/>
      <Route path="/view" element={<ViewEmail data={data} setData={setData}/>}/>
    </Routes>
    </BrowserRouter>
    
          </div>
  );
}

export default App;
