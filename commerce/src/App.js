
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './Components/Checkout';
import Login from './Components/Login';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/checkout' element={<Checkout/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
     </Routes>
     <Footer/>
     </BrowserRouter>
  );
}

export default App;
