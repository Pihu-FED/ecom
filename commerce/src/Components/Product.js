import React from 'react'
import { useStateValue } from './StateProvider';
import { BsFillStarFill } from "react-icons/bs";


const Product = ({id, title, image, rating, price}) => {
  // console.log("image===",image);

  const [state, dispatch] = useStateValue();
  function addProduct(){
    dispatch(
      {
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          rating: rating,
          price: price
        }
      }
    )

  }
  return (
    <div className='d-flex flex-column'>
        <h4>{title}</h4>
        <strong>${price}</strong>
        <p>
          {Array(rating).fill().map((_, i)=>(<span><BsFillStarFill/></span>))}
       </p>
        <div className='d-flex flex-column align-items-center'>
        <img src={require(`../Assets/images/${image}`)}  className= "w-50 mt-1" alt="PC" />
        <button onClick={addProduct} className='btn btn-warning w-auto mt-3'>Add Product</button>
        </div>
    </div>
  )
}

export default Product