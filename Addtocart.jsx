import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

const Addtocart = ({ cartall, setCartall }) => {

  
  const handleremove = (id) => {
    setCartall(prevCart => prevCart.filter(product => product.id !== id));
  };

  const handleIncrement = (id) => {
    setCartall(prevCart =>
      prevCart.map(product =>
        product.id === id ? { ...product, count: (product.count || 1) + 1 } : product
      )
    );
  };

  const handleDecrement = (id) => {
    setCartall(prevCart =>
      prevCart.map(product =>
        product.id === id && (product.count || 1) > 1
          ? { ...product, count: product.count - 1 }
          : product
      )
    );
  };

  // Calculate total price safely
  const totalPrice = cartall.reduce((acc, product) => acc + ((product.price || 0) * (product.count || 1)), 0);

  return (
    <>
    <Navbar/>
    <div className='w-3/5'>
      {cartall.length > 0 ? (
        <>
          {cartall.map((product) => (
            <div className='flex-wrap gap-9 border p-5 mb-3' key={product?.id}>
              <ul className='p-7'>
                <img className='h-[100px] w-[100px] object-cover' src={product?.img} />
                <li>{product?.name}</li>
                <li className='font-bold'>{product?.Productname}</li>
                <li><strong>Price:</strong> ${product?.price}</li>
              </ul>
              <div className='flex gap-5 ps-[4.5%]'>
                {/* Increment/Decrement buttons */}
                <button
                  className='text-xl bg-gray-300 px-3 py-1 rounded'
                  onClick={() => handleDecrement(product.id)}
                >
                  -
                </button>
                <p className='text-black-500'>{product?.count || 1}</p>
                <button
                  className='text-xl bg-gray-300 px-3 py-1 rounded'
                  onClick={() => handleIncrement(product.id)}
                >
                  +
                </button>

                <button
                  className='bg-red-700 hover:bg-red-500 text-white px-3 py-1 rounded'
                  onClick={() => handleremove(product?.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total price display */}
          <div className="text-right font-bold text-xl mt-5">
            Total Price: ${totalPrice.toFixed(2)}
          </div>

          {/* Proceed to Pay button (only one instance) */}
          <div className="text-center mt-4">
            <button className="text-white px-5 py-2 rounded-lg hover:bg-green-500 bg-green-700">
              <Link to="/Billing">Proceed to Pay</Link>
            </button>
          </div>
        </>
      ) : (
        <div>
          <h1 className='text-center font-bold mt-11'>No product in cart</h1>
        </div>
      )}
    </div>
    </>
  );
};

export default Addtocart;
