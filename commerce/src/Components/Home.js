import React from 'react'
import ecommerce from '../Assets/images/ecommerce.jpg';
import Product from './Product';


const Home = () => {
  return (
    <div>
    <div className='w-100'>
        <img src={ecommerce}  className="w-100" style={{height:"400px"}} alt="ecommerce" />
    </div>
    <div className='products bg-light p-3'>
    <div className='p-3 d-flex'>
    <div className='w-50 p-2 bg-white m-2'>
<Product
    id= {1223}
    title= {"This is seven generation Computer"}
    image= {"computer.jpg"}
    rating= {4}
    price= {240}
/>
    </div>
    <div className='w-50 p-2 bg-white m-2'>
<Product
    id= {1224}
    title= {"This is bottles"}
    image= {"bottles.webp"}
    rating= {4}
    price= {70}
/>
    </div>

    </div>
    <div className='p-3 d-flex'>
    <div className='p-2 bg-white m-2 col'>
<Product
    id= {1225}
    title= {"This is Men Jacket"}
    image= {"men jacket.webp"}
    rating= {4}
    price= {60}
/>
    </div>
    <div className='p-2 bg-white m-2 col'>
<Product
    id= {1226}
    title= {"This is Wireless headphone"}
    image= {"wireless-headphone.avif"}
    rating= {4}
    price= {50}
/>
    </div>
    <div className='p-2 bg-white m-2 col'>
<Product
    id= {1227}
    title= {"This is Nike Shoes"}
    image= {"shoes.jpg"}
    rating= {4}
    price= {140}
/>
    </div>

    </div>
    <div className='p-3'>
    <div className='p-2 bg-white m-2 d-flex justify-content-center'>
<Product
    id= {1228}
    title= {"This is a Office Chair"}
    image= {"chair.jpg"}
    rating= {4}
    price= {60}
/>
    </div>
    

    </div>

    </div>
    </div>
  )
}

export default Home