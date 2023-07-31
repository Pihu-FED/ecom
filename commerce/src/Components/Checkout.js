import React from 'react'
import amazone from '../Assets/images/amazone.jpg';
import CheckoutProduct from './CheckoutProduct';
import SubTotal from './SubTotal';
import { useStateValue } from './StateProvider';


const Checkout = () => {

  const [{basket}, dispatch] = useStateValue();
  console.log("basket=",basket);

  return (
    <div className='container-fluid'>
    <div className='row mt-2 min-vh-100'>
    <div className='col-9'>
    <img src={amazone} className='w-100' style={{height: "180px"}} alt=""/>
    <div className='mt-2'>
    <h3>Your Shopping Cart</h3>
    {basket !== 'undefined' ? basket.map((item,index) =>(
      <CheckoutProduct
        id = {item.id}
        title = {item.title}
        image = {item.image}
        rating = {item.rating}
        price = {item.price}
      />
    )):null}

    </div>

    </div>
    <div className='col-3'>
    <SubTotal/>

    </div>

    </div>

    </div>
  )
}

export default Checkout