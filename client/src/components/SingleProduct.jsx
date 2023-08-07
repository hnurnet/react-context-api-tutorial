import React, { useContext } from 'react'
import './style.css';
import { Cart } from '../Context';

const SingleProduct = ({prod}) => {
  const {cart, setCart} = useContext(Cart);
  return (
    <div className='products'>
        <img src={prod.image} alt={prod.name}/>
        <div className="productDesc">
            <span style={{ forntWeight: 700}}>{prod.name}</span>
            <span>$ {prod.price.substring(0, 3)}</span>
        </div>
        {cart.includes(prod) ? (
        <button
          className="add remove"
          onClick={() => setCart(cart.filter((c) => c.id !== prod.id))}
        >
          Remove from Cart
        </button>
      ) : (
        <button className="add" onClick={() => setCart([...cart, prod])}>
          Add to Cart
        </button>
      )}
    </div>
  )
}

export default SingleProduct
