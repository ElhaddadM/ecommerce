import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import {  Routes, Route } from "react-router-dom";
import Products from "./Pages/Products";


function App() {
  return (
    <div className="App w-100 h-100">
     
      <Routes>
        <Route   path="/" exact  element={<Home/>}>
          <Route path="/products" element={<Products/>} />
          {/* <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
