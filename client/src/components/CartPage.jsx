import React, { useContext, useState,useEffect } from 'react'
import { Cart } from '../Context';
import SingleProduct from './SingleProduct';

const CartPage = () => {
  const [total, setTotal] = useState();
  const { cart } = useContext(Cart);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);
  
  return (
    <div>
      <span style={{fontSize: 30}}>My Cart</span>
      <br />
      <span style={{fontSize: 30}}>Total: $ {total}</span>
      <div className="productContainer">
        {cart.map((prod) => (
          <SingleProduct prod={prod} cart={cart} key={prod.id}/>
        ))}

      </div>

      
    </div>
  )
}

export default CartPage
