import React, { useState } from 'react'

function Login() {

    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    function handleSubmit(event){
        event.preventDefault();
    }

  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100 bg-success'>
    <div className='bg-white p-3 rounded w-25'>
    <form onSubmit={handleSubmit}>
    <h2 className='text-center'>SignIN</h2>
        <div className='mb-2'>
            <label htmlFor=""><strong>Email</strong></label>
            <input type="email" placeholder='Enter email....'
            onChange={e => setEmail(e.target.value)} className='form-control rounded-0' />
        </div>
        <div className='mb-2'>
            <label htmlFor=""><strong>Password</strong></label>
            <input type="password" placeholder='password...' 
            onChange={e => setPassword(e.target.value)} className='form-control rounded-0' />
        </div>
        <button className='btn btn-warning rounded-0 w-100 mb-2'>SignIn</button>
        <p>By signing here you are agree to the terms and policies and all.</p>
        <button className='btn btn-default border rounded-0 w-100 mb-2'>Create Acount</button>
    </form>

    </div>

    </div>
  )
}

export default Login