import React, { useEffect, useState } from 'react'

const Cart = ({ cart, setcart}) => {
    const[total,setTotal] = useState (0)
    useEffect(() => {
      setTotal(cart.reduce((acc,curr)=>acc+parseInt(curr.price), 0))
    },[cart]);

  return (
    <>
       <h1 className='p-2 text-2xl font-semibold'>Cart Products</h1>
      <div className='flex flex-col gap-4 p-4 '>
        {
          cart.map((product) =>(
            <div key={product.id} className="flex gap-2 items-center border-solid border-2 border-gray-400 ">
            <div className="img w-[80px] h-[80px] ">
              <img className='w-[100%] h-[100%]  ' src={product.image} alt="image" />
             </div>
             <div className="">
              <h3>{product.brand}</h3>
              <p>${product.price}</p>
             </div>
           </div>
          ))
        }
      
      
     
         
      </div>
      <h1 className='p-2 text-2xl font-semibold'>Total Amount=${total}</h1>
    </>
    
  )
}

export default Cart
