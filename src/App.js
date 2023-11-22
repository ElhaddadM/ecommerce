import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import {  Routes, Route } from "react-router-dom";
import Products from "./Pages/Products";


function App() {
  return (
    <div className="App w-100 h-100">
      <Nav/>
      <Routes>
        <Route   path="/" exact  element={<Home/>} />
        <Route path="/products" element={<Products/>} />
      </Routes>
      
    </div>
  );
}

export default App;
