import React from 'react'
import './App.css';
import max from '../src/Assests/Images/max.png'


const Footer = () => {
  return (
    <>
    <div className='bg-green-600 mt-[5%]'>
    
    <footer className=''>
      <div className=' flex justify-between w-full h-[100%]'>

      <div className='text-white'>
      <div>
        <img className='h-[90%] w-[50%]    ms-7 mt-3'
        src={max}
        alt='frj'
        />
        </div >
      
             
         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vero ut unde,</p>
         <p>esse sed facere veritatis magnam incidunt sit autem suscipit recusandae perspiciatis</p>
         <p> nostrum debitis sapiente sint distinctio? Iste, dolorum.</p>
         </div> 


       <div className=' pt-[7%]'>
        <h1 className=' text-white font-serif text-lg'>Quick Links</h1><br/>
        <ul className='font-serif text-white'>
          <li>About</li>
          <li>Cart</li>
          <li>Checkout</li>
          <li>Contact</li>
          <li>Home</li>
          <li>My account</li>
          <li>Shop</li>
        </ul>
        <div className=' mt-11  text-white'>
        <h1 className='text-lg font-serif  text-white'>Site Links</h1><br/>
        <ul className='font-serif gap-4'>
          <li>Privacy policy</li>
          <li>Shopping detail</li>
          <li>Offers coupons</li>
          <li>Terms & Conditions </li>
        </ul>
       </div>
       </div>

       
       <div className=' pt-[7%]  text-white'>

        <h1>Download Our Mobile App</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vero ut unde,</p>
         <p>esse sed facere veritatis magnam incidunt sit autem suscipit recusandae perspiciatis</p>
         <p> nostrum debitis sapiente sint distinctio? Iste, dolorum.</p><br/>
         <br/>
         <br/>

        <h1 className=' text-white'>Quick Links</h1><br/>
        <ul>
          <li>About</li>
          <li>Cart</li>
          <li>Checkout</li>
          <li>Contact</li>
          <li>Home</li>
          </ul>
          

       </div>
       


</div>
<br/><hr/>
<div className=' text-white'>
        <h2 >Copyright 2025 | Organic Products</h2>
       </div>
    </footer>
    </div>
    </>
  )
}
export default Footer;