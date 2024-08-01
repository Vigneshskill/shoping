import React from 'react'


const Products = ({ product, cart, setCart }) => {
    
  const addCart = () => { setCart([...cart, product])};
  const removeCart = () => { setCart(cart.filter((c) => c.id !== product.id))};

  return (
    <div className="w-[200px] h-[250px] mt-3" >
          <div className="img w-[100%] h-[150px]">
            <img className='w-[100%] h-[100%]' src={product.image} alt="" />
          </div>
          <div className="details p-1 flex flex-col justify-center items-center">
            <h3 className='mb-2 font-bold text-2xl'>{product.brand}</h3>
            <p className='font-semibold'> ${product.price}</p>
            {cart.includes(product)?(<button onClick={removeCart} className="btn bg-red btn-black mt-3 p-2">Remove Cart</button>):(
              <button onClick={addCart} className="btn bg-white btn-black mt-3 p-2">Add Cart</button>)
            
            }
            
          </div>
    </div>
  )
}

export default Products
