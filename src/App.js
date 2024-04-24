import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import renderWithLayout from './utils/renderWithLayout';
import getComponent from './utils/getComponent';
import config from './config.json'; // Import your configuration JSON
import './App.css';
import Home from "./Home";

const App = () => {
 return (
  <>
  <h1>Welcome to Dynamic Layout</h1>

   <Router>
     <Routes>
     <Route path="/" element={<Home />}>
     </Route>
       {/* Loop through pages in config and render each page with its layout */}
       {Object.entries(config.pages).map(([pageName, pageConfig]) => (
         <Route key={pageName} path={`/${pageName}`} element={
           renderWithLayout(
             pageConfig, // Pass page configuration
             getComponent(pageConfig.component) // Dynamically import component
           )}
         />
       ))}
       
     </Routes>
   </Router>
   </>
 );
};
 
export default App;