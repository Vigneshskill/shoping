import { useState } from 'react'

const Add = () => {
    const [cartItems, setCartItems] = useState(0);
    const updateCartItems = () => {
        setCartItems(cartItems + 1);
        console.log(cartItems);
      };
  return (
    <div>
      <button  className="btn btn-black" onClick={updateCartItems}>Add Cart</button>
    </div>
  )
}

export default Add
