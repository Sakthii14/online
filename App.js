import { BrowserRouter, Routes, Route } from "react-router-dom";
import Everything from "./Pages/Everything/Everything";
import About from "./Pages/Everything/About/About";
import Addtocart from './Addtocart'
import { useEffect, useState } from "react";
import Categorie from "./utiles/Categorie";
import { Contact } from "./Pages/Everything/Contact/Contact";
import Billing from "./Pages/Everything/Billing/Billing";
import Details from "./Pages/Everything/Billing/Details";




const App = () => {

  const[productid,setProductid]=useState('')
  const [cartall,setCartall]=useState([]);
  
  
  useEffect(() => { 
    const filteredObject = Categorie.filter(
      (product) => product.id === productid // Corrected the comparison to '===' for strict equality
    );
    setCartall((prevCart) => [...prevCart, ...filteredObject]); // Updated to ensure safe state update
  }, [productid]); 

  

  return (
          
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Everything setProductid={setProductid} />} />
        <Route path="/Addtocart" element={<Addtocart cartall={cartall} setCartall={setCartall} />} />
        <Route path="/About" element={<About/>} />  
        <Route path="/Contact" element={<Contact/>} /> 
        <Route path="/Billing" element={<Billing/>} /> 
        <Route path="/Details" element={<Details cartall={cartall} setCartall={setCartall}/>} /> 
        
        </Routes>
        
       </BrowserRouter>
       
      

    );
  };
  
export default App;