import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';



const Header = () => {

  const [{basket}, dispatch] = useStateValue();

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
  <Link to="/" className='text-decoration-none d-flex'>
    <i className='bi bi-shop-window fs-4 text-warning'></i>
    <a className="navbar-brand text-white" href="#">eShop</a>
    </Link>
    <div className="input-group">
  <input type="text" class="form-control rounded-0" placeholder="Search......." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span className="input-group-text bg-warning" id="basic-addon2"><i className='bi bi-search'></i></span>
</div>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active d-flex flex-column text-white" aria-current="page" href="#">
          <small style={{fontSize: "15px"}}>Hi Guest</small>
           <Link to="login" className='text-decoration-none text-white'><strong style={{fontSize: "17px"}}>SignIn</strong></Link>
          </a>
        </li>
        <li className="nav-item">
        <a className="nav-link active d-flex flex-column text-white" Garia-current="page" href="#">
          <small style={{fontSize: "15px"}}>Your</small> <strong style={{fontSize: "17px"}}>Shop</strong>
          </a>
        </li>
        <li className="nav-item">
        <Link className="nav-link active d-flex" Garia-current="page" to="/checkout">
          <i className='bi bi-basket2 text-white ms-1'>
          <span className='mt-1'>{basket.length}</span>
          </i>
          </Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
     
    </>
  )
}

export default Header