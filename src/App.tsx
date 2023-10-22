import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from "./components/Hero";
import About from "./components/About";
import './App.css';
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<HeroSection />} />
        <Route path="/about" Component={About} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
