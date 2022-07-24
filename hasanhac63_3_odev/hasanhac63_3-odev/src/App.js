import { ProductsPage } from "./Pages";
import "./App.css";
import { useState } from "react";
function App() {
  const [darkMode,setDarkMode]=useState(true);
  return (
    <div className={darkMode ? 'dark-mode':'light-mode'}> 
      <div className="contaner">
        
        <div className="switch-checkbox">
          <div><h1>Durum {darkMode?"Koyu":"Açık"} Moddadır</h1></div>
       <label className="switch">  
          <input type="checkbox" onChange={()=> setDarkMode(!darkMode)}></input>
          <span className="slider round"></span>
          </label> 
        </div>
        
      </div>

      <ProductsPage />
    </div>
  );
}

export default App;
