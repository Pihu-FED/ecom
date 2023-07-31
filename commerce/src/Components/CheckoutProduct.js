import React from 'react'
import computer from '../Assets/images/computer.jpg';
import { BsFillStarFill } from "react-icons/bs";
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({id, title, image, rating, price}) => {

  const [{basket}, dispatch] = useStateValue();
  const removeFromCart = () => {
dispatch(
  {
    type: "Remove_From_Cart",
    id: id
  }
)
  }
  return (
    <div className='d-flex' key={id}>
    <div style={{width: "160px"}}>
        <img src={require(`../Assets/images/${image}`)} className='w-100' alt="PC" />

    </div>
    <div className='ms-4'>
        <h4>{title}</h4>
        <span>$<strong>{price}</strong></span>
        <p>
        {Array(rating).fill().map((_, i)=>(<span><BsFillStarFill/></span>))}
        </p>
        <button className='btn btn-sm btn-warning rounded-0' onClick={removeFromCart}>Remove from Cart</button>
    </div>
    </div>
  )
}

export default CheckoutProduct